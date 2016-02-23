import google from 'googleapis';
import decode from '../util/jwt';

const plus = google.plus('v1');

export default class Auth {
  constructor (fetch, clientId, secret) {
    this.fetch = fetch;
    this.client = new google.auth.OAuth2(clientId, secret, 'http://localhost:8000/api/auth');
  }

  getUrl () {
    return this.client.generateAuthUrl({
      access_type: 'offline', // will return a refresh token
      scope: 'https://www.googleapis.com/auth/plus.login',
      hd: 'red-badger.com'
    });
  }

  getData (code) {
    return new Promise((resolve, reject) => {
      this.client.getToken(code, (err, tokens) => {
        if (err) {
          reject(err);
        } else {
          this.client.setCredentials(tokens);
          resolve(decode(tokens.id_token));
        }
      });
    });
  }
}
