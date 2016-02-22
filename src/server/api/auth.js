import google from 'googleapis';
import decode from '../util/jwt';

export default class Auth {
  constructor (fetch, clientId, secret) {
    this.fetch = fetch;
    this.client = new google.auth.OAuth2(clientId, secret, 'http://localhost:8000/api/auth');
  }

  getUrl () {
    return this.client.generateAuthUrl({
      access_type: 'offline', // will return a refresh token
      scope: 'openid email profile',
      hd: 'red-badger.com'
    });
  }

  getData (code) {
    return new Promise((resolve, reject) => {
      this.client.getToken(code, (err, tokens) => {
        if (err) {
          reject(err);
        } else {
          const decodedID = decode(tokens.id_token);
          this.client.setCredentials(tokens);
          resolve(decodedID);
        }
      });
    });
  }
}
