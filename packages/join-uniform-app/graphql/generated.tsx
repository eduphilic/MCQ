// AUTO-GENERATED - DO NOT EDIT
// SCRIPT-> yarn graphql
import * as models from "../models";
export { models };


// ====================================================
// Documents
// ====================================================



  export type GetHtmlConfigVariables = {
  }

  export type GetHtmlConfigQuery = {
    __typename?: "Query";
    
    htmlConfig:  GetHtmlConfigHtmlConfig;
  }


  export type GetHtmlConfigHtmlConfig = {
    __typename?: "HtmlConfig";
    
    googleAnalyticsId: string | null;
    
    metaKeywords: string | null;
    
    metaDescription: string | null;
    
    metaAuthor: string | null;
    
    metaAbstract: string | null;
    
    metaCopyright: string | null;
  } 


import * as ReactApollo from 'react-apollo';
import * as React from 'react';

import gql from 'graphql-tag';






// ====================================================
// Components
// ====================================================


    export const GetHtmlConfigDocument = gql`
    query GetHtmlConfig {
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
     export class GetHtmlConfigComponent extends React.Component<Partial<ReactApollo.QueryProps<GetHtmlConfigQuery, GetHtmlConfigVariables>>> {
        render(){
            return (
                <ReactApollo.Query<GetHtmlConfigQuery, GetHtmlConfigVariables>
                query={ GetHtmlConfigDocument }
                {...(this as any)['props'] as any}
                />
            );
        }
    }
    export type GetHtmlConfigProps<TChildProps = any> = 
            Partial<
                ReactApollo.DataProps<
                                        GetHtmlConfigQuery, 
                                        GetHtmlConfigVariables
                                    >
                    >
         & TChildProps;
    export function GetHtmlConfigHOC<TProps, TChildProps = any>(operationOptions: 
            ReactApollo.OperationOption<
                TProps, 
                GetHtmlConfigQuery,
                GetHtmlConfigVariables,
                GetHtmlConfigProps<TChildProps>
            > | undefined){
        return ReactApollo.graphql<TProps, GetHtmlConfigQuery, GetHtmlConfigVariables, GetHtmlConfigProps<TChildProps>>(
            GetHtmlConfigDocument,
            operationOptions
        );
    };
