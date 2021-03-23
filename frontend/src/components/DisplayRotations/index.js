import React, { useState, useEffect, Fragment } from 'react'
import '../../static/css/Rotations.css'
const axios = require("axios")

export default function DisplayRotations() {
    const [rotation, setRotation] = useState([])
    useEffect( () => {
        async function postrequest() {
            const data = await axios({
                url: `/graphql`,
                method: 'post',
                data: {
                    query: `
                    query Champion {
                        rotations {
                            id
                            name
                            splashArt
                        }
                    }
                    `
                }
            }).catch(error => {
                console.log(error.response.data);
            });
            console.log(data)
            const rotations = data.data.data.rotations
            console.log(rotations)
            const champion_JSX = (
                <Fragment>
                    {rotations.map((champ) => {
                        return (
                            <div className="cell">
                                <a href={`/champion/${champ.id}`}>
                                    <img className="imager" src={champ.splashArt}/>

                                    <h1 className="champ-namer">{champ.name}</h1>
                                </a>
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
            
            <div className="hero-title">
               <h2>Current Champion Rotation</h2>
           </div>
            <div className="container1"></div>
           <div className="champ-grid">
               {rotation}
               </div>
        </Fragment>
    )
}