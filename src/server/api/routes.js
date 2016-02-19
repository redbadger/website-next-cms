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

  authenticate = (req, res) => {
    this.auth.getData(req.query.code).then((data) => {
      res.send(data)
    });
  };
}
