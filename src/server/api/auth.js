import google from 'googleapis';

export default class Auth {
  constructor (fetch, clientId, secret) {
    this.fetch = fetch;
    this.client = new google.auth.OAuth2(clientId, secret, 'http://localhost:8000/api/auth');
  }

  getUrl () {
    return this.client.generateAuthUrl({
      access_type: 'offline', // will return a refresh token
      scope: 'openid profile email',
      hd: 'red-badger.com'
    });
  }

  getData (code) {
    return new Promise((resolve, reject) => {
      this.client.getToken(code, (err, tokens) => {
        if(err) {
          reject(err);
        } else {
          const decodedID = new Buffer(tokens.id_token, 'base64').toString('ascii');
          this.client.setCredentials(tokens);
          resolve(decodedID);
        }
      });
    });
  }
}
