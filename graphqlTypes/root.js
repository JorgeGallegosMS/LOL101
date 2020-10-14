const ChampionType = require('./champion')
const ItemType = require('./item')
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
      description: 'Data for a single champion',
      args: {
        name: {
          type: GraphQLString
        }
      },
      resolve: async (root, { name }) => {
        const response = await axios.get(`http://ddragon.leagueoflegends.com/cdn/10.21.1/data/en_US/champion/${name}.json`)
        return response.data.data[name]
      }
    },
    item: {
      type: ItemType,
      description: 'Data for a single item',
      args: {
        id: {
          type: GraphQLString
        }
      },
      resolve: async (root, { id }) => {
        const response = await axios.get('http://ddragon.leagueoflegends.com/cdn/10.21.1/data/en_US/item.json')
        return response.data.data[id]
      }
    }
  })
})

module.exports = RootQueryType