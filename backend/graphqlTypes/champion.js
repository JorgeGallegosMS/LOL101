const { GraphQLString, GraphQLInt, GraphQLObjectType, GraphQLList } = require('graphql')

const ChampionType = new GraphQLObjectType({
  name: 'ChampionType',
  description: 'A single champion',
  fields: () => ({
    id: {
      type: GraphQLString,
      description: 'The id of the champion',
    },
    name: {
      type: GraphQLString,
      description: 'The name of the champion',
    },
    title: {
      type: GraphQLString,
      description: 'The title of the champion',
    },
    image: {
      type: imageName,
      description: 'Example: Aatrox.png'
    },
    skins: {
      type: new GraphQLList(skin),
      description: 'Array of Skins'
    },
    lore: {
      type: GraphQLString,
      description: 'The lore of the champion'
    },
    allytips: {
      type: new GraphQLList(GraphQLString),
      description: 'Tips on playing the champion'
    },
    enemytips: {
      type: new GraphQLList(GraphQLString),
      description: 'Tips on playing agaisnt the champion'
    },
    tags: {
      type: new GraphQLList(GraphQLString),
      description: 'The classes of the champion'
    },
    info: {
      type: difficulty,
      description: 'The difficulty of the champion'
    },
    spells: {
      type: new GraphQLList(ability),
      description: 'Array of Abilities'
    },
    passive: {
      type: passive,
      description: 'The passive ability of the champion'
    },
    recommended: {
      type: new GraphQLList(mapRecommendedItems),
      description: 'Array of maps with recommended items'
    }
  })
})
const skin = new GraphQLObjectType({
  name: 'Skin',
  description: 'Single Skin',
  fields: () => ({
      name: {
          type: GraphQLString,
          description: 'Name of skin'
      },
      num: {
          type: GraphQLInt,
          description: 'Skin #'
      }
  })
})
const ability = new GraphQLObjectType({
  name: 'Ability',
  description: 'Single Ability',
  fields: () => ({
      name: {
          type: GraphQLString,
          description: 'Name of the ability'
      },
      description: {
        type: GraphQLString,
        description: 'Description of the ability'
    },
      tooltip: {
          type: GraphQLString,
          description: 'Indepth description of the ability'
      },
      cooldownBurn: {
          type: GraphQLString,
          description: 'Cooldown string of the ability'
      },
  })
})
const imageName = new GraphQLObjectType({
  name: 'imageName',
  description: 'Name of the image',
  fields: () => ({
      full: {
          type: GraphQLString,
          description: 'Example: Aatrox.png '
      }
  })
})
const difficulty = new GraphQLObjectType({
  name: 'difficulty',
  description: 'Difficulty of the champion',
  fields: () => ({
    difficulty: {
          type: GraphQLInt,
          description: 'Difficulty of the champion'
      }
  })
})
const passive = new GraphQLObjectType({
  name: 'passive',
  description: 'Passive ability of the champion',
  fields: () => ({
    name: {
          type: GraphQLString,
          description: 'Name of the passive'
      },
    description: {
          type: GraphQLString,
          description: 'Description of the passive'
      },
    image: {
          type: imageName,
          description: 'Name of passive image'
    }
  })
})
const mapRecommendedItems = new GraphQLObjectType({
  name: 'mapRecommendedItems',
  description: 'Array of maps with recommended items',
  fields: () => ({
      title: {
          type: GraphQLString,
          description: 'Title of recommended item set'
      },
      blocks: {
        type: new GraphQLList(itemBlock),
        description: 'List of item blocks'
    }
  })
})
const itemBlock = new GraphQLObjectType({
  name: 'itemBlock',
  description: 'List of item blocks',
  fields: () => ({
      type: {
          type: GraphQLString,
          description: 'Type of item block'
      },
      showIfSummonerSpell: {
        type: GraphQLString,
        description: 'Empty if your not a jg, Says SummonerSmite if your a jg'
    },
    items: {
        type: new GraphQLList(item),
        description: 'List of items in block'
    }
  })
})
const item = new GraphQLObjectType({
  name: 'item',
  description: 'Single Item',
  fields: () => ({
      id: {
        type: GraphQLString,
        description: 'Id of item'
      },
      count: {
        type: GraphQLInt,
        description: 'Number of items'
      }
  })
})
module.exports = ChampionType