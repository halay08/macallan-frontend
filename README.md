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

Create a Firebase-callable-function class in `src/@crema/services/functions`

```ts
import HttpsCallable from '../httpsCallable';

export class ArtworkService extends HttpsCallable {
  async createArtwork(data) {
    const artwork = await this.callHttpsCallable('createArtwork', data);
    return artwork;
  }

  /**
   * Get all artwork with options
   * @param options options to get artworks. Options contain:
   *  limit: maximum result returned
   *  startAfter: id of last document
   *  withTrashed: true || false
   *  status: in_review || approved || rejected
   *  createdBy: id of created user
   *  orderBy: Array of { field, order: asc | desc }
   *
   * @returns list of artworks
   */
  async getArtworks(options = {}) {
    const artworks = await this.callHttpsCallable('getArtworks', options);
    return artworks;
  }
}
```

## Troubleshooting

If you see the message like `Error: Deploy target macallan-staging not configured for project macallan-ecf92. Configure with`, please try to run the command below:

```
$ firebase target:apply hosting macallan-staging macallan-staging
```
