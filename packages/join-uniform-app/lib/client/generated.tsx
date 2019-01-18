// This is an automatically generated file.
// DO NOT MODIFY
// Use the command: "yarn graphql" to regenerate.
import { models } from "@join-uniform/common";
export type Maybe<T> = T | null;


export interface CreateCategoryRequest {
  
  name: string;
  
  education: string;
  
  pricePerPaperRs: number;
  
  entryId: string;
}

export interface CreateEntryRequest {
  
  name: string;
  
  explanation: string;
  
  logoUrl: string;
}

export interface CategoryUpdateRequest {
  
  name: string;
  
  education: string;
  
  pricePerPaperRs: number;
}

export interface EntryUpdateRequest {
  
  name: string;
  
  logoUrl: string;
  
  description: string;
}

export interface UpdateIndexCardsRequest {
  /** Same as the id for the Entry the IndexCard represents. */
  id: string;
  
  categories: UpdateIndexCardsCategoriesRequest[];
  
  colorBlock: string;
  
  colorCategoryBackground: string;
  
  colorLogoBackground: string;
  
  colorTitle: string;
}

export interface UpdateIndexCardsCategoriesRequest {
  /** Id of the category. */
  id: string;
  
  visible: boolean;
}

export interface IndexPageUpdateRequest {
  
  heroBackgroundImageUrl: string;
  
  heroBackgroundAlpha: number;
  
  heroPrimaryTextEnglish: string;
  
  heroPrimaryTextHindi: Maybe<string>;
  
  heroFeatures: models.LocalizedString[];
  
  aboutTitleEnglish: string;
  
  aboutTitleHindi: Maybe<string>;
  
  aboutTextEnglish: string;
  
  aboutTextHindi: Maybe<string>;
  
  aboutImages: IndexPageAboutImageUpdateRequest[];
  
  indexCards: IndexPageIndexCardUpdateRequest[];
}

export interface IndexPageAboutImageUpdateRequest {
  
  id: string;
  
  imageUrl: string;
  
  title: models.LocalizedString;
  
  text: models.LocalizedString;
}

export interface IndexPageIndexCardUpdateRequest {
  
  entryId: string;
  
  colorBlock: string;
  
  colorCategoryBackground: string;
  
  colorLogoBackground: string;
  
  colorTitle: string;
  
  categories: IndexCardCategoryUpdateRequest[];
}

export interface IndexCardCategoryUpdateRequest {
  
  categoryId: string;
  
  visible: boolean;
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
    __typename?: "Query";
    
    logoConfig: AdminLayoutDashboardContainerLogoUrlLogoConfig;
  }

  export type AdminLayoutDashboardContainerLogoUrlLogoConfig = {
    __typename?: "LogoConfig";
    
    url: string;
  } 

  export type EntryManagerCreateCategoryVariables = {
    request: CreateCategoryRequest;
  }

  export type EntryManagerCreateCategoryMutation = {
    __typename?: "Mutation";
    
    createCategory: EntryManagerCreateCategoryCreateCategory;
  }

  export type EntryManagerCreateCategoryCreateCategory = EntryManagerCategoryPartsFragment

  export type EntryManagerCreateEntryVariables = {
    request: CreateEntryRequest;
  }

  export type EntryManagerCreateEntryMutation = {
    __typename?: "Mutation";
    
    createEntry: EntryManagerCreateEntryCreateEntry;
  }

  export type EntryManagerCreateEntryCreateEntry = EntryManagerEntryPartsFragment

  export type EntryManagerDeleteCategoriesVariables = {
    categoryIds: string[];
  }

  export type EntryManagerDeleteCategoriesMutation = {
    __typename?: "Mutation";
    
    deleteCategories: EntryManagerDeleteCategoriesDeleteCategories[];
  }

  export type EntryManagerDeleteCategoriesDeleteCategories = EntryManagerCategoryPartsFragment

  export type EntryManagerDeleteEntriesVariables = {
    entryIds: string[];
  }

  export type EntryManagerDeleteEntriesMutation = {
    __typename?: "Mutation";
    
    deleteEntries: EntryManagerDeleteEntriesDeleteEntries[];
  }

  export type EntryManagerDeleteEntriesDeleteEntries = EntryManagerEntryPartsFragment

  export type EntryManagerGetCategoryVariables = {
    id: string;
  }

  export type EntryManagerGetCategoryQuery = {
    __typename?: "Query";
    
    categoriesByIds: EntryManagerGetCategoryCategoriesByIds[];
  }

  export type EntryManagerGetCategoryCategoriesByIds = EntryManagerCategoryPartsFragment

  export type EntryManagerGetEntriesVariables = {
  }

  export type EntryManagerGetEntriesQuery = {
    __typename?: "Query";
    
    entries: EntryManagerGetEntriesEntries[];
  }

  export type EntryManagerGetEntriesEntries = EntryManagerEntryPartsFragment

  export type EntryManagerGetEntryVariables = {
    entryId: string;
  }

  export type EntryManagerGetEntryQuery = {
    __typename?: "Query";
    
    entriesByIds: EntryManagerGetEntryEntriesByIds[];
  }

  export type EntryManagerGetEntryEntriesByIds = EntryManagerEntryPartsFragment

  export type EntryManagerSetCategoryActivationStatusesVariables = {
    categoryIds: string[];
    activationStatuses: boolean[];
  }

  export type EntryManagerSetCategoryActivationStatusesMutation = {
    __typename?: "Mutation";
    
    setCategoryActivationStatuses: EntryManagerSetCategoryActivationStatusesSetCategoryActivationStatuses[];
  }

  export type EntryManagerSetCategoryActivationStatusesSetCategoryActivationStatuses = EntryManagerCategoryPartsFragment

  export type EntryManagerUpdateCategoryVariables = {
    categoryId: string;
    update: CategoryUpdateRequest;
  }

  export type EntryManagerUpdateCategoryMutation = {
    __typename?: "Mutation";
    
    updateCategory: EntryManagerUpdateCategoryUpdateCategory;
  }

  export type EntryManagerUpdateCategoryUpdateCategory = EntryManagerCategoryPartsFragment

  export type EntryManagerUpdateEntryVariables = {
    entryId: string;
    update: EntryUpdateRequest;
  }

  export type EntryManagerUpdateEntryMutation = {
    __typename?: "Mutation";
    
    updateEntry: EntryManagerUpdateEntryUpdateEntry;
  }

  export type EntryManagerUpdateEntryUpdateEntry = EntryManagerEntryPartsFragment

  export type IndexManagerGetIndexPageConfigVariables = {
  }

  export type IndexManagerGetIndexPageConfigQuery = {
    __typename?: "Query";
    
    logoConfig: IndexManagerGetIndexPageConfigLogoConfig;
    
    indexPageConfig: IndexManagerGetIndexPageConfigIndexPageConfig;
  }

  export type IndexManagerGetIndexPageConfigLogoConfig = {
    __typename?: "LogoConfig";
    
    id: string;
    
    url: string;
  } 

  export type IndexManagerGetIndexPageConfigIndexPageConfig = {
    __typename?: "IndexPageConfig";
    
    id: string;
    
    heroBackgroundImageUrl: string;
    
    heroBackgroundAlpha: number;
    
    heroPrimaryText: models.LocalizedString;
    
    heroFeatures: models.LocalizedString[];
    
    heroFooterText: models.LocalizedString;
    
    aboutTitle: models.LocalizedString;
    
    aboutText: models.LocalizedString;
    
    aboutImages: IndexManagerGetIndexPageConfigAboutImages[];
  } 

  export type IndexManagerGetIndexPageConfigAboutImages = {
    __typename?: "IndexPageAboutImage";
    
    id: string;
    
    imageUrl: string;
    
    title: models.LocalizedString;
    
    text: models.LocalizedString;
  } 

  export type IndexManagerUpdateIndexPageVariables = {
    logoUrl: string;
    indexPageUpdate: IndexPageUpdateRequest;
    indexCardsUpdate: UpdateIndexCardsRequest[];
  }

  export type IndexManagerUpdateIndexPageMutation = {
    __typename?: "Mutation";
    
    updateLogoUrl: IndexManagerUpdateIndexPageUpdateLogoUrl;
    
    updateIndexPage: IndexManagerUpdateIndexPageUpdateIndexPage;
    
    updateIndexCards: IndexManagerUpdateIndexPageUpdateIndexCards[];
  }

  export type IndexManagerUpdateIndexPageUpdateLogoUrl = {
    __typename?: "LogoConfig";
    
    id: string;
    
    url: string;
  } 

  export type IndexManagerUpdateIndexPageUpdateIndexPage = {
    __typename?: "IndexPageConfig";
    
    id: string;
    
    heroBackgroundImageUrl: string;
    
    heroBackgroundAlpha: number;
    
    heroPrimaryText: models.LocalizedString;
    
    heroFeatures: models.LocalizedString[];
    
    aboutTitle: models.LocalizedString;
    
    aboutText: models.LocalizedString;
    
    aboutImages: IndexManagerUpdateIndexPageAboutImages[];
  } 

  export type IndexManagerUpdateIndexPageAboutImages = {
    __typename?: "IndexPageAboutImage";
    
    id: string;
    
    imageUrl: string;
    
    title: models.LocalizedString;
    
    text: models.LocalizedString;
  } 

  export type IndexManagerUpdateIndexPageUpdateIndexCards = {
    __typename?: "IndexCard";
    
    id: string;
    
    categories: IndexManagerUpdateIndexPageCategories[];
    
    colorBlock: string;
    
    colorCategoryBackground: string;
    
    colorLogoBackground: string;
    
    colorTitle: string;
    
    entryLogoUrl: string;
  } 

  export type IndexManagerUpdateIndexPageCategories = {
    __typename?: "IndexCardCategory";
    
    id: string;
    
    visible: boolean;
    
    title: string;
  } 

  export type LandingGetIndexPageConfigVariables = {
  }

  export type LandingGetIndexPageConfigQuery = {
    __typename?: "Query";
    
    indexPageConfig: LandingGetIndexPageConfigIndexPageConfig;
    
    logoConfig: LandingGetIndexPageConfigLogoConfig;
    
    indexCards: LandingGetIndexPageConfigIndexCards[];
  }

  export type LandingGetIndexPageConfigIndexPageConfig = {
    __typename?: "IndexPageConfig";
    
    id: string;
    
    heroBackgroundImageUrl: string;
    
    heroBackgroundAlpha: number;
    
    heroPrimaryText: models.LocalizedString;
    
    heroFeatures: models.LocalizedString[];
    
    heroFooterText: models.LocalizedString;
    
    aboutTitle: models.LocalizedString;
    
    aboutText: models.LocalizedString;
    
    aboutImages: LandingGetIndexPageConfigAboutImages[];
  } 

  export type LandingGetIndexPageConfigAboutImages = {
    __typename?: "IndexPageAboutImage";
    
    id: string;
    
    title: models.LocalizedString;
    
    text: models.LocalizedString;
    
    imageUrl: string;
  } 

  export type LandingGetIndexPageConfigLogoConfig = {
    __typename?: "LogoConfig";
    
    id: string;
    
    url: string;
  } 

  export type LandingGetIndexPageConfigIndexCards = {
    __typename?: "IndexCard";
    
    id: string;
    
    title: string;
    
    entryLogoUrl: string;
    
    categories: LandingGetIndexPageConfigCategories[];
    
    colorBlock: string;
    
    colorCategoryBackground: string;
    
    colorLogoBackground: string;
    
    colorTitle: string;
  } 

  export type LandingGetIndexPageConfigCategories = {
    __typename?: "IndexCardCategory";
    
    id: string;
    
    title: string;
  } 

  export type WithHtmlSeoDocumentHtmlConfigVariables = {
  }

  export type WithHtmlSeoDocumentHtmlConfigQuery = {
    __typename?: "Query";
    
    htmlConfig: WithHtmlSeoDocumentHtmlConfigHtmlConfig;
  }

  export type WithHtmlSeoDocumentHtmlConfigHtmlConfig = {
    __typename?: "HtmlConfig";
    
    googleAnalyticsId: Maybe<string>;
    
    metaKeywords: Maybe<string>;
    
    metaDescription: Maybe<string>;
    
    metaAuthor: Maybe<string>;
    
    metaAbstract: Maybe<string>;
    
    metaCopyright: Maybe<string>;
  } 

  export type WithLoadingSpinnerAppLogoConfigVariables = {
  }

  export type WithLoadingSpinnerAppLogoConfigQuery = {
    __typename?: "Query";
    
    logoConfig: WithLoadingSpinnerAppLogoConfigLogoConfig;
  }

  export type WithLoadingSpinnerAppLogoConfigLogoConfig = {
    __typename?: "LogoConfig";
    
    url: string;
  } 

  export type CloudinaryConfigVariables = {
  }

  export type CloudinaryConfigQuery = {
    __typename?: "Query";
    
    cloudinaryCloudName: string;
    
    cloudinaryApiKey: string;
  }

  export type CloudinaryGenerateMediaLibraryAuthenticationTokenVariables = {
  }

  export type CloudinaryGenerateMediaLibraryAuthenticationTokenMutation = {
    __typename?: "Mutation";
    
    generateCloudinaryMediaLibraryAuthenticationToken: CloudinaryGenerateMediaLibraryAuthenticationTokenGenerateCloudinaryMediaLibraryAuthenticationToken;
  }

  export type CloudinaryGenerateMediaLibraryAuthenticationTokenGenerateCloudinaryMediaLibraryAuthenticationToken = {
    __typename?: "CloudinaryMediaWidgetAuthenticationToken";
    
    api_key: string;
    
    cloud_name: string;
    
    signature: string;
    
    timestamp: string;
    
    username: string;
  } 

  export type CloudinaryGenerateSignatureVariables = {
    paramsToSign: Json;
  }

  export type CloudinaryGenerateSignatureMutation = {
    __typename?: "Mutation";
    
    generateCloudinarySignature: string;
  }

  export type EntryManagerCategoryPartsFragment = {
    __typename?: "Category";
    
    id: string;
    
    name: string;
    
    education: string;
    
    pricePerPaperRs: number;
    
    activated: boolean;
  }

  export type EntryManagerEntryPartsFragment = {
    __typename?: "Entry";
    
    id: string;
    
    name: string;
    
    logoUrl: string;
    
    description: string;
    
    categories: EntryManagerEntryPartsCategories[];
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
    export const EntryManagerCreateCategoryDocument = gql`
    mutation EntryManagerCreateCategory($request: CreateCategoryRequest!) {
  createCategory(request: $request) {
    ...EntryManagerCategoryParts
  }
}
    
      ${EntryManagerCategoryPartsFragmentDoc}
    
  `;
     export class EntryManagerCreateCategoryComponent extends React.Component<Partial<ReactApollo.MutationProps<EntryManagerCreateCategoryMutation, EntryManagerCreateCategoryVariables>>> {
        render(){
            return (
                <ReactApollo.Mutation<EntryManagerCreateCategoryMutation, EntryManagerCreateCategoryVariables>
                mutation={ EntryManagerCreateCategoryDocument }
                {...(this as any)['props'] as any}
                />
            );
        }
    }
    export type EntryManagerCreateCategoryProps<TChildProps = any> = 
            Partial<
                ReactApollo.MutateProps<
                                        EntryManagerCreateCategoryMutation, 
                                        EntryManagerCreateCategoryVariables
                                        >
                >
         & TChildProps;
    export type EntryManagerCreateCategoryMutationFn = ReactApollo.MutationFn<EntryManagerCreateCategoryMutation, EntryManagerCreateCategoryVariables>;
    export function EntryManagerCreateCategoryHOC<TProps, TChildProps = any>(operationOptions: 
            ReactApollo.OperationOption<
                TProps, 
                EntryManagerCreateCategoryMutation,
                EntryManagerCreateCategoryVariables,
                EntryManagerCreateCategoryProps<TChildProps>
            > | undefined){
        return ReactApollo.graphql<TProps, EntryManagerCreateCategoryMutation, EntryManagerCreateCategoryVariables, EntryManagerCreateCategoryProps<TChildProps>>(
            EntryManagerCreateCategoryDocument,
            operationOptions
        );
    };
    export const EntryManagerCreateEntryDocument = gql`
    mutation EntryManagerCreateEntry($request: CreateEntryRequest!) {
  createEntry(request: $request) {
    ...EntryManagerEntryParts
  }
}
    
      ${EntryManagerEntryPartsFragmentDoc}
    
  `;
     export class EntryManagerCreateEntryComponent extends React.Component<Partial<ReactApollo.MutationProps<EntryManagerCreateEntryMutation, EntryManagerCreateEntryVariables>>> {
        render(){
            return (
                <ReactApollo.Mutation<EntryManagerCreateEntryMutation, EntryManagerCreateEntryVariables>
                mutation={ EntryManagerCreateEntryDocument }
                {...(this as any)['props'] as any}
                />
            );
        }
    }
    export type EntryManagerCreateEntryProps<TChildProps = any> = 
            Partial<
                ReactApollo.MutateProps<
                                        EntryManagerCreateEntryMutation, 
                                        EntryManagerCreateEntryVariables
                                        >
                >
         & TChildProps;
    export type EntryManagerCreateEntryMutationFn = ReactApollo.MutationFn<EntryManagerCreateEntryMutation, EntryManagerCreateEntryVariables>;
    export function EntryManagerCreateEntryHOC<TProps, TChildProps = any>(operationOptions: 
            ReactApollo.OperationOption<
                TProps, 
                EntryManagerCreateEntryMutation,
                EntryManagerCreateEntryVariables,
                EntryManagerCreateEntryProps<TChildProps>
            > | undefined){
        return ReactApollo.graphql<TProps, EntryManagerCreateEntryMutation, EntryManagerCreateEntryVariables, EntryManagerCreateEntryProps<TChildProps>>(
            EntryManagerCreateEntryDocument,
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
  deleteEntries(entryIds: $entryIds) {
    ...EntryManagerEntryParts
  }
}
    
      ${EntryManagerEntryPartsFragmentDoc}
    
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
  categoriesByIds(ids: [$id]) {
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
  entriesByIds(ids: [$entryId]) {
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
    mutation EntryManagerUpdateCategory($categoryId: ID!, $update: CategoryUpdateRequest!) {
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
    mutation EntryManagerUpdateEntry($entryId: ID!, $update: EntryUpdateRequest!) {
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
    export const IndexManagerUpdateIndexPageDocument = gql`
    mutation IndexManagerUpdateIndexPage($logoUrl: String!, $indexPageUpdate: IndexPageUpdateRequest!, $indexCardsUpdate: [UpdateIndexCardsRequest!]!) {
  updateLogoUrl(logoUrl: $logoUrl) {
    id
    url
  }
  updateIndexPage(request: $indexPageUpdate) {
    id
    heroBackgroundImageUrl
    heroBackgroundAlpha
    heroPrimaryText
    heroFeatures
    aboutTitle
    aboutText
    aboutImages {
      id
      imageUrl
      title
      text
    }
  }
  updateIndexCards(request: $indexCardsUpdate) {
    id
    categories {
      id
      visible
      title
    }
    colorBlock
    colorCategoryBackground
    colorLogoBackground
    colorTitle
    entryLogoUrl
  }
}
    
      
    
  `;
     export class IndexManagerUpdateIndexPageComponent extends React.Component<Partial<ReactApollo.MutationProps<IndexManagerUpdateIndexPageMutation, IndexManagerUpdateIndexPageVariables>>> {
        render(){
            return (
                <ReactApollo.Mutation<IndexManagerUpdateIndexPageMutation, IndexManagerUpdateIndexPageVariables>
                mutation={ IndexManagerUpdateIndexPageDocument }
                {...(this as any)['props'] as any}
                />
            );
        }
    }
    export type IndexManagerUpdateIndexPageProps<TChildProps = any> = 
            Partial<
                ReactApollo.MutateProps<
                                        IndexManagerUpdateIndexPageMutation, 
                                        IndexManagerUpdateIndexPageVariables
                                        >
                >
         & TChildProps;
    export type IndexManagerUpdateIndexPageMutationFn = ReactApollo.MutationFn<IndexManagerUpdateIndexPageMutation, IndexManagerUpdateIndexPageVariables>;
    export function IndexManagerUpdateIndexPageHOC<TProps, TChildProps = any>(operationOptions: 
            ReactApollo.OperationOption<
                TProps, 
                IndexManagerUpdateIndexPageMutation,
                IndexManagerUpdateIndexPageVariables,
                IndexManagerUpdateIndexPageProps<TChildProps>
            > | undefined){
        return ReactApollo.graphql<TProps, IndexManagerUpdateIndexPageMutation, IndexManagerUpdateIndexPageVariables, IndexManagerUpdateIndexPageProps<TChildProps>>(
            IndexManagerUpdateIndexPageDocument,
            operationOptions
        );
    };
    export const LandingGetIndexPageConfigDocument = gql`
    query LandingGetIndexPageConfig {
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
      title
      text
      imageUrl
    }
  }
  logoConfig {
    id
    url
  }
  indexCards {
    id
    title
    entryLogoUrl
    categories {
      id
      title
    }
    colorBlock
    colorCategoryBackground
    colorLogoBackground
    colorTitle
  }
}
    
      
    
  `;
     export class LandingGetIndexPageConfigComponent extends React.Component<Partial<ReactApollo.QueryProps<LandingGetIndexPageConfigQuery, LandingGetIndexPageConfigVariables>>> {
        render(){
            return (
                <ReactApollo.Query<LandingGetIndexPageConfigQuery, LandingGetIndexPageConfigVariables>
                query={ LandingGetIndexPageConfigDocument }
                {...(this as any)['props'] as any}
                />
            );
        }
    }
    export type LandingGetIndexPageConfigProps<TChildProps = any> = 
            Partial<
                ReactApollo.DataProps<
                                        LandingGetIndexPageConfigQuery, 
                                        LandingGetIndexPageConfigVariables
                                    >
                    >
         & TChildProps;
    export function LandingGetIndexPageConfigHOC<TProps, TChildProps = any>(operationOptions: 
            ReactApollo.OperationOption<
                TProps, 
                LandingGetIndexPageConfigQuery,
                LandingGetIndexPageConfigVariables,
                LandingGetIndexPageConfigProps<TChildProps>
            > | undefined){
        return ReactApollo.graphql<TProps, LandingGetIndexPageConfigQuery, LandingGetIndexPageConfigVariables, LandingGetIndexPageConfigProps<TChildProps>>(
            LandingGetIndexPageConfigDocument,
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
