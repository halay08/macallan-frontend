# Firebase Hosting ReactJS

The React SPA application for Macallan hosts to Firebase Hosting

## Prerequisites

- **NodeJS**. Refer to https://nodejs.org/en/ to install NodeJS.
- **Yarn**. It is recommended to install NPM packages instead `npm`. Refer to https://classic.yarnpkg.com/en/docs/install/#mac-stable to install Yarn CLI.

## Getting Started

### Start dev server

```sh
$ yarn && yarn start
```

### Call a function using Firebase SDK

>The Cloud Functions for Firebase client SDKs let you call functions directly from a Firebase app. [Learn more](https://firebase.google.com/docs/functions/callable).

```ts
import { functions } from '@app/config';

var testFirestoreCreate = functions.httpsCallable('testFirestoreCreate');
    //For the testFirestoreCreate we have defined that testFirestoreCreate takes some data as a parameter
    testFirestoreCreate({
        email: 'halay08@gmail.com'
        firstName: '<User first name>',
        lastName: '<User last name>',
        country: '<A optional field>',
        region: '<A optional field>',
})
```

## Troubleshooting
