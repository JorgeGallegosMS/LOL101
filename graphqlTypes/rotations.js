const { GraphQLString, GraphQLObjectType, GraphQLList } = require('graphql')

const RotationChampType = new GraphQLObjectType({
    name: 'RotationChampType',
    description: 'Name and splash are for a champion in the free rotation',
    fields: () => ({
        id: {
            type: GraphQLString,
            description: 'The ID of the champion'
        },
        name: {
            type: GraphQLString,
            description: 'The name of the champion'
        },
        splashArt: {
            type: GraphQLString,
            description: 'The champion\'s default splash art'
        }
    })
})


module.exports = RotationChampType