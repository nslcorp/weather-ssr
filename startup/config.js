const config = require('../config');

module.exports = () => {
  if (!config.apiKey) {
    throw new Error('CONFIG: FATAL ERROR --> apiKey is not defined.');
    process.exit(1);
  }
};
