import React, { Fragment, useState, useEffect } from 'react'
const axios = require("axios")

// import { Link } from 'react-router-dom'
//Call data.keys() on https://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion.json to grab list of champions.
function DisplayChampions() {
    const [champions1, setChampions1] = useState([])
    useEffect( () => {
        async function grabIds() {
            const data = await axios({
                url: 'http://localhost:5000/graphql',
                method: 'post',
                data: {
                    query: `
                    query Champion {
                        champIds
                    }
                    `
                }
            })
            return data.data.data.champIds
        }
        async function postrequest() {
            // console.log(await grabIds())
            const champions = await grabIds()
            const p = champions.map((champ) => {
                return axios({
                    url: 'http://localhost:5000/graphql',
                    method: 'post',
                    data: {
                        query: `
                        query Champion {
                            champion(name: "${champ}") {
                            name
                            image {
                                full
                            }
                            }
                            }
                        `
                    }
                })
            })
            console.log('here')
            // console.log(p)
            const values = await axios.all(p)
            console.log(values)
            const JSX_champ = values.map((champion) => {
                // console.log(`Champion Variable:`)
                console.log(champion.data.data.champion)
                const { name, image } = champion.data.data.champion
                return (
                    <li>
                        <img src={`http://ddragon.leagueoflegends.com/cdn/10.21.1/img/champion/${image.full}`}/>
                        <h1>{name}</h1>
                    </li>
                )
            })
            setChampions1(JSX_champ)
        }
        postrequest()
    }, []) 
    
    return (
        <div>
            {champions1}
        </div>
    )
}
export default DisplayChampions