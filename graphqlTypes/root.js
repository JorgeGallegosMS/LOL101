const ChampionType = require('./champion')
const ItemType = require('./item')
const RotationChampType = require('./rotations')
const ChampionListType = require('./championList')

const { GraphQLString, GraphQLObjectType, GraphQLList } = require('graphql')
const axios = require('axios')
const { apiKey } = require('../vars/appVars')

let version

const response = axios.get('https://ddragon.leagueoflegends.com/api/versions.json')
  .then(data => {
    version = data.data[0]
    console.log(version)
  })

const RootQueryType = new GraphQLObjectType({
  name: 'RootQuery',
  description: 'The root query',
  fields: () => ({
    hello: {
      type: GraphQLString,
      description: 'This is a test',
      resolve: () => 'Hello'
    },
    // champIds: {
    //   type: GraphQLList(GraphQLString),
    //   description: 'A list of champion names',
    //   resolve: async () => {
    //     const response = await axios.get(`http://ddragon.leagueoflegends.com/cdn/${version}/data/en_US/champion.json`)
    //     const data = response.data.data
    //     return Object.keys(data)
    //   }
    // },
    champion: {
      type: ChampionType,
      description: 'Data for a single champion',
      args: {
        name: {
          type: GraphQLString
        }
      },
      resolve: async (root, { name }) => {
        const response = await axios.get(`http://ddragon.leagueoflegends.com/cdn/${version}/data/en_US/champion/${name}.json`)
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
        const response = await axios.get(`http://ddragon.leagueoflegends.com/cdn/${version}/data/en_US/item.json`)
        return response.data.data[id]
      }
    },
    rotations: {
      type: new GraphQLList(RotationChampType),
      description: 'Data for free champions in the rotations',
      resolve: async () => {
        const response = await axios.get(`https://na1.api.riotgames.com/lol/platform/v3/champion-rotations?api_key=${apiKey}`)
        const data = await axios.get(`http://ddragon.leagueoflegends.com/cdn/${version}/data/en_US/champion.json`)
        
        // List of champion ids in the free rotation
        const champIds = response.data.freeChampionIds
        const champions = data.data.data

        const rotationInfo = []
        for (champion in champions) {
          if (champIds.includes(parseInt(champions[champion].key))){
            rotationInfo.push({id: champions[champion].id, name: champions[champion].name, splashArt: `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion}_0.jpg`})
          }
        }
        return rotationInfo
      }
    },  
    championList: {
      type: new GraphQLList(ChampionListType),
      description: 'A list of champion names/ids/icons',
      resolve: async () => {
        const response = await axios.get(`http://ddragon.leagueoflegends.com/cdn/${version}/data/en_US/champion.json`)
        const data = response.data.data
        const champList = []
        for (champion in data) {
          champList.push({id: data[champion].id, name: data[champion].name, icon: `http://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${data[champion].image.full}`})
        }
        return champList
      }
    }
  })
})

module.exports = RootQueryType