import HttpsCallable from './httpsCallable';

export class MailService extends HttpsCallable {
  /**
   * Get all artwork with options
   * @param options options to get artworks. Options contain:
   *  sender: use email address or domain which verified in sendgrid
   *  recipient
   *  templateId
   *  templateData: Object
   *
   * Example:
   * {
   *   sender: 'thanhdat.itdn@gmail.com',
   *   recipient: 'phuongthanhnguyen.tran12@gmail.com',
   *   templateId: 'd-8ac6775fe7f04065a5f46dc375125b47',
   *   templateData: {
   *     first: 'macallan',
   *     second: 'Thagdet'
   *   }
   * }
   *
   * @returns status
   */
  async send(data = {}) {
    const status = await this.callHttpsCallable('sendEmail', data);
    return status;
  }
}
