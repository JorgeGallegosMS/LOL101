require('dotenv').config()

module.exports = {
  port: process.env.PORT || 5000,
  apiKey: process.env.RIOT_API_KEY,
  environment: process.env.NODE_ENV || 'development',
  proxy: process.env.PROXY || 'http://localhost:5000'
}