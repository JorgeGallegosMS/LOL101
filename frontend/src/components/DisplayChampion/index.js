import React, { useState, useEffect, Fragment } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import '../../static/css/Champions.css'

import {
    BrowserRouter as Router,
    useParams
  } from "react-router-dom";
const axios = require("axios")


function DisplayChampion() {
    const [champion, setChampion] = useState([])
    const [champID, setChampID] = useState("Tryndamere")
    let { id1 } = useParams()
    // setChampID(id)
    console.log(id1)
    console.log("here")
    useEffect( () => {
        async function postrequest() {
            const champion = "Tryndamere"
            console.log("Made it here")
            const data = await axios({
                url: 'http://localhost:5000/graphql',
                method: 'post',
                data: {
                    query: `
                    query Champion {
                        champion(name: "${id1}") {
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
                                image {
                                    full
                                  }
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
  

          
            // console.log(data.data.data.champion)
            const {id, name, image, title, info, lore, allytips, enemytips, tags, skins, passive, spells} = data.data.data.champion

            const champion_JSX = (
                <Fragment>
                <div class="section-container">
                  <div class="name-tag">
                        <h1>{name}</h1>
                  </div>

                    <div class="container">
                    <div class="champion-title">
                        <h1>Title: {title}</h1>
                    </div>
                    </div>
                    {/* <h1>Icon: <img src={`http://ddragon.leagueoflegends.com/cdn/10.21.1/img/champion/${image.full}`} alt={name}/></h1> */}
                    <h1>Tags: {tags.map((tag) => {
                        return <p>{tag}</p>
                    })}</h1>
                     <h1>Passive:</h1>
                    <p>{passive.name}</p>
                    <p>{passive.description}</p>
                    <img src={`http://ddragon.leagueoflegends.com/cdn/10.21.1/img/passive/${passive.image.full}`} />
                    <h1>Abilities:</h1>
                    {spells.map((spell) => {
                        return (
                            <div>
                                <h1>{spell.name}</h1>
                                <p>{spell.description}</p>
                                <p>{spell.cooldownBurn}</p>
                                <img src={`http://ddragon.leagueoflegends.com/cdn/10.21.1/img/spell/${spell.image.full}`}/>
                            </div>
                        )
                    })}
                      <h1>Skins:</h1>
                      <div class="splash-art"> 
                            <div class="splash">
                            <h1>{skins[0].name}</h1>
                            <img src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${id}_${skins[0].num}.jpg`} alt={name}/>
                            </div>
                            </div>
                            
                        {/* {skins.map((skin) => {
                        return ( 
                            <div class="splash-art"> 
                            <div class="splash">
                            <h1>{skins[0].name}</h1>
                            <img src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${id}_${skins[0].num}.jpg`} alt={name}/>
                        </div>
                        </div>
                        )
                    })} */}
            
                   
                    {/* <Tabs>
                        <TabList>
                        <Tab>Info</Tab>
                        <Tab>Lore</Tab>
                        </TabList>
                    
                        <TabPanel>
                        <h2>Difficulty: {info.difficulty}</h2>

                        <h1>Ally Tips: {allytips.map((tip) => {
                        return <p>{tip}</p>
                        })}</h1>

                        <h1>Enemy Tips: {enemytips.map((tip) => {
                        return <p>{tip}</p>
                        })}</h1>

                        </TabPanel>
                        <TabPanel>
                        <h2>{lore}</h2>
                        </TabPanel>
                    </Tabs> */}
                    </div>
                   
    </Fragment>
            )
            setChampion(champion_JSX)
        }
        postrequest()
    }, []) 
    

    return (
        <Fragment>
            {champion}
        </Fragment>
    )
}
export default DisplayChampion