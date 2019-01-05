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
};

type Props = Omit<RenderProps, "getEntriesResult"> & {
  entries: EntryManagerGetEntriesEntries[];
};

const Composed = adopt<RenderProps, {}>({
  getEntriesResult: <EntryManagerGetEntriesComponent />,
  deleteEntries: <EntryManagerDeleteEntriesComponent />,
  deleteCategories: <EntryManagerDeleteCategoriesComponent />,
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
  const { entries, deleteEntries, deleteCategories } = props;
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

// import {
//   Button,
//   DashboardCard,
//   DashboardCardItem,
//   Grid,
//   Typography,
// } from "@join-uniform/components";
// import {
//   DeleteCategoriesComponent,
//   DeleteCategoriesMutation,
//   DeleteCategoriesVariables,
//   DeleteEntryComponent,
//   GetEntriesComponent,
//   GetEntriesEntries,
//   GetEntryCategoriesComponent,
//   GetEntryCategoriesEntryCategories,
//   SetCategoryActivationStatusComponent,
// } from "@join-uniform/graphql";
// import { AddIcon } from "@join-uniform/icons";
// import { css, styled } from "@join-uniform/theme";
// import Link from "next/link";
// import Router from "next/router";
// import React from "react";
// import { MutationFn } from "react-apollo";
// import { AdminLayoutDashboardContainer } from "~/containers";
// import {
//   createResponsiveImageUrl,
//   urlHashCodeEncode,
//   withQueryLoadingSpinner,
// } from "~/lib/utils";

// export default function AdminEntryManagerIndexPage() {
//   return (
//     <AdminLayoutDashboardContainer
//       title="Entry Manager"
//       appBarButtons={[
//         <Link href="/admin/entry-manager/new">
//           <Button color="orange">
//             {/* prettier-ignore */}
//             <AddIcon css={css`margin-right: 8px;`} />
//             Entry
//           </Button>
//         </Link>,
//       ]}
//     >
//       <Grid container contentCenter spacing={16}>
//         <DeleteCategoriesComponent>
//           {deleteCategories =>
//             withQueryLoadingSpinner(GetEntriesComponent, entriesResult =>
//               entriesResult.data.entries.map(entry =>
//                 withQueryLoadingSpinner(
//                   GetEntryCategoriesComponent,
//                   { key: entry.id, variables: { entryId: entry.id } },
//                   categoriesResult =>
//                     renderEntryCard(
//                       entry,
//                       categoriesResult.data.entryCategories,
//                       entriesResult.refetch,
//                       categoriesResult.refetch,
//                       deleteCategories,
//                     ),
//                 ),
//               ),
//             )
//           }
//         </DeleteCategoriesComponent>
//       </Grid>
//     </AdminLayoutDashboardContainer>
//   );

//   function renderEntryCard(
//     entry: GetEntriesEntries,
//     categories: GetEntryCategoriesEntryCategories[],
//     entriesRefetch: () => any,
//     categoriesRefetch: () => any,
//     deleteCategories: MutationFn<
//       DeleteCategoriesMutation,
//       DeleteCategoriesVariables
//     >,
//   ) {
//     return (
//       <SetCategoryActivationStatusComponent>
//         {setCategoryActivationStatus => (
//           <DeleteEntryComponent>
//             {deleteEntry => (
//               <Grid key={entry.id} item xs={12}>
//                 <DashboardCard
//                   title={`${entry.name} Entry`}
//                   titleSiblingNode={
//                     <Typography variant="subtitle1">
//                       #{urlHashCodeEncode(entry.name)}
//                     </Typography>
//                   }
//                   iconNode={<EntryLogoImageIcon logoUrl={entry.logoUrl} />}
//                   columnLabels={[
//                     "Category",
//                     "Cost Per Paper (Rs)",
//                     "Activated",
//                   ]}
//                   columnTypes={["dual-line", "single-line", "switch"]}
//                   bottomActionsNode={
//                     <>
//                       <Button
//                         onClick={() => {

//                         }}
//                       >
//                         Edit Entry
//                       </Button>
//                       <Button
//                         disabled={categories.length > 0}
//                         onClick={async () => {
//                           if (
//                             !confirm(
//                               "Are you sure you want to delete this Entry?",
//                             )
//                           ) {
//                             return;
//                           }

//                           await deleteEntry({
//                             variables: {
//                               entryId: entry.id,
//                             },
//                           });
//                           await entriesRefetch();
//                         }}
//                       >
//                         Delete Entry
//                       </Button>
//                     </>
//                   }
//                   onItemEditClick={categoryId => {
//                     // tslint:disable-next-line:no-floating-promises
//                     Router.push(
//                       `/admin/entry-manager/edit-category?categoryId=${categoryId}`,
//                     );
//                   }}
//                   onRequestDeleteClick={async categoryIds => {
//                     if (!confirm("Remove the selected categories?")) return;
//                     await deleteCategories({
//                       variables: { entryId: entry.id, categoryIds },
//                     });
//                     await categoriesRefetch();
//                   }}
//                   items={categories.map(
//                     (category): DashboardCardItem => ({
//                       key: category.id,
//                       columns: [
//                         {
//                           primaryText: category.name,
//                           secondaryText: category.education,
//                         },
//                         {
//                           primaryText: category.pricePerPaperRs.toString(),
//                         },
//                         {
//                           switchChecked: category.activated,
//                           switchTooltipTitle: "Toggle Activation",
//                           switchOnChange: async checked => {
//                             await setCategoryActivationStatus({
//                               variables: {
//                                 categoryId: category.id,
//                                 activated: checked,
//                               },
//                             });
//                             await categoriesRefetch();
//                           },
//                         },
//                       ],
//                     }),
//                   )}
//                 />
//               </Grid>
//             )}
//           </DeleteEntryComponent>
//         )}
//       </SetCategoryActivationStatusComponent>
//     );
//   }
// }
