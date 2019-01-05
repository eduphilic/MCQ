import {
  Button,
  Grid,
  LoadingSpinner,
  PendingChangesButton,
} from "@join-uniform/components";
import {
  EntryManagerDeleteCategoriesComponent,
  EntryManagerDeleteCategoriesMutation,
  EntryManagerDeleteCategoriesVariables,
  EntryManagerDeleteEntriesComponent,
  EntryManagerDeleteEntriesMutation,
  EntryManagerDeleteEntriesVariables,
  EntryManagerGetEntriesComponent,
  EntryManagerGetEntriesEntries,
  EntryManagerGetEntriesQuery,
  EntryManagerGetEntriesVariables,
  EntryManagerSetCategoryActivationStatusesComponent,
  EntryManagerSetCategoryActivationStatusesMutation,
  EntryManagerSetCategoryActivationStatusesVariables,
} from "@join-uniform/graphql";
import { AddIcon } from "@join-uniform/icons";
import { FormikHelpers, useFormik } from "formik";
import Link from "next/link";
import Router from "next/router";
import React from "react";
import { adopt } from "react-adopt";
import { MutationFn, QueryResult } from "react-apollo";
import { AdminLayoutDashboardContainer } from "~/containers";
import { EntryManagementCard, updateStoreEntries } from "~/lib/admin";

type FormValues = {
  entries: EntryManagerGetEntriesEntries[];
};

type RenderProps = {
  getEntriesResult: QueryResult<
    EntryManagerGetEntriesQuery,
    EntryManagerGetEntriesVariables
  >;
  deleteEntries: MutationFn<
    EntryManagerDeleteEntriesMutation,
    EntryManagerDeleteEntriesVariables
  >;
  deleteCategories: MutationFn<
    EntryManagerDeleteCategoriesMutation,
    EntryManagerDeleteCategoriesVariables
  >;
  setCategoryActivationStatuses: MutationFn<
    EntryManagerSetCategoryActivationStatusesMutation,
    EntryManagerSetCategoryActivationStatusesVariables
  >;
};

type Props = Omit<RenderProps, "getEntriesResult"> & {
  entries: EntryManagerGetEntriesEntries[];
};

const Composed = adopt<RenderProps, {}>({
  getEntriesResult: <EntryManagerGetEntriesComponent />,
  deleteEntries: <EntryManagerDeleteEntriesComponent />,
  deleteCategories: <EntryManagerDeleteCategoriesComponent />,
  setCategoryActivationStatuses: (
    <EntryManagerSetCategoryActivationStatusesComponent />
  ),
});

export default function PageContainer() {
  return (
    <Composed>
      {props => {
        const {
          getEntriesResult: { data, loading, error },
          ...rest
        } = props;
        if (loading || error || !data) return <LoadingSpinner />;
        const { entries } = data;

        return <Page {...rest} entries={entries} />;
      }}
    </Composed>
  );
}

function Page(props: Props) {
  const {
    entries,
    deleteEntries,
    deleteCategories,
    setCategoryActivationStatuses,
  } = props;
  const form = useFormik<FormValues>({
    enableReinitialize: true,
    initialValues: { entries },
    onSubmit: handleSubmit,
  });

  return (
    <AdminLayoutDashboardContainer
      title="Entry Manager"
      appBarButtons={[
        <PendingChangesButton
          hasDiscardableChanges={form.dirty}
          hasPublishableChanges={form.isValid}
          onDiscardButtonClick={() => form.resetForm()}
          onPublishButtonClick={() => form.submitForm()}
        />,
        <Link href="/admin/entry-manager/new">
          <Button color="orange">
            <AddIcon />
            Entry
          </Button>
        </Link>,
      ]}
    >
      <Grid container contentCenter spacing={16}>
        {form.values.entries.map(entry => (
          <Grid key={entry.id} item xs={12}>
            <EntryManagementCard
              entryId={entry.id}
              entryName={entry.name}
              entryLogoUrl={entry.logoUrl}
              categories={entry.categories}
              deleteEntryButtonDisabled={entry.categories.length > 0}
              onCategoryToggle={categoryId =>
                handleCategoryToggle(entry.id, categoryId)
              }
              onCategoryEditClick={handleCategoryEditClick}
              onCategoriesDelete={handleCategoriesDelete}
              onEditEntryClick={handleEditEntryButtonClick}
              onDeleteEntryClick={handleDeleteEntryButtonClick}
            />
          </Grid>
        ))}
      </Grid>
    </AdminLayoutDashboardContainer>
  );

  function handleCategoriesDelete(entryId: string, categoryIds: string[]) {
    const entryIndex = form.values.entries.findIndex(e => e.id === entryId);
    const categories = form.values.entries[entryIndex].categories.filter(
      c => !categoryIds.includes(c.id),
    );
    form.setFieldValue(`entries[${entryIndex}].categories`, categories);
  }

  function handleCategoryEditClick(categoryId: string) {
    // tslint:disable-next-line:no-floating-promises
    Router.push(`/admin/entry-manager/edit-category?categoryId=${categoryId}`);
  }

  function handleCategoryToggle(entryId: string, categoryId: string) {
    const entryIndex = form.values.entries.findIndex(e => e.id === entryId);
    const categoryIndex = form.values.entries[entryIndex].categories.findIndex(
      c => c.id === categoryId,
    );
    const activated =
      form.values.entries[entryIndex].categories[categoryIndex].activated;
    form.setFieldValue(
      `entries[${entryIndex}].categories[${categoryIndex}].activated`,
      !activated,
    );
  }

  function handleEditEntryButtonClick(entryId: string) {
    // tslint:disable-next-line:no-floating-promises
    Router.push(`/admin/entry-manager/edit-entry?entryId=${entryId}`);
  }

  function handleDeleteEntryButtonClick(entryId: string) {
    form.setFieldValue(
      "entries",
      form.values.entries.filter(e => e.id !== entryId),
    );
  }

  async function handleSubmit(
    values: FormValues,
    helpers: FormikHelpers<FormValues>,
  ) {
    // Handle Category activation toggling.
    const initialCategories = entries.flatMap(e => e.categories);
    const activationToggledCategories = values.entries
      .flatMap(e => e.categories)
      .filter(
        c =>
          initialCategories.find(cc => cc.id === c.id)!.activated !==
          c.activated,
      );
    if (activationToggledCategories.length > 0) {
      await setCategoryActivationStatuses({
        variables: {
          categoryIds: activationToggledCategories.map(c => c.id),
          activationStatuses: activationToggledCategories.map(c => c.activated),
        },
        update: proxy => {
          updateStoreEntries(proxy, queryResult => {
            queryResult.entries
              .flatMap(e => e.categories)
              .forEach(category => {
                const update = activationToggledCategories.find(
                  cc => cc.id === category.id,
                );
                if (!update) return;
                category.activated = update.activated;
              });
          });
        },
      });
    }

    // Handle Category deletions.
    const initialCategoryIds = entries.flatMap(e =>
      e.categories.map(c => c.id),
    );
    const finalCategoryIds = values.entries.flatMap(e =>
      e.categories.map(c => c.id),
    );
    const deletedCategoryIds = initialCategoryIds.filter(
      id => !finalCategoryIds.includes(id),
    );
    if (deletedCategoryIds.length > 0) {
      await deleteCategories({
        variables: {
          categoryIds: deletedCategoryIds,
        },
        update: proxy => {
          updateStoreEntries(proxy, queryResult => {
            queryResult.entries.forEach(entry => {
              entry.categories = entry.categories.filter(
                c => !deletedCategoryIds.includes(c.id),
              );
            });
          });
        },
      });
    }

    // Handle Entry deletions.
    const initialEntryIds = entries.map(entry => entry.id);
    const finalEntryIds = values.entries.map(entry => entry.id);
    if (initialEntryIds.length !== finalEntryIds.length) {
      const deletedEntryIds = initialEntryIds.filter(
        id => !finalEntryIds.includes(id),
      );
      await deleteEntries({
        variables: { entryIds: deletedEntryIds },
        update: proxy => {
          updateStoreEntries(proxy, queryResult => {
            queryResult.entries = queryResult.entries.filter(
              e => !deletedEntryIds.includes(e.id),
            );
          });
        },
      });
    }

    helpers.setSubmitting(false);
  }
}
