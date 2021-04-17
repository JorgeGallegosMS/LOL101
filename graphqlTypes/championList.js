const { GraphQLString, GraphQLObjectType, GraphQLList } = require('graphql')

const ChampionListType = new GraphQLObjectType({
    name: 'ChampionListType',
    description: 'Name, Id, and Icon for mainpage display',
    fields: () => ({
        id: {
            type: GraphQLString,
            description: 'The ID of the champion'
        },
        name: {
            type: GraphQLString,
            description: 'The name of the champion'
        },
        icon: {
            type: GraphQLString,
            description: 'The champion\'s icon'
        }
    })
})


module.exports = ChampionListType