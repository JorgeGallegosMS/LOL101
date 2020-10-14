import React, { useState, useEffect, Fragment } from 'react'
const axios = require("axios")

// import { Link } from 'react-router-dom'
//Call data.keys() on https://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion.json to grab list of champions.
function DisplayChampion() {
    const [champions1, setChampions1] = useState([])
    useEffect( () => {
        async function postrequest() {
            const champion = "Tryndamere"
            console.log("here")

            const data = await axios({
                url: 'http://localhost:5000/graphql',
                method: 'post',
                data: {
                    query: `
                    query Champion {
                        champion(name: "${champion}") {
                            id
                            name
                            title
                            image {
                                full
                            }
                            skins {
                                name
                                num
                            }
                            allytips
                            enemytips
                            tags
                            lore
                            info {
                                difficulty
                            }
                            spells {
                                name
                                description
                                tooltip
                                cooldownBurn
                            }
                            passive {
                                name
                                description
                                image {
                                    full
                                }
                            }
                            recommended {
                                title
                                blocks {
                                    type
                                    showIfSummonerSpell
                                    items {
                                    id
                                    count
                                    }
                                }
                            }
                        }
                    }
                    `
                }
            })
            console.log("here")
            console.log(data.data.data.champion)
            const {id, name, image, title, info, lore, allytips, enemytips, tags, skins, passive, spells} = data.data.data.champion
            const champion_JSX = (
                <Fragment>
                    <h1>{name}</h1>
                    <h1>Title: {title}</h1>
                    <h1>Difficulty: {info.difficulty}</h1>
                    <h1>Icon: <img src={`http://ddragon.leagueoflegends.com/cdn/10.21.1/img/champion/${image.full}`}/></h1>
                    <h1>Lore: {lore}</h1>
                    <h1>Tags: {tags.map((tag) => {
                        return <p>{tag}</p>
                    })}</h1>
                    <h1>Ally Tips: {allytips.map((tip) => {
                        return <p>{tip}</p>
                    })}</h1>
                    <h1>Enemy Tips: {enemytips.map((tip) => {
                        return <p>{tip}</p>
                    })}</h1>
                    <h1>Skins:</h1>
                    {skins.map((skin) => {
                        return (<div>
                            <h1>{skin.name}</h1>
                            <img src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${id}_${skin.num}.jpg`}/>
                        </div>
                        )
                    })}
{/*     "skin_name": "Deep Terror Thresh",
                "splash_url": "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Thresh_1.jpg",
                "loadingScreen_url": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Thresh_1.jpg",
                "icon": "http://ddragon.leagueoflegends.com/cdn/img/champion/tiles/Thresh_1.jpg"
            }, */}


                </Fragment>
            )
            setChampions1(champion_JSX)
        }
        postrequest()
    }) 
    
    return (
        <Fragment>
            {champions1}
        </Fragment>
    )
}
export default DisplayChampion