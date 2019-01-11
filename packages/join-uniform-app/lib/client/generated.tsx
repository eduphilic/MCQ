// This is an automatically generated file.
// DO NOT MODIFY
// Use the command: "yarn graphql" to regenerate.
import { models } from "@join-uniform/common";
export type Maybe<T> = T | null;


export interface CategoryCreationRequestExistingEntry {
  
  readonly categoryName: string;
  
  readonly categoryEducation: string;
  
  readonly pricePerPaper: number;
  
  readonly existingEntryId: string;
}

export interface CategoryCreationRequestNewEntry {
  
  readonly categoryName: string;
  
  readonly categoryEducation: string;
  
  readonly pricePerPaper: number;
  
  readonly entryLogoUrl: string;
  
  readonly entryName: string;
  
  readonly entryExplanation: string;
}

export interface EntryUpdate {
  
  readonly name: string;
  
  readonly logoUrl: string;
  
  readonly description: string;
}

export interface CategoryUpdate {
  
  readonly name: string;
  
  readonly education: string;
  
  readonly pricePerPaperRs: number;
}

export interface InputIndexPageUpdate {
  
  readonly heroBackgroundImageUrl: string;
  
  readonly heroBackgroundAlpha: number;
  
  readonly heroPrimaryTextEnglish: string;
  
  readonly heroPrimaryTextHindi: Maybe<string>;
  
  readonly heroFeatures: ReadonlyArray<models.LocalizedString>;
  
  readonly aboutTitleEnglish: string;
  
  readonly aboutTitleHindi: Maybe<string>;
  
  readonly aboutTextEnglish: string;
  
  readonly aboutTextHindi: Maybe<string>;
  
  readonly aboutImages: ReadonlyArray<AboutImageUpdate>;
  
  readonly indexCards: ReadonlyArray<IndexCardUpdate>;
}

export interface AboutImageUpdate {
  
  readonly imageUrl: string;
  
  readonly title: models.LocalizedString;
  
  readonly text: models.LocalizedString;
}

export interface IndexCardUpdate {
  
  readonly entryId: string;
  
  readonly colorBlock: string;
  
  readonly colorCategoryBackground: string;
  
  readonly colorLogoBackground: string;
  
  readonly colorTitle: string;
  
  readonly categories: ReadonlyArray<IndexCardCategoryUpdate>;
}

export interface IndexCardCategoryUpdate {
  
  readonly categoryId: string;
  
  readonly visible: boolean;
}

/** Represents a localized string. The Hindi field is optional. Fields: - en: String! - hi: String */
export type LocalizedString = models.LocalizedString;


export type Json = any;


