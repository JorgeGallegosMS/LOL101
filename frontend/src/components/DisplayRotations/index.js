import React, { useState, useEffect, Fragment } from 'react'
import '../../static/css/Rotations.css'

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
            <div class="hero-title">
                <div data-aos="fade-down"><h2>Current Champion Rotation</h2>
                </div>
            </div>
            <div className="border">
            <div className="champ-grid">
                {champions1}
            </div>
            </div>
        </Fragment>
    )
}
export default DisplayRotations