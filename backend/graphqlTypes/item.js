const { GraphQLObjectType, GraphQLString, GraphQLList, GraphQLInt } = require('graphql')

const imageType = new GraphQLObjectType({
  name: 'imageType',
  description: 'Item image info',
  fields: () => ({
    full: {
      type: GraphQLString,
      description: 'The full image of the item'
    },
    sprite: {
      type: GraphQLString,
      description: 'The item sprite'
    }
  })
})

const goldType = new GraphQLObjectType({
  name: 'goldType',
  description: 'Buying/Selling information',
  fields: () => ({
    base: {
      type: GraphQLInt,
      description: 'Base gold needed to purchase this item'
    },
    total: {
      type: GraphQLInt,
      description: 'Total amount of gold needed to purchase this item'
    },
    sell: {
      type: GraphQLInt,
      description: 'The amount of gold this item sells for'
    }
  })
})

const ItemType = new GraphQLObjectType({
  name: 'ItemType',
  description: 'A single item',
  fields: () => ({
    name: {
      type: GraphQLString,
      description: 'The name of the item'
    },
    description: {
      type: GraphQLString,
      description: 'Item stats'
    },
    plaintext: {
      type: GraphQLString,
      description: 'Plain description of the item'
    },
    into: {
      type: new GraphQLList(GraphQLString),
      description: 'A list of item ids that this item builds into'
    },
    image: {
      type: imageType,
      description: 'Item image info'
    },
    gold: {
      type: goldType,
      description: 'Buying/Selling informtaion for this item'
    }
  })
})

module.exports = ItemType