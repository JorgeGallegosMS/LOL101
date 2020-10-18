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
                <div class="container2">
                  <div class="champion-title">
                        <h1>{name}</h1>
                  </div>
                  </div>

                    <div class="container3">
                    <div class="section-container">
                    <div class="ability-container">
                    <div class="abilities">
                    
                        {spells.map((spell) => {
                        return (
                            <div>
                                <div class="tooltip">
                                <img src={`http://ddragon.leagueoflegends.com/cdn/10.21.1/img/spell/${spell.image.full}`}/>
                                <div class="top">
                                <h1>{spell.name}</h1>
                                <p>{spell.description}</p>
                                <p>{spell.cooldownBurn}</p>
                                </div>
                                <i></i>
                            </div>
                            </div>
                        )
                    })}
                            <div class="tooltip">
                            <img src={`http://ddragon.leagueoflegends.com/cdn/10.21.1/img/passive/${passive.image.full}`} />
                            <div class="top">
                                <h1>{passive.name}</h1>
                                <p>{passive.description}</p>
                                
                                </div>
                                </div> 
                    </div>
                    </div>
                
                    <div class="a-b-container">
                    <Tabs>
                        <TabList>
                            <Tab>Info</Tab>
                            <Tab>Lore</Tab>
                            <Tab>Items</Tab>
                        </TabList>
                        <TabPanel>
                            <h3>Difficulty: {info.difficulty}</h3>
                            <h1>{tags.map((tag) => {
                                return (
                                    <h4>Class: {tag}</h4>
                                )
                            })}</h1>
                            <span id="id">
                            <h3><strong>Playing As:</strong></h3> {allytips.map((tip) => {
                                return <p>{tip}</p>
                            })}
                            <h3><strong>Playing Against:</strong></h3> {enemytips.map((tip) => {
                                return <p>{tip}</p>
                            })}
                            </span>
                        </TabPanel>
                        <TabPanel>
                            <h3>{lore}</h3>
                        </TabPanel>
                        <TabPanel>
                            <h2>Placeholder</h2>
                        </TabPanel>
                    </Tabs>
                    </div>
                    
                      <div class="splash-art"> 
                            <div class="splash">
                            <img src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${id}_${skins[0].num}.jpg`} alt={name}/>
                            <div class="name-tag">
                        <h1>{title}</h1>
                        </div>
                            </div>
                            </div>
                            </div>
                            </div>
            
                   
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
