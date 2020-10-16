import React, { useState, useEffect, Fragment } from 'react'
import '../../static/css/Rotations.css'
const axios = require("axios")

export default function DisplayRotations() {
    const [rotation, setRotation] = useState([])
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
            console.log(rotations)
            const champion_JSX = (
                <Fragment>
                    {rotations.map((champ) => {
                        return (
                            <div>
                                <h1 class="champ-namer">{champ.name}</h1>
                                   <img class="imager" src={champ.splashArt}/>
                           </div>
                        )
                    })}
                </Fragment>
            )
            setRotation(champion_JSX)
        }
        postrequest()
    }, []) 

    return (
        <Fragment>
            
            <div class="hero-title">
               <h2>Current Champion Rotation</h2>
           </div>
           <div className="border">
           <div className="champ-grid">
               {rotation}
            
           </div>
           </div>

            
        </Fragment>
    )
}