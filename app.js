const express = require('express');
const app = express();
const path = require('path');
const exphbs = require('express-handlebars');


const isProd = process.env.NODE_ENV === 'production';
const PORT = process.env.PORT || 8999


app.use(express.static(path.join(__dirname, 'public')));

// Set View Engine

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

isProd && app.enable('view cache');

app.get('/', (req, res) => res.render('home/index'));

//
//

app.listen(PORT, () => {
  console.log(`listening on port: ` + PORT);
});
