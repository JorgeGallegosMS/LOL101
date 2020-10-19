require('dotenv').config()

module.exports = {
  port: process.env.PORT,
  apiKey: process.env.RIOT_API_KEY,
  environment: process.env.NODE_ENV
}