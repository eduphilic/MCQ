const addPlugin = require("graphql-codegen-add").plugin;

/**
 * @param {import("graphql").GraphQLSchema} schema
 * @param {import("graphql-codegen-core").DocumentFile[]} documents
 * @param {*} config
 * @param {*} info
 */
const plugin = async (schema, documents, config, info) => {
  const addConfig = config.add;

  return addPlugin(schema, documents, addConfig, info);
};

module.exports.plugin = plugin;
