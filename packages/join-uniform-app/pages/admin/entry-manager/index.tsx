import {
  Grid,
  LoadingSpinner,
  PendingChangesButton,
} from "@join-uniform/components";
import {
  EntryManagerDeleteEntriesHOC,
  EntryManagerDeleteEntriesMutation,
  EntryManagerDeleteEntriesVariables,
  EntryManagerGetEntriesDocument,
  EntryManagerGetEntriesHOC,
  EntryManagerGetEntriesProps,
  EntryManagerGetEntriesQuery,
  EntryManagerGetEntriesVariables,
} from "@join-uniform/graphql";
import { useFormik } from "formik";
import Router from "next/router";
import React from "react";
import { MutationFn } from "react-apollo";
import { AdminLayoutDashboardContainer } from "~/containers";
import { EntryManagementCard } from "~/lib/admin";

type Props = EntryManagerGetEntriesProps<{}> & {
  deleteEntries: MutationFn<
    EntryManagerDeleteEntriesMutation,
    EntryManagerDeleteEntriesVariables
  >;
};

function EntryManagerPage(props: Props) {
  /* tslint:disable-next-line:no-console */
  // console.log({ props });

  const { data, deleteEntries } = props;
  if (!data || data.loading || data.error || !data.entries) {
    return <LoadingSpinner />;
  }

  const { entries } = data;
  const form = useFormik({
    enableReinitialize: true,
    initialValues: { entries },
    onSubmit: async (values, helpers) => {
      // Handle entry deletions.
      const initialEntryIds = entries.map(entry => entry.id);
      const finalEntryIds = values.entries.map(entry => entry.id);
      if (initialEntryIds.length !== finalEntryIds.length) {
        const deletedEntryIds = initialEntryIds.filter(
          id => !finalEntryIds.includes(id),
        );
        await deleteEntries({
          variables: { entryIds: deletedEntryIds },
          update: proxy => {
            const dataUpdate = proxy.readQuery<
              EntryManagerGetEntriesQuery,
              EntryManagerGetEntriesVariables
            >({ query: EntryManagerGetEntriesDocument })!;

            dataUpdate.entries = dataUpdate.entries.filter(
              e => !deletedEntryIds.includes(e.id),
            );

            proxy.writeQuery({
              query: EntryManagerGetEntriesDocument,
              data: dataUpdate,
            });
          },
        });
      }

      helpers.setSubmitting(false);
    },
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
      ]}
    >
      <Grid container contentCenter spacing={16}>
        {form.values.entries.map(entry => (
          <Grid key={entry.id} item xs={12}>
            <EntryManagementCard
              entryId={entry.id}
              entryName={entry.name}
              entryLogoUrl={entry.logoUrl}
              deleteEntryButtonDisabled={entry.categories.length > 0}
              onEditEntryClick={handleEditEntryButtonClick}
              onDeleteEntryClick={handleDeleteEntryButtonClick}
            />
          </Grid>
        ))}
      </Grid>
    </AdminLayoutDashboardContainer>
  );

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
}

export default EntryManagerDeleteEntriesHOC({
  name: "deleteEntries",
})(EntryManagerGetEntriesHOC({})(EntryManagerPage));

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
