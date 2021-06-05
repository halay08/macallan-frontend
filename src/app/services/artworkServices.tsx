import HttpsCallable from './httpsCallable';

export class ArtworkService extends HttpsCallable {
  async createArtwork(data) {
    const artwork = await this.callHttpsCallable('createArtwork', data);
    return artwork;
  }
}
