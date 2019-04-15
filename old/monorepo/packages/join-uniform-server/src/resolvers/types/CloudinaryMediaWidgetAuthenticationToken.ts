import gql from "graphql-tag";

export const TypeDefCloudinaryMediaWidgetAuthenticationToken = gql`
  # Authentication parameters for Cloudinary Media Library widget.
  type CloudinaryMediaWidgetAuthenticationToken {
    cloud_name: String!
    api_key: String!
    username: String!
    timestamp: String!
    signature: String!
  }
`;
