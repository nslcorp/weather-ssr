const BaseController = require('./BaseController');

class MainController extends BaseController {
  constructor() {
    super();

    this.show = [this.setup, this.render];
  }

  setup(req, res, next) {
    res.title = 'WeatherDP | Search weather by city name';
    res.template = 'search';

    next();
  }
}

module.exports = MainController;
