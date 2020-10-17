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
    let { id1 } = useParams()
    useEffect( () => {
        async function postrequest() {
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
                    <Tabs>
                        <TabList>
                            <Tab>Info</Tab>
                            <Tab>Lore</Tab>
                            <Tab>Recomended Items</Tab>
                        </TabList>
                        <TabPanel>
                            <h1>Difficulty: {info.difficulty}</h1>
                            <h1>{tags.map((tag) => {
                                return (
                                    <p>Class: {tag}</p>
                                )
                            })}</h1>
                            <h1>Playing As: {allytips.map((tip) => {
                                return <p>{tip}</p>
                            })}</h1>
                            <h1>Playing Agaisnt: {enemytips.map((tip) => {
                                return <p>{tip}</p>
                            })}</h1>
                        </TabPanel>
                        <TabPanel>
                            <h2>{lore}</h2>
                        </TabPanel>
                        <TabPanel>
                            <h2>We might not get this by monday so dont style it</h2>
                        </TabPanel>
                    </Tabs>
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