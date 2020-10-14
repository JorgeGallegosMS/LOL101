const ChampionType = require('./champion')
const { GraphQLString, GraphQLObjectType } = require('graphql')
const axios = require('axios')

const RootQueryType = new GraphQLObjectType({
  name: 'RootQuery',
  description: 'The root query',
  fields: () => ({
    hello: {
      type: GraphQLString,
      description: 'This is a test',
      resolve: () => 'Hello'
    },
    champion: {
      type: ChampionType,
      description: 'A single champion\'s data',
      resolve: async () => {
        const response = await axios.get('http://ddragon.leagueoflegends.com/cdn/10.21.1/data/en_US/champion/Aatrox.json')
        return response.data.data.Aatrox
      }
    }
  })
})

module.exports = RootQueryType