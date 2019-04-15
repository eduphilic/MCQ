# Join Uniform

<!-- TOC -->

- [Development Requirements](#development-requirements)
  - [Node.js v8 LTS](#nodejs-v8-lts)
  - [Yarn >= v1](#yarn--v1)
- [Development Scripts](#development-scripts)
  - [yarn start](#yarn-start)
  - [yarn build](#yarn-build)
  - [yarn build:public](#yarn-buildpublic)
  - [yarn serve](#yarn-serve)
  - [yarn serve:production](#yarn-serveproduction)
  - [yarn clean](#yarn-clean)
  - [yarn lint](#yarn-lint)
  - [yarn graphql](#yarn-graphql)
- [Development Process](#development-process)
- [Firebase Functions Environmental Variables](#firebase-functions-environmental-variables)
- [Firebase Service Account Credentials](#firebase-service-account-credentials)

<!-- /TOC -->

## Development Requirements

### Node.js v8 LTS

Firebase Functions supports either Node.js v6 or v8 (with optional `engines` field in `package.json`). This project is configured for Firebase's Node.js v8 support.

Development scripts will perform a check on the environment to ensure Node.js v8 is being used. Either use Node.js v8 as the installed version on your development machine or use a utility like [nvm](https://github.com/creationix/nvm) to switch versions.

https://firebase.googleblog.com/2018/08/cloud-functions-for-firebase-config-node-8-timeout-memory-region.html

### Yarn >= v1

Yarn is used to manage the monorepo. v1 or above is required. The version of Yarn used to manage this repo is vendored in the `/vendor` folder. There is a `.yarnrc` file in the root of this repository to ensure Yarn uses the vendored version.

https://yarnpkg.com/lang/en/docs/yarnrc/#toc-yarn-path

## Development Scripts

### yarn start

Starts the development servers for Next.js and Storybook.

### yarn build

Build a production version of the application.

### yarn build:public

Adds a dummy html file to the Firebase Hosting folder so that Firebase deployment does not error due to an empty hosting folder. Assets are served by the Firebase Function so the hosting folder is never used.

This script is invoked automatically by `firebase.json` during Firebase deployment and does not need to be manually invoked.

### yarn serve

Starts the Firebase hosting emulator. This should be run in combination with either `yarn start` or `yarn build` in a separate terminal.

### yarn serve:production

Same as `yarn serve` but runs the server in production mode.

### yarn clean

Remove all build artifacts.

### yarn lint

Runs TSLint all monorepo packages.

### yarn graphql

Runs the automatic GraphQL generators. The generators take the `*.graphql` files in `/graphql` and emit generated files to:

- `/packages/join-uniform-graphql/src/generated.tsx`
- `/packages/join-uniform-graphql-resolvers/src/generated.ts`

Whenever a GraphQL file has been updated or added, this command should be run update the generated TypeScript code.

https://github.com/dotansimha/graphql-code-generator

## Development Process

1. Install dependencies: `yarn install`
2. Use proper Node.js version: `nvm use`
3. Run development servers: `yarn start`
4. In another terminal, perform steps 1-2, then: `yarn serve`
5. Open browser to `http://localhost:5000`

- http://localhost:5000/ - Application
- http://localhost:5000/graphql - GraphQL server
- http://localhost:5000/storybook/ - Storybook

## Firebase Functions Environmental Variables

This project requires the following Firebase environmental variables be set:

- `koa`
  - `key0` - Koa encryption key #1.
  - `key1` - Koa encryption key #2.
  - `cookie_expire_seconds` - Seconds before session cookies expire (authentication duration).
  - `cookie_secret` - Cookie JWT signing/encryption key.
- `cloudinary` - Cloudinary credentials.
  - `cloud_name`
  - `api_key`
  - `api_secret`
  - `username`

The environmental variables will be validated during execution of cloud functions.

https://firebase.google.com/docs/functions/config-env#automatically_populated_environment_variables

## Firebase Service Account Credentials

This project requires that a file called `firebase-admin-service-account.json` be present in the root folder of the project. This file can be exported from the Firebase dashboard. It is required for accessing the Firebase Remote Config API.
