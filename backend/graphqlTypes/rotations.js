const { GraphQLString, GraphQLObjectType, GraphQLList } = require('graphql')

const RotationsType = new GraphQLObjectType({
    name: 'RotationsType',
    description: 'Free champion rotations info',
    fields: () => ({
        freeChampionIds: {
            type: new GraphQLList(GraphQLString),
            description: 'The id of free champions'
        }
    })
})


module.exports = RotationsType

// const getChampionRotations = async champsDict => {
//     try {
//         const champ_data = await fetch(https://na1.api.riotgames.com/lol/platform/v3/champion-rotations?api_key=$%7Bkey%7D)
//         const data = await champ_data.json()
//         const freeRotation = data['freeChampionIds']
//         const freeRotationNewPlayers = data['freeChampionIdsForNewPlayers']
//         let champion_rotation = []
//         for (champion in champsDict) {
//             const champ_name = champsDict[champion].nickname
//             const champ_id = champsDict[champion].id
//             if (freeRotation.includes(champ_id)) {
//                 const freeRotationChamp = {
//                     'champ_id': champ_id,
//                     'champ_name': champ_name,
//                     'splash_art': http://ddragon.leagueoflegends.com/cdn/img/champion/splash/$%7Bchamp_name%7D_0.jpg,
//                     'loading_art': http://ddragon.leagueoflegends.com/cdn/img/champion/loading/$%7Bchamp_name%7D_0.jpg
//                 }
//                 champion_rotation.push(freeRotationChamp)
//             }
//         }
//         return champion_rotation
//     } catch (err) {
//         console.error(err)
//     }
// }