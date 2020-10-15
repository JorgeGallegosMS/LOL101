const ChampionType = require('./champion')
const ItemType = require('./item')
const RotationsType = require('./rotations')
const { GraphQLString, GraphQLObjectType, GraphQLList } = require('graphql')
const axios = require('axios')
const { apiKey } = require('../vars/appVars')

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
    },
    rotations: {
      type: RotationsType,
      description: 'Data for free champions in the rotations',
      resolve: async () => {
        const response = await axios.get(`https://na1.api.riotgames.com/lol/platform/v3/champion-rotations?api_key=${apiKey}`)
        console.log(response.data)
        // Add logic to loop through champion ids and get their corresponding name and image(splashart)
        return response.data
      }
    }
  })
})

module.exports = RootQueryType