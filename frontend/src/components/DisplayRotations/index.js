import React, { useState, useEffect, Fragment } from 'react'
const axios = require("axios")

function DisplayRotations() {
    const [champions1, setChampions1] = useState([])
    useEffect( () => {
        async function postrequest() {
            const data = await axios({
                url: 'http://localhost:5000/graphql',
                method: 'post',
                data: {
                    query: `
                    query Champion {
                        rotations {
                            name
                            splashArt
                        }
                    }
                    `
                }
            })
            const rotations = data.data.data.rotations
            const champion_JSX = (
                <Fragment>
                    {rotations.map((champ) => {
                        return (
                            <div>
                                <h1>{champ.name}</h1>
                                <img src={champ.splashArt}/>
                            </div>
                        )
                    })}
                </Fragment>
            )
            setChampions1(champion_JSX)
        }
        postrequest()
    }, []) 
    
    return (
        <Fragment>
            {champions1}
        </Fragment>
    )
}
export default DisplayRotations