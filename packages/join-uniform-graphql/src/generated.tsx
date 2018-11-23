import * as models from "./models";

export enum UserRole {
  USER = "USER",
  ADMIN = "ADMIN",
}

export enum LocalizationLanguage {
  ENGLISH = "ENGLISH",
  HINDI = "HINDI",
}

export enum LoginRequestResult {
  VALID = "VALID",
  INVALID = "INVALID",
}

/** Represents a localized string.The Hindi field is optional.Fields:- key: String!- en: String!- hi: String */
export type LocalizedString = models.LocalizedString;

/** JSON scalar type.https://github.com/taion/graphql-type-json */
export type Json = any;


// ====================================================
// Documents
// ====================================================



  export type GetLandingFooterTextVariables = {
  }

  export type GetLandingFooterTextQuery = {
    __typename?: "Query";
    
    htmlConfig:  GetLandingFooterTextHtmlConfig;
  }


  export type GetLandingFooterTextHtmlConfig = {
    __typename?: "HtmlConfig";
    
    landingFooter: string | null;
  } 


import * as ReactApollo from 'react-apollo';
import * as React from 'react';

import gql from 'graphql-tag';






// ====================================================
// Components
// ====================================================


    export const GetLandingFooterTextDocument = gql`
    query GetLandingFooterText {
  htmlConfig {
    landingFooter
  }
}
    
      
    
  `;
     export class GetLandingFooterTextComponent extends React.Component<Partial<ReactApollo.QueryProps<GetLandingFooterTextQuery, GetLandingFooterTextVariables>>> {
        render(){
            return (
                <ReactApollo.Query<GetLandingFooterTextQuery, GetLandingFooterTextVariables>
                query={ GetLandingFooterTextDocument }
                {...(this as any)['props'] as any}
                />
            );
        }
    }
    export type GetLandingFooterTextProps<TChildProps = any> = 
            Partial<
                ReactApollo.DataProps<
                                        GetLandingFooterTextQuery, 
                                        GetLandingFooterTextVariables
                                    >
                    >
         & TChildProps;
    export function GetLandingFooterTextHOC<TProps, TChildProps = any>(operationOptions: 
            ReactApollo.OperationOption<
                TProps, 
                GetLandingFooterTextQuery,
                GetLandingFooterTextVariables,
                GetLandingFooterTextProps<TChildProps>
            > | undefined){
        return ReactApollo.graphql<TProps, GetLandingFooterTextQuery, GetLandingFooterTextVariables, GetLandingFooterTextProps<TChildProps>>(
            GetLandingFooterTextDocument,
            operationOptions
        );
    };