// ====================================================
// Documents
// ====================================================



  export type AdminLayoutDashboardContainerLogoUrlVariables = {
  }

  export type AdminLayoutDashboardContainerLogoUrlQuery = {
    readonly __typename?: "Query";
    
    readonly logoConfig: AdminLayoutDashboardContainerLogoUrlLogoConfig;
  }

  export type AdminLayoutDashboardContainerLogoUrlLogoConfig = {
    readonly __typename?: "LogoConfig";
    
    readonly url: string;
  } 

  export type EntryManagerCreateCategoryAndNewEntryVariables = {
    readonly request: CategoryCreationRequestNewEntry;
  }

  export type EntryManagerCreateCategoryAndNewEntryMutation = {
    readonly __typename?: "Mutation";
    
    readonly createCategoryNewEntry: EntryManagerCreateCategoryAndNewEntryCreateCategoryNewEntry;
  }

  export type EntryManagerCreateCategoryAndNewEntryCreateCategoryNewEntry = EntryManagerEntryPartsFragment

  export type EntryManagerCreateCategoryForExistingEntryVariables = {
    readonly request: CategoryCreationRequestExistingEntry;
  }

  export type EntryManagerCreateCategoryForExistingEntryMutation = {
    readonly __typename?: "Mutation";
    
    readonly createCategoryExistingEntry: EntryManagerCreateCategoryForExistingEntryCreateCategoryExistingEntry;
  }

  export type EntryManagerCreateCategoryForExistingEntryCreateCategoryExistingEntry = EntryManagerCategoryPartsFragment

  export type EntryManagerDeleteCategoriesVariables = {
    readonly categoryIds: ReadonlyArray<string>;
  }

  export type EntryManagerDeleteCategoriesMutation = {
    readonly __typename?: "Mutation";
    
    readonly deleteCategories: ReadonlyArray<EntryManagerDeleteCategoriesDeleteCategories>;
  }

  export type EntryManagerDeleteCategoriesDeleteCategories = EntryManagerCategoryPartsFragment

  export type EntryManagerDeleteEntriesVariables = {
    readonly entryIds: ReadonlyArray<string>;
  }

  export type EntryManagerDeleteEntriesMutation = {
    readonly __typename?: "Mutation";
    
    readonly deleteEntries: Maybe<boolean>;
  }

  export type EntryManagerGetCategoryVariables = {
    readonly id: string;
  }

  export type EntryManagerGetCategoryQuery = {
    readonly __typename?: "Query";
    
    readonly category: Maybe<EntryManagerGetCategoryCategory>;
  }

  export type EntryManagerGetCategoryCategory = EntryManagerCategoryPartsFragment

  export type EntryManagerGetEntriesVariables = {
  }

  export type EntryManagerGetEntriesQuery = {
    readonly __typename?: "Query";
    
    readonly entries: ReadonlyArray<EntryManagerGetEntriesEntries>;
  }

  export type EntryManagerGetEntriesEntries = EntryManagerEntryPartsFragment

  export type EntryManagerGetEntryVariables = {
    readonly entryId: string;
  }

  export type EntryManagerGetEntryQuery = {
    readonly __typename?: "Query";
    
    readonly entry: Maybe<EntryManagerGetEntryEntry>;
  }

  export type EntryManagerGetEntryEntry = EntryManagerEntryPartsFragment

  export type EntryManagerSetCategoryActivationStatusesVariables = {
    readonly categoryIds: ReadonlyArray<string>;
    readonly activationStatuses: ReadonlyArray<boolean>;
  }

  export type EntryManagerSetCategoryActivationStatusesMutation = {
    readonly __typename?: "Mutation";
    
    readonly setCategoryActivationStatuses: ReadonlyArray<EntryManagerSetCategoryActivationStatusesSetCategoryActivationStatuses>;
  }

  export type EntryManagerSetCategoryActivationStatusesSetCategoryActivationStatuses = EntryManagerCategoryPartsFragment

  export type EntryManagerUpdateCategoryVariables = {
    readonly categoryId: string;
    readonly update: CategoryUpdate;
  }

  export type EntryManagerUpdateCategoryMutation = {
    readonly __typename?: "Mutation";
    
    readonly updateCategory: EntryManagerUpdateCategoryUpdateCategory;
  }

  export type EntryManagerUpdateCategoryUpdateCategory = EntryManagerCategoryPartsFragment

  export type EntryManagerUpdateEntryVariables = {
    readonly entryId: string;
    readonly update: EntryUpdate;
  }

  export type EntryManagerUpdateEntryMutation = {
    readonly __typename?: "Mutation";
    
    readonly updateEntry: EntryManagerUpdateEntryUpdateEntry;
  }

  export type EntryManagerUpdateEntryUpdateEntry = EntryManagerEntryPartsFragment

  export type IndexManagerGetIndexPageConfigVariables = {
  }

  export type IndexManagerGetIndexPageConfigQuery = {
    readonly __typename?: "Query";
    
    readonly logoConfig: IndexManagerGetIndexPageConfigLogoConfig;
    
    readonly indexPageConfig: IndexManagerGetIndexPageConfigIndexPageConfig;
  }

  export type IndexManagerGetIndexPageConfigLogoConfig = {
    readonly __typename?: "LogoConfig";
    
    readonly id: string;
    
    readonly url: string;
  } 

  export type IndexManagerGetIndexPageConfigIndexPageConfig = {
    readonly __typename?: "IndexPageConfig";
    
    readonly id: string;
    
    readonly heroBackgroundImageUrl: string;
    
    readonly heroBackgroundAlpha: number;
    
    readonly heroPrimaryText: models.LocalizedString;
    
    readonly heroFeatures: ReadonlyArray<models.LocalizedString>;
    
    readonly heroFooterText: models.LocalizedString;
    
    readonly aboutTitle: models.LocalizedString;
    
    readonly aboutText: models.LocalizedString;
    
    readonly aboutImages: ReadonlyArray<IndexManagerGetIndexPageConfigAboutImages>;
  } 

  export type IndexManagerGetIndexPageConfigAboutImages = {
    readonly __typename?: "IndexPageAboutImage";
    
    readonly id: string;
    
    readonly imageUrl: string;
    
    readonly title: models.LocalizedString;
    
    readonly text: models.LocalizedString;
  } 

  export type IndexManagerUpdateLogoUrlVariables = {
    readonly logoUrl: string;
  }

  export type IndexManagerUpdateLogoUrlMutation = {
    readonly __typename?: "Mutation";
    
    readonly updateLogoUrl: IndexManagerUpdateLogoUrlUpdateLogoUrl;
  }

  export type IndexManagerUpdateLogoUrlUpdateLogoUrl = {
    readonly __typename?: "LogoConfig";
    
    readonly id: string;
    
    readonly url: string;
  } 

  export type WithHtmlSeoDocumentHtmlConfigVariables = {
  }

  export type WithHtmlSeoDocumentHtmlConfigQuery = {
    readonly __typename?: "Query";
    
    readonly htmlConfig: WithHtmlSeoDocumentHtmlConfigHtmlConfig;
  }

  export type WithHtmlSeoDocumentHtmlConfigHtmlConfig = {
    readonly __typename?: "HtmlConfig";
    
    readonly googleAnalyticsId: Maybe<string>;
    
    readonly metaKeywords: Maybe<string>;
    
    readonly metaDescription: Maybe<string>;
    
    readonly metaAuthor: Maybe<string>;
    
    readonly metaAbstract: Maybe<string>;
    
    readonly metaCopyright: Maybe<string>;
  } 

  export type WithLoadingSpinnerAppLogoConfigVariables = {
  }

  export type WithLoadingSpinnerAppLogoConfigQuery = {
    readonly __typename?: "Query";
    
    readonly logoConfig: WithLoadingSpinnerAppLogoConfigLogoConfig;
  }

  export type WithLoadingSpinnerAppLogoConfigLogoConfig = {
    readonly __typename?: "LogoConfig";
    
    readonly url: string;
  } 

  export type CloudinaryConfigVariables = {
  }

  export type CloudinaryConfigQuery = {
    readonly __typename?: "Query";
    
    readonly cloudinaryCloudName: string;
    
    readonly cloudinaryApiKey: string;
  }

  export type CloudinaryGenerateMediaLibraryAuthenticationTokenVariables = {
  }

  export type CloudinaryGenerateMediaLibraryAuthenticationTokenMutation = {
    readonly __typename?: "Mutation";
    
    readonly generateCloudinaryMediaLibraryAuthenticationToken: CloudinaryGenerateMediaLibraryAuthenticationTokenGenerateCloudinaryMediaLibraryAuthenticationToken;
  }

  export type CloudinaryGenerateMediaLibraryAuthenticationTokenGenerateCloudinaryMediaLibraryAuthenticationToken = {
    readonly __typename?: "CloudinaryMediaWidgetAuthenticationToken";
    
    readonly api_key: string;
    
    readonly cloud_name: string;
    
    readonly signature: string;
    
    readonly timestamp: string;
    
    readonly username: string;
  } 

  export type CloudinaryGenerateSignatureVariables = {
    readonly paramsToSign: Json;
  }

  export type CloudinaryGenerateSignatureMutation = {
    readonly __typename?: "Mutation";
    
    readonly generateCloudinarySignature: string;
  }

  export type EntryManagerCategoryPartsFragment = {
    readonly __typename?: "Category";
    
    readonly id: string;
    
    readonly name: string;
    
    readonly education: string;
    
    readonly pricePerPaperRs: number;
    
    readonly activated: boolean;
  }

  export type EntryManagerEntryPartsFragment = {
    readonly __typename?: "Entry";
    
    readonly id: string;
    
    readonly name: string;
    
    readonly logoUrl: string;
    
    readonly description: string;
    
    readonly categories: ReadonlyArray<EntryManagerEntryPartsCategories>;
  }

  export type EntryManagerEntryPartsCategories =EntryManagerCategoryPartsFragment

