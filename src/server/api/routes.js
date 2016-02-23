export default class Routes {
  constructor (auth) {
    this.auth = auth;
  }

  login = (req, res) => {
    return res.send({
      status: 200,
      url: this.auth.getUrl()
    });
  };

  logout = (req, res) => {
    console.log('destroy session')
    req.session.destroy(() => {
      console.log('session destroyed', req.session)
      res.send({
        status: 200,
        url: '/'
      });
    });
  };

  authenticate = (req, res) => {
    this.auth.getData(req.query.code).then((data) => {
      req.session.user = data.payload;
      res.redirect('/dashboard');
    });
  };
}
