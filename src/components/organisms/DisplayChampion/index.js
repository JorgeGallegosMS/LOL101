import React, { useState, useEffect, Fragment } from 'react'
const axios = require("axios")

// import { Link } from 'react-router-dom'
//Call data.keys() on https://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion.json to grab list of champions.
function DisplayChampion() {
    const [champions1, setChampions1] = useState([])
    useEffect( () => {
        async function postrequest() {
            const champion = "Tryndamere"
            const data = await axios({
                url: 'http://localhost:5000/graphql',
                method: 'post',
                data: {
                    query: `
                    query Champion {
                        champion(name: "${champion}") {
                        name
                        image {
                            full
                        }
                        }
                        }
                    `
                }
            })
            console.log(data.data.data.champion)
            const {name, image} = data.data.data.champion
            const champion_JSX = (
                <Fragment>
                    <img src={`http://ddragon.leagueoflegends.com/cdn/10.21.1/img/champion/${image.full}`}/>
                    <h1>{name}</h1>
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