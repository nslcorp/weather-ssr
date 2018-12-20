const moment = require('moment');

const BaseController = require('./BaseController');
const api = require('../api');

class MainController extends BaseController {
  constructor() {
    super();

    this.show = [this.setup, this.getForecast, this.render];
  }

  setup(req, res, next) {
    res.title = 'WeatherDP | Home page';
    res.template = 'index';

    next();
  }

  async getForecast(req, res, next) {
    const { current, forecast } = await api.getForecast();
    const nowTime = moment().format('HH:mm');
    const data = { current, forecast, forecastTop: forecast.slice(0, 3), nowTime };

    res.data = data;

    next();
  }
}

module.exports = MainController;
