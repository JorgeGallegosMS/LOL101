const { GraphQLString, GraphQLObjectType } = require('graphql')

const ChampionType = new GraphQLObjectType({
  name: 'ChampionType',
  description: 'A single champion',
  fields: () => ({
    id: {
      type: GraphQLString,
      description: 'The id of the champion',
    }
  })
})

module.exports = ChampionType