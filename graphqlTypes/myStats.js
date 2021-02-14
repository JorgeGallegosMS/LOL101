const { GraphQLString, GraphQLObjectType, GraphQLList } = require('graphql')

const MyStatsType = new GraphQLObjectType({
    name: 'MyStatsType',
    description: 'Profile Stats',
    fields: () => ({
        name: {
            type: GraphQLString,
            description: 'Name of summoner'
        },
        icon: {
            type: GraphQLString,
            description: 'Profile Icon URL'
        },
        summonerLevel: {
            type: GraphQLString,
            description: 'Account Level'
        },
        summonerID: {
            type: GraphQLString,
            description: 'ID used for querying ranked stats data'
        }
    })
})


module.exports = MyStatsType