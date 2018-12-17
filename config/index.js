const config = process.env.NODE_ENV === 'production' ? require('./prod') : require('./dev')
console.log(process.env.NODE_ENV === 'production')
console.log(config)

module.exports = {
  apiKey: config.apiKey
}