import * as ReactApollo from 'react-apollo';
import * as React from 'react';

import gql from 'graphql-tag';



// ====================================================
// Fragments
// ====================================================



          export const EntryManagerCategoryPartsFragmentDoc = gql`
    fragment EntryManagerCategoryParts on Category {
  id
  name
  education
  pricePerPaperRs
  activated
}
    
      
    
  `;
        

          export const EntryManagerEntryPartsFragmentDoc = gql`
    fragment EntryManagerEntryParts on Entry {
  id
  name
  logoUrl
  description
  categories {
    ...EntryManagerCategoryParts
  }
}
    
      ${EntryManagerCategoryPartsFragmentDoc}
    
  `;
        



// ====================================================
// Components
// ====================================================


    export const AdminLayoutDashboardContainerLogoUrlDocument = gql`
    query AdminLayoutDashboardContainerLogoUrl {
  logoConfig {
    url
  }
}
    
      
    
  `;
     export class AdminLayoutDashboardContainerLogoUrlComponent extends React.Component<Partial<ReactApollo.QueryProps<AdminLayoutDashboardContainerLogoUrlQuery, AdminLayoutDashboardContainerLogoUrlVariables>>> {
        render(){
            return (
                <ReactApollo.Query<AdminLayoutDashboardContainerLogoUrlQuery, AdminLayoutDashboardContainerLogoUrlVariables>
                query={ AdminLayoutDashboardContainerLogoUrlDocument }
                {...(this as any)['props'] as any}
                />
            );
        }
    }
    export type AdminLayoutDashboardContainerLogoUrlProps<TChildProps = any> = 
            Partial<
                ReactApollo.DataProps<
                                        AdminLayoutDashboardContainerLogoUrlQuery, 
                                        AdminLayoutDashboardContainerLogoUrlVariables
                                    >
                    >
         & TChildProps;
    export function AdminLayoutDashboardContainerLogoUrlHOC<TProps, TChildProps = any>(operationOptions: 
            ReactApollo.OperationOption<
                TProps, 
                AdminLayoutDashboardContainerLogoUrlQuery,
                AdminLayoutDashboardContainerLogoUrlVariables,
                AdminLayoutDashboardContainerLogoUrlProps<TChildProps>
            > | undefined){
        return ReactApollo.graphql<TProps, AdminLayoutDashboardContainerLogoUrlQuery, AdminLayoutDashboardContainerLogoUrlVariables, AdminLayoutDashboardContainerLogoUrlProps<TChildProps>>(
            AdminLayoutDashboardContainerLogoUrlDocument,
            operationOptions
        );
    };
    export const EntryManagerCreateCategoryAndNewEntryDocument = gql`
    mutation EntryManagerCreateCategoryAndNewEntry($request: CategoryCreationRequestNewEntry!) {
  createCategoryNewEntry(request: $request) {
    ...EntryManagerEntryParts
  }
}
    
      ${EntryManagerEntryPartsFragmentDoc}
    
  `;
     export class EntryManagerCreateCategoryAndNewEntryComponent extends React.Component<Partial<ReactApollo.MutationProps<EntryManagerCreateCategoryAndNewEntryMutation, EntryManagerCreateCategoryAndNewEntryVariables>>> {
        render(){
            return (
                <ReactApollo.Mutation<EntryManagerCreateCategoryAndNewEntryMutation, EntryManagerCreateCategoryAndNewEntryVariables>
                mutation={ EntryManagerCreateCategoryAndNewEntryDocument }
                {...(this as any)['props'] as any}
                />
            );
        }
    }
    export type EntryManagerCreateCategoryAndNewEntryProps<TChildProps = any> = 
            Partial<
                ReactApollo.MutateProps<
                                        EntryManagerCreateCategoryAndNewEntryMutation, 
                                        EntryManagerCreateCategoryAndNewEntryVariables
                                        >
                >
         & TChildProps;
    export type EntryManagerCreateCategoryAndNewEntryMutationFn = ReactApollo.MutationFn<EntryManagerCreateCategoryAndNewEntryMutation, EntryManagerCreateCategoryAndNewEntryVariables>;
    export function EntryManagerCreateCategoryAndNewEntryHOC<TProps, TChildProps = any>(operationOptions: 
            ReactApollo.OperationOption<
                TProps, 
                EntryManagerCreateCategoryAndNewEntryMutation,
                EntryManagerCreateCategoryAndNewEntryVariables,
                EntryManagerCreateCategoryAndNewEntryProps<TChildProps>
            > | undefined){
        return ReactApollo.graphql<TProps, EntryManagerCreateCategoryAndNewEntryMutation, EntryManagerCreateCategoryAndNewEntryVariables, EntryManagerCreateCategoryAndNewEntryProps<TChildProps>>(
            EntryManagerCreateCategoryAndNewEntryDocument,
            operationOptions
        );
    };
    export const EntryManagerCreateCategoryForExistingEntryDocument = gql`
    mutation EntryManagerCreateCategoryForExistingEntry($request: CategoryCreationRequestExistingEntry!) {
  createCategoryExistingEntry(request: $request) {
    ...EntryManagerCategoryParts
  }
}
    
      ${EntryManagerCategoryPartsFragmentDoc}
    
  `;
     export class EntryManagerCreateCategoryForExistingEntryComponent extends React.Component<Partial<ReactApollo.MutationProps<EntryManagerCreateCategoryForExistingEntryMutation, EntryManagerCreateCategoryForExistingEntryVariables>>> {
        render(){
            return (
                <ReactApollo.Mutation<EntryManagerCreateCategoryForExistingEntryMutation, EntryManagerCreateCategoryForExistingEntryVariables>
                mutation={ EntryManagerCreateCategoryForExistingEntryDocument }
                {...(this as any)['props'] as any}
                />
            );
        }
    }
    export type EntryManagerCreateCategoryForExistingEntryProps<TChildProps = any> = 
            Partial<
                ReactApollo.MutateProps<
                                        EntryManagerCreateCategoryForExistingEntryMutation, 
                                        EntryManagerCreateCategoryForExistingEntryVariables
                                        >
                >
         & TChildProps;
    export type EntryManagerCreateCategoryForExistingEntryMutationFn = ReactApollo.MutationFn<EntryManagerCreateCategoryForExistingEntryMutation, EntryManagerCreateCategoryForExistingEntryVariables>;
    export function EntryManagerCreateCategoryForExistingEntryHOC<TProps, TChildProps = any>(operationOptions: 
            ReactApollo.OperationOption<
                TProps, 
                EntryManagerCreateCategoryForExistingEntryMutation,
                EntryManagerCreateCategoryForExistingEntryVariables,
                EntryManagerCreateCategoryForExistingEntryProps<TChildProps>
            > | undefined){
        return ReactApollo.graphql<TProps, EntryManagerCreateCategoryForExistingEntryMutation, EntryManagerCreateCategoryForExistingEntryVariables, EntryManagerCreateCategoryForExistingEntryProps<TChildProps>>(
            EntryManagerCreateCategoryForExistingEntryDocument,
            operationOptions
        );
    };
    export const EntryManagerDeleteCategoriesDocument = gql`
    mutation EntryManagerDeleteCategories($categoryIds: [ID!]!) {
  deleteCategories(categoryIds: $categoryIds) {
    ...EntryManagerCategoryParts
  }
}
    
      ${EntryManagerCategoryPartsFragmentDoc}
    
  `;
     export class EntryManagerDeleteCategoriesComponent extends React.Component<Partial<ReactApollo.MutationProps<EntryManagerDeleteCategoriesMutation, EntryManagerDeleteCategoriesVariables>>> {
        render(){
            return (
                <ReactApollo.Mutation<EntryManagerDeleteCategoriesMutation, EntryManagerDeleteCategoriesVariables>
                mutation={ EntryManagerDeleteCategoriesDocument }
                {...(this as any)['props'] as any}
                />
            );
        }
    }
    export type EntryManagerDeleteCategoriesProps<TChildProps = any> = 
            Partial<
                ReactApollo.MutateProps<
                                        EntryManagerDeleteCategoriesMutation, 
                                        EntryManagerDeleteCategoriesVariables
                                        >
                >
         & TChildProps;
    export type EntryManagerDeleteCategoriesMutationFn = ReactApollo.MutationFn<EntryManagerDeleteCategoriesMutation, EntryManagerDeleteCategoriesVariables>;
    export function EntryManagerDeleteCategoriesHOC<TProps, TChildProps = any>(operationOptions: 
            ReactApollo.OperationOption<
                TProps, 
                EntryManagerDeleteCategoriesMutation,
                EntryManagerDeleteCategoriesVariables,
                EntryManagerDeleteCategoriesProps<TChildProps>
            > | undefined){
        return ReactApollo.graphql<TProps, EntryManagerDeleteCategoriesMutation, EntryManagerDeleteCategoriesVariables, EntryManagerDeleteCategoriesProps<TChildProps>>(
            EntryManagerDeleteCategoriesDocument,
            operationOptions
        );
    };
    export const EntryManagerDeleteEntriesDocument = gql`
    mutation EntryManagerDeleteEntries($entryIds: [ID!]!) {
  deleteEntries(entryIds: $entryIds)
}
    
      
    
  `;
     export class EntryManagerDeleteEntriesComponent extends React.Component<Partial<ReactApollo.MutationProps<EntryManagerDeleteEntriesMutation, EntryManagerDeleteEntriesVariables>>> {
        render(){
            return (
                <ReactApollo.Mutation<EntryManagerDeleteEntriesMutation, EntryManagerDeleteEntriesVariables>
                mutation={ EntryManagerDeleteEntriesDocument }
                {...(this as any)['props'] as any}
                />
            );
        }
    }
    export type EntryManagerDeleteEntriesProps<TChildProps = any> = 
            Partial<
                ReactApollo.MutateProps<
                                        EntryManagerDeleteEntriesMutation, 
                                        EntryManagerDeleteEntriesVariables
                                        >
                >
         & TChildProps;
    export type EntryManagerDeleteEntriesMutationFn = ReactApollo.MutationFn<EntryManagerDeleteEntriesMutation, EntryManagerDeleteEntriesVariables>;
    export function EntryManagerDeleteEntriesHOC<TProps, TChildProps = any>(operationOptions: 
            ReactApollo.OperationOption<
                TProps, 
                EntryManagerDeleteEntriesMutation,
                EntryManagerDeleteEntriesVariables,
                EntryManagerDeleteEntriesProps<TChildProps>
            > | undefined){
        return ReactApollo.graphql<TProps, EntryManagerDeleteEntriesMutation, EntryManagerDeleteEntriesVariables, EntryManagerDeleteEntriesProps<TChildProps>>(
            EntryManagerDeleteEntriesDocument,
            operationOptions
        );
    };
    export const EntryManagerGetCategoryDocument = gql`
    query EntryManagerGetCategory($id: ID!) {
  category(id: $id) {
    ...EntryManagerCategoryParts
  }
}
    
      ${EntryManagerCategoryPartsFragmentDoc}
    
  `;
     export class EntryManagerGetCategoryComponent extends React.Component<Partial<ReactApollo.QueryProps<EntryManagerGetCategoryQuery, EntryManagerGetCategoryVariables>>> {
        render(){
            return (
                <ReactApollo.Query<EntryManagerGetCategoryQuery, EntryManagerGetCategoryVariables>
                query={ EntryManagerGetCategoryDocument }
                {...(this as any)['props'] as any}
                />
            );
        }
    }
    export type EntryManagerGetCategoryProps<TChildProps = any> = 
            Partial<
                ReactApollo.DataProps<
                                        EntryManagerGetCategoryQuery, 
                                        EntryManagerGetCategoryVariables
                                    >
                    >
         & TChildProps;
    export function EntryManagerGetCategoryHOC<TProps, TChildProps = any>(operationOptions: 
            ReactApollo.OperationOption<
                TProps, 
                EntryManagerGetCategoryQuery,
                EntryManagerGetCategoryVariables,
                EntryManagerGetCategoryProps<TChildProps>
            > | undefined){
        return ReactApollo.graphql<TProps, EntryManagerGetCategoryQuery, EntryManagerGetCategoryVariables, EntryManagerGetCategoryProps<TChildProps>>(
            EntryManagerGetCategoryDocument,
            operationOptions
        );
    };
    export const EntryManagerGetEntriesDocument = gql`
    query EntryManagerGetEntries {
  entries {
    ...EntryManagerEntryParts
  }
}
    
      ${EntryManagerEntryPartsFragmentDoc}
    
  `;
     export class EntryManagerGetEntriesComponent extends React.Component<Partial<ReactApollo.QueryProps<EntryManagerGetEntriesQuery, EntryManagerGetEntriesVariables>>> {
        render(){
            return (
                <ReactApollo.Query<EntryManagerGetEntriesQuery, EntryManagerGetEntriesVariables>
                query={ EntryManagerGetEntriesDocument }
                {...(this as any)['props'] as any}
                />
            );
        }
    }
    export type EntryManagerGetEntriesProps<TChildProps = any> = 
            Partial<
                ReactApollo.DataProps<
                                        EntryManagerGetEntriesQuery, 
                                        EntryManagerGetEntriesVariables
                                    >
                    >
         & TChildProps;
    export function EntryManagerGetEntriesHOC<TProps, TChildProps = any>(operationOptions: 
            ReactApollo.OperationOption<
                TProps, 
                EntryManagerGetEntriesQuery,
                EntryManagerGetEntriesVariables,
                EntryManagerGetEntriesProps<TChildProps>
            > | undefined){
        return ReactApollo.graphql<TProps, EntryManagerGetEntriesQuery, EntryManagerGetEntriesVariables, EntryManagerGetEntriesProps<TChildProps>>(
            EntryManagerGetEntriesDocument,
            operationOptions
        );
    };
    export const EntryManagerGetEntryDocument = gql`
    query EntryManagerGetEntry($entryId: ID!) {
  entry(entryId: $entryId) {
    ...EntryManagerEntryParts
  }
}
    
      ${EntryManagerEntryPartsFragmentDoc}
    
  `;
     export class EntryManagerGetEntryComponent extends React.Component<Partial<ReactApollo.QueryProps<EntryManagerGetEntryQuery, EntryManagerGetEntryVariables>>> {
        render(){
            return (
                <ReactApollo.Query<EntryManagerGetEntryQuery, EntryManagerGetEntryVariables>
                query={ EntryManagerGetEntryDocument }
                {...(this as any)['props'] as any}
                />
            );
        }
    }
    export type EntryManagerGetEntryProps<TChildProps = any> = 
            Partial<
                ReactApollo.DataProps<
                                        EntryManagerGetEntryQuery, 
                                        EntryManagerGetEntryVariables
                                    >
                    >
         & TChildProps;
    export function EntryManagerGetEntryHOC<TProps, TChildProps = any>(operationOptions: 
            ReactApollo.OperationOption<
                TProps, 
                EntryManagerGetEntryQuery,
                EntryManagerGetEntryVariables,
                EntryManagerGetEntryProps<TChildProps>
            > | undefined){
        return ReactApollo.graphql<TProps, EntryManagerGetEntryQuery, EntryManagerGetEntryVariables, EntryManagerGetEntryProps<TChildProps>>(
            EntryManagerGetEntryDocument,
            operationOptions
        );
    };
    export const EntryManagerSetCategoryActivationStatusesDocument = gql`
    mutation EntryManagerSetCategoryActivationStatuses($categoryIds: [ID!]!, $activationStatuses: [Boolean!]!) {
  setCategoryActivationStatuses(categoryIds: $categoryIds, activatedStatuses: $activationStatuses) {
    ...EntryManagerCategoryParts
  }
}
    
      ${EntryManagerCategoryPartsFragmentDoc}
    
  `;
     export class EntryManagerSetCategoryActivationStatusesComponent extends React.Component<Partial<ReactApollo.MutationProps<EntryManagerSetCategoryActivationStatusesMutation, EntryManagerSetCategoryActivationStatusesVariables>>> {
        render(){
            return (
                <ReactApollo.Mutation<EntryManagerSetCategoryActivationStatusesMutation, EntryManagerSetCategoryActivationStatusesVariables>
                mutation={ EntryManagerSetCategoryActivationStatusesDocument }
                {...(this as any)['props'] as any}
                />
            );
        }
    }
    export type EntryManagerSetCategoryActivationStatusesProps<TChildProps = any> = 
            Partial<
                ReactApollo.MutateProps<
                                        EntryManagerSetCategoryActivationStatusesMutation, 
                                        EntryManagerSetCategoryActivationStatusesVariables
                                        >
                >
         & TChildProps;
    export type EntryManagerSetCategoryActivationStatusesMutationFn = ReactApollo.MutationFn<EntryManagerSetCategoryActivationStatusesMutation, EntryManagerSetCategoryActivationStatusesVariables>;
    export function EntryManagerSetCategoryActivationStatusesHOC<TProps, TChildProps = any>(operationOptions: 
            ReactApollo.OperationOption<
                TProps, 
                EntryManagerSetCategoryActivationStatusesMutation,
                EntryManagerSetCategoryActivationStatusesVariables,
                EntryManagerSetCategoryActivationStatusesProps<TChildProps>
            > | undefined){
        return ReactApollo.graphql<TProps, EntryManagerSetCategoryActivationStatusesMutation, EntryManagerSetCategoryActivationStatusesVariables, EntryManagerSetCategoryActivationStatusesProps<TChildProps>>(
            EntryManagerSetCategoryActivationStatusesDocument,
            operationOptions
        );
    };
    export const EntryManagerUpdateCategoryDocument = gql`
    mutation EntryManagerUpdateCategory($categoryId: ID!, $update: CategoryUpdate!) {
  updateCategory(categoryId: $categoryId, update: $update) {
    ...EntryManagerCategoryParts
  }
}
    
      ${EntryManagerCategoryPartsFragmentDoc}
    
  `;
     export class EntryManagerUpdateCategoryComponent extends React.Component<Partial<ReactApollo.MutationProps<EntryManagerUpdateCategoryMutation, EntryManagerUpdateCategoryVariables>>> {
        render(){
            return (
                <ReactApollo.Mutation<EntryManagerUpdateCategoryMutation, EntryManagerUpdateCategoryVariables>
                mutation={ EntryManagerUpdateCategoryDocument }
                {...(this as any)['props'] as any}
                />
            );
        }
    }
    export type EntryManagerUpdateCategoryProps<TChildProps = any> = 
            Partial<
                ReactApollo.MutateProps<
                                        EntryManagerUpdateCategoryMutation, 
                                        EntryManagerUpdateCategoryVariables
                                        >
                >
         & TChildProps;
    export type EntryManagerUpdateCategoryMutationFn = ReactApollo.MutationFn<EntryManagerUpdateCategoryMutation, EntryManagerUpdateCategoryVariables>;
    export function EntryManagerUpdateCategoryHOC<TProps, TChildProps = any>(operationOptions: 
            ReactApollo.OperationOption<
                TProps, 
                EntryManagerUpdateCategoryMutation,
                EntryManagerUpdateCategoryVariables,
                EntryManagerUpdateCategoryProps<TChildProps>
            > | undefined){
        return ReactApollo.graphql<TProps, EntryManagerUpdateCategoryMutation, EntryManagerUpdateCategoryVariables, EntryManagerUpdateCategoryProps<TChildProps>>(
            EntryManagerUpdateCategoryDocument,
            operationOptions
        );
    };
    export const EntryManagerUpdateEntryDocument = gql`
    mutation EntryManagerUpdateEntry($entryId: ID!, $update: EntryUpdate!) {
  updateEntry(entryId: $entryId, update: $update) {
    ...EntryManagerEntryParts
  }
}
    
      ${EntryManagerEntryPartsFragmentDoc}
    
  `;
     export class EntryManagerUpdateEntryComponent extends React.Component<Partial<ReactApollo.MutationProps<EntryManagerUpdateEntryMutation, EntryManagerUpdateEntryVariables>>> {
        render(){
            return (
                <ReactApollo.Mutation<EntryManagerUpdateEntryMutation, EntryManagerUpdateEntryVariables>
                mutation={ EntryManagerUpdateEntryDocument }
                {...(this as any)['props'] as any}
                />
            );
        }
    }
    export type EntryManagerUpdateEntryProps<TChildProps = any> = 
            Partial<
                ReactApollo.MutateProps<
                                        EntryManagerUpdateEntryMutation, 
                                        EntryManagerUpdateEntryVariables
                                        >
                >
         & TChildProps;
    export type EntryManagerUpdateEntryMutationFn = ReactApollo.MutationFn<EntryManagerUpdateEntryMutation, EntryManagerUpdateEntryVariables>;
    export function EntryManagerUpdateEntryHOC<TProps, TChildProps = any>(operationOptions: 
            ReactApollo.OperationOption<
                TProps, 
                EntryManagerUpdateEntryMutation,
                EntryManagerUpdateEntryVariables,
                EntryManagerUpdateEntryProps<TChildProps>
            > | undefined){
        return ReactApollo.graphql<TProps, EntryManagerUpdateEntryMutation, EntryManagerUpdateEntryVariables, EntryManagerUpdateEntryProps<TChildProps>>(
            EntryManagerUpdateEntryDocument,
            operationOptions
        );
    };
    export const IndexManagerGetIndexPageConfigDocument = gql`
    query IndexManagerGetIndexPageConfig {
  logoConfig {
    id
    url
  }
  indexPageConfig {
    id
    heroBackgroundImageUrl
    heroBackgroundAlpha
    heroPrimaryText
    heroFeatures
    heroFooterText
    aboutTitle
    aboutText
    aboutImages {
      id
      imageUrl
      title
      text
    }
  }
}
    
      
    
  `;
     export class IndexManagerGetIndexPageConfigComponent extends React.Component<Partial<ReactApollo.QueryProps<IndexManagerGetIndexPageConfigQuery, IndexManagerGetIndexPageConfigVariables>>> {
        render(){
            return (
                <ReactApollo.Query<IndexManagerGetIndexPageConfigQuery, IndexManagerGetIndexPageConfigVariables>
                query={ IndexManagerGetIndexPageConfigDocument }
                {...(this as any)['props'] as any}
                />
            );
        }
    }
    export type IndexManagerGetIndexPageConfigProps<TChildProps = any> = 
            Partial<
                ReactApollo.DataProps<
                                        IndexManagerGetIndexPageConfigQuery, 
                                        IndexManagerGetIndexPageConfigVariables
                                    >
                    >
         & TChildProps;
    export function IndexManagerGetIndexPageConfigHOC<TProps, TChildProps = any>(operationOptions: 
            ReactApollo.OperationOption<
                TProps, 
                IndexManagerGetIndexPageConfigQuery,
                IndexManagerGetIndexPageConfigVariables,
                IndexManagerGetIndexPageConfigProps<TChildProps>
            > | undefined){
        return ReactApollo.graphql<TProps, IndexManagerGetIndexPageConfigQuery, IndexManagerGetIndexPageConfigVariables, IndexManagerGetIndexPageConfigProps<TChildProps>>(
            IndexManagerGetIndexPageConfigDocument,
            operationOptions
        );
    };
    export const IndexManagerUpdateLogoUrlDocument = gql`
    mutation IndexManagerUpdateLogoUrl($logoUrl: String!) {
  updateLogoUrl(logoUrl: $logoUrl) {
    id
    url
  }
}
    
      
    
  `;
     export class IndexManagerUpdateLogoUrlComponent extends React.Component<Partial<ReactApollo.MutationProps<IndexManagerUpdateLogoUrlMutation, IndexManagerUpdateLogoUrlVariables>>> {
        render(){
            return (
                <ReactApollo.Mutation<IndexManagerUpdateLogoUrlMutation, IndexManagerUpdateLogoUrlVariables>
                mutation={ IndexManagerUpdateLogoUrlDocument }
                {...(this as any)['props'] as any}
                />
            );
        }
    }
    export type IndexManagerUpdateLogoUrlProps<TChildProps = any> = 
            Partial<
                ReactApollo.MutateProps<
                                        IndexManagerUpdateLogoUrlMutation, 
                                        IndexManagerUpdateLogoUrlVariables
                                        >
                >
         & TChildProps;
    export type IndexManagerUpdateLogoUrlMutationFn = ReactApollo.MutationFn<IndexManagerUpdateLogoUrlMutation, IndexManagerUpdateLogoUrlVariables>;
    export function IndexManagerUpdateLogoUrlHOC<TProps, TChildProps = any>(operationOptions: 
            ReactApollo.OperationOption<
                TProps, 
                IndexManagerUpdateLogoUrlMutation,
                IndexManagerUpdateLogoUrlVariables,
                IndexManagerUpdateLogoUrlProps<TChildProps>
            > | undefined){
        return ReactApollo.graphql<TProps, IndexManagerUpdateLogoUrlMutation, IndexManagerUpdateLogoUrlVariables, IndexManagerUpdateLogoUrlProps<TChildProps>>(
            IndexManagerUpdateLogoUrlDocument,
            operationOptions
        );
    };
    export const WithHtmlSeoDocumentHtmlConfigDocument = gql`
    query WithHtmlSeoDocumentHtmlConfig {
  htmlConfig {
    googleAnalyticsId
    metaKeywords
    metaDescription
    metaAuthor
    metaAbstract
    metaCopyright
  }
}
    
      
    
  `;
     export class WithHtmlSeoDocumentHtmlConfigComponent extends React.Component<Partial<ReactApollo.QueryProps<WithHtmlSeoDocumentHtmlConfigQuery, WithHtmlSeoDocumentHtmlConfigVariables>>> {
        render(){
            return (
                <ReactApollo.Query<WithHtmlSeoDocumentHtmlConfigQuery, WithHtmlSeoDocumentHtmlConfigVariables>
                query={ WithHtmlSeoDocumentHtmlConfigDocument }
                {...(this as any)['props'] as any}
                />
            );
        }
    }
    export type WithHtmlSeoDocumentHtmlConfigProps<TChildProps = any> = 
            Partial<
                ReactApollo.DataProps<
                                        WithHtmlSeoDocumentHtmlConfigQuery, 
                                        WithHtmlSeoDocumentHtmlConfigVariables
                                    >
                    >
         & TChildProps;
    export function WithHtmlSeoDocumentHtmlConfigHOC<TProps, TChildProps = any>(operationOptions: 
            ReactApollo.OperationOption<
                TProps, 
                WithHtmlSeoDocumentHtmlConfigQuery,
                WithHtmlSeoDocumentHtmlConfigVariables,
                WithHtmlSeoDocumentHtmlConfigProps<TChildProps>
            > | undefined){
        return ReactApollo.graphql<TProps, WithHtmlSeoDocumentHtmlConfigQuery, WithHtmlSeoDocumentHtmlConfigVariables, WithHtmlSeoDocumentHtmlConfigProps<TChildProps>>(
            WithHtmlSeoDocumentHtmlConfigDocument,
            operationOptions
        );
    };
    export const WithLoadingSpinnerAppLogoConfigDocument = gql`
    query WithLoadingSpinnerAppLogoConfig {
  logoConfig {
    url
  }
}
    
      
    
  `;
     export class WithLoadingSpinnerAppLogoConfigComponent extends React.Component<Partial<ReactApollo.QueryProps<WithLoadingSpinnerAppLogoConfigQuery, WithLoadingSpinnerAppLogoConfigVariables>>> {
        render(){
            return (
                <ReactApollo.Query<WithLoadingSpinnerAppLogoConfigQuery, WithLoadingSpinnerAppLogoConfigVariables>
                query={ WithLoadingSpinnerAppLogoConfigDocument }
                {...(this as any)['props'] as any}
                />
            );
        }
    }
    export type WithLoadingSpinnerAppLogoConfigProps<TChildProps = any> = 
            Partial<
                ReactApollo.DataProps<
                                        WithLoadingSpinnerAppLogoConfigQuery, 
                                        WithLoadingSpinnerAppLogoConfigVariables
                                    >
                    >
         & TChildProps;
    export function WithLoadingSpinnerAppLogoConfigHOC<TProps, TChildProps = any>(operationOptions: 
            ReactApollo.OperationOption<
                TProps, 
                WithLoadingSpinnerAppLogoConfigQuery,
                WithLoadingSpinnerAppLogoConfigVariables,
                WithLoadingSpinnerAppLogoConfigProps<TChildProps>
            > | undefined){
        return ReactApollo.graphql<TProps, WithLoadingSpinnerAppLogoConfigQuery, WithLoadingSpinnerAppLogoConfigVariables, WithLoadingSpinnerAppLogoConfigProps<TChildProps>>(
            WithLoadingSpinnerAppLogoConfigDocument,
            operationOptions
        );
    };
    export const CloudinaryConfigDocument = gql`
    query CloudinaryConfig {
  cloudinaryCloudName
  cloudinaryApiKey
}
    
      
    
  `;
     export class CloudinaryConfigComponent extends React.Component<Partial<ReactApollo.QueryProps<CloudinaryConfigQuery, CloudinaryConfigVariables>>> {
        render(){
            return (
                <ReactApollo.Query<CloudinaryConfigQuery, CloudinaryConfigVariables>
                query={ CloudinaryConfigDocument }
                {...(this as any)['props'] as any}
                />
            );
        }
    }
    export type CloudinaryConfigProps<TChildProps = any> = 
            Partial<
                ReactApollo.DataProps<
                                        CloudinaryConfigQuery, 
                                        CloudinaryConfigVariables
                                    >
                    >
         & TChildProps;
    export function CloudinaryConfigHOC<TProps, TChildProps = any>(operationOptions: 
            ReactApollo.OperationOption<
                TProps, 
                CloudinaryConfigQuery,
                CloudinaryConfigVariables,
                CloudinaryConfigProps<TChildProps>
            > | undefined){
        return ReactApollo.graphql<TProps, CloudinaryConfigQuery, CloudinaryConfigVariables, CloudinaryConfigProps<TChildProps>>(
            CloudinaryConfigDocument,
            operationOptions
        );
    };
    export const CloudinaryGenerateMediaLibraryAuthenticationTokenDocument = gql`
    mutation CloudinaryGenerateMediaLibraryAuthenticationToken {
  generateCloudinaryMediaLibraryAuthenticationToken {
    api_key
    cloud_name
    signature
    timestamp
    username
  }
}
    
      
    
  `;
     export class CloudinaryGenerateMediaLibraryAuthenticationTokenComponent extends React.Component<Partial<ReactApollo.MutationProps<CloudinaryGenerateMediaLibraryAuthenticationTokenMutation, CloudinaryGenerateMediaLibraryAuthenticationTokenVariables>>> {
        render(){
            return (
                <ReactApollo.Mutation<CloudinaryGenerateMediaLibraryAuthenticationTokenMutation, CloudinaryGenerateMediaLibraryAuthenticationTokenVariables>
                mutation={ CloudinaryGenerateMediaLibraryAuthenticationTokenDocument }
                {...(this as any)['props'] as any}
                />
            );
        }
    }
    export type CloudinaryGenerateMediaLibraryAuthenticationTokenProps<TChildProps = any> = 
            Partial<
                ReactApollo.MutateProps<
                                        CloudinaryGenerateMediaLibraryAuthenticationTokenMutation, 
                                        CloudinaryGenerateMediaLibraryAuthenticationTokenVariables
                                        >
                >
         & TChildProps;
    export type CloudinaryGenerateMediaLibraryAuthenticationTokenMutationFn = ReactApollo.MutationFn<CloudinaryGenerateMediaLibraryAuthenticationTokenMutation, CloudinaryGenerateMediaLibraryAuthenticationTokenVariables>;
    export function CloudinaryGenerateMediaLibraryAuthenticationTokenHOC<TProps, TChildProps = any>(operationOptions: 
            ReactApollo.OperationOption<
                TProps, 
                CloudinaryGenerateMediaLibraryAuthenticationTokenMutation,
                CloudinaryGenerateMediaLibraryAuthenticationTokenVariables,
                CloudinaryGenerateMediaLibraryAuthenticationTokenProps<TChildProps>
            > | undefined){
        return ReactApollo.graphql<TProps, CloudinaryGenerateMediaLibraryAuthenticationTokenMutation, CloudinaryGenerateMediaLibraryAuthenticationTokenVariables, CloudinaryGenerateMediaLibraryAuthenticationTokenProps<TChildProps>>(
            CloudinaryGenerateMediaLibraryAuthenticationTokenDocument,
            operationOptions
        );
    };
    export const CloudinaryGenerateSignatureDocument = gql`
    mutation CloudinaryGenerateSignature($paramsToSign: Json!) {
  generateCloudinarySignature(paramsToSign: $paramsToSign)
}
    
      
    
  `;
     export class CloudinaryGenerateSignatureComponent extends React.Component<Partial<ReactApollo.MutationProps<CloudinaryGenerateSignatureMutation, CloudinaryGenerateSignatureVariables>>> {
        render(){
            return (
                <ReactApollo.Mutation<CloudinaryGenerateSignatureMutation, CloudinaryGenerateSignatureVariables>
                mutation={ CloudinaryGenerateSignatureDocument }
                {...(this as any)['props'] as any}
                />
            );
        }
    }
    export type CloudinaryGenerateSignatureProps<TChildProps = any> = 
            Partial<
                ReactApollo.MutateProps<
                                        CloudinaryGenerateSignatureMutation, 
                                        CloudinaryGenerateSignatureVariables
                                        >
                >
         & TChildProps;
    export type CloudinaryGenerateSignatureMutationFn = ReactApollo.MutationFn<CloudinaryGenerateSignatureMutation, CloudinaryGenerateSignatureVariables>;
    export function CloudinaryGenerateSignatureHOC<TProps, TChildProps = any>(operationOptions: 
            ReactApollo.OperationOption<
                TProps, 
                CloudinaryGenerateSignatureMutation,
                CloudinaryGenerateSignatureVariables,
                CloudinaryGenerateSignatureProps<TChildProps>
            > | undefined){
        return ReactApollo.graphql<TProps, CloudinaryGenerateSignatureMutation, CloudinaryGenerateSignatureVariables, CloudinaryGenerateSignatureProps<TChildProps>>(
            CloudinaryGenerateSignatureDocument,
            operationOptions
        );
    };
