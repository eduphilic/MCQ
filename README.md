# bhartitest

Mock Test practice portal for students applying for Indian Defence Services. [![Circle CI](https://circleci.com/gh/strothj/bhartitest.svg?style=shield&circle-token=540326d76a4d134e7224f1b3b6e280210a343a1c)](https://circleci.com/gh/strothj/bhartitest)

## Contents

* [Installation](#installation)
* [Requirements](#requirements)
* [Usage](#usage)
  * [1. Collect build output](#1-collect-build-output)
  * [2. Place build output on server](#2-place-build-output-on-server)
* [Language Text](#language-text)
* [Development](#development)

## Installation

### Requirements

* [Node.js][nodejs] - version 8.10+
* [Yarn][yarn] - version 1.51+

```shell
$ yarn
$ yarn build
```

## Usage

This project is organized as a monorepo. This means that the individual components are organized under the `packages` directory to organize reuse and encourage separation of concerns.

After building the project using the steps from [Requirements](#requirements), the output for each individual project will be found in their respective `dist` directories.

### 1. Collect build output

* Frontend Project: `/packages/app/dist`
* Component Storybook (interface design preview site): `/packages/components/dist`
* _Backend Project (pending)_

### 2. Place build output on server

Copy the contents of `/packages/app/dist` to the root of the static servicing directory on the web server.

Deploy the backend application (_instructions pending_).

## Settings

### Language Text

This project supports two languages: `English` and `Hindi`.

The project by default will load the English text until a user selects a different language preference. The language preference is saved in their account settings.

All interface text is stored at `/settings/strings.json`. Simply add a matching entry under the `"hi": {...}` section of the json file that matches the same name as in the English section.

Example localization setting file:

```json
{
  "en": {
    "heroHeader": "Join Uniform"
  },
  "hi": {}
}
```

In this example, `Join Uniform` will be used as the hero text for both English and Hindi because there is no entry under `hi`. To add a Hindi translation, add `heroHeader` under the `hi` section:

```json
{
  "en": {
    "heroHeader": "Join Uniform"
  },
  "hi": {
    "heroHeader": "Hindi translation of Join Uniform"
  }
}
```

## Development

```shell
$ yarn
$ yarn start
```

This will start development/test servers for the backend api, frontend application, and component storybook.

[nodejs]: https://nodejs.org
[yarn]: https://yarnpkg.com
