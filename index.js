const express = require('express');

const app = express();

require('./startup/logging')();
require('./startup/config')();
require('./startup/enhancers')(app);

const port = process.env.PORT || 8999;
const server = app.listen(port, () => console.log(`Listening on port ${port}...`));

module.exports = server;
