import HttpsCallable from './httpsCallable';

export class ContentService extends HttpsCallable {
  /**
   * Get all contents with options
   * @param options options to get contents. Options contain limit and startAfter: id of the last document.
   * options = {
   *  limit: 20,
   *  startAfter: '123'
   * }
   * @returns contents
   */
  async getAll(options = {}) {
    const contents = await this.callHttpsCallable('getContents', options);
    return contents;
  }

  async getById(id) {
    const content = await this.callHttpsCallable('getContentById', { id });
    return content;
  }

  async getByTitle(title) {
    const content = await this.callHttpsCallable('getContentByTitle', {
      title
    });
    return content;
  }
}
