const ChampionType = require('./champion')
const ItemType = require('./item')
const { GraphQLString, GraphQLObjectType, GraphQLList } = require('graphql')
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
    champIds: {
      type: GraphQLList(GraphQLString),
      description: 'A list of champion names',
      resolve: async () => {
        const response = await axios.get('http://ddragon.leagueoflegends.com/cdn/10.21.1/data/en_US/champion.json')
        const data = response.data.data
        return Object.keys(data)
      }
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