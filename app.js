const express = require('express');
const app = express();
const path = require('path');
const exphbs = require('express-handlebars');
const moment = require('moment-timezone')

const api = require('./api')


const isProd = process.env.NODE_ENV === 'production';
const PORT = process.env.PORT || 8999

moment.tz.setDefault("Europe/Berlin")





app.use(express.static(path.join(__dirname, 'public')));

// Set View Engine

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

isProd && app.enable('view cache');

app.get('/', async (req, res) => {
  const {current, forecast} = await api.getForecast();
  const nowTime = moment().format('HH:mm')

  const data = {current, forecast, forecastTop: forecast.slice(0,3), nowTime}
  return res.render('home/index', data)
});

app.get('/demo', async (req, res) => {
  return res.render('demo/index')
});

app.get('/demo', async (req, res) => {
  return res.render('demo/index')
});


//v1__17.12 -- 10 Request 180kb <900ms

app.listen(PORT, () => {
  console.log(`listening on port: ` + PORT);
});
