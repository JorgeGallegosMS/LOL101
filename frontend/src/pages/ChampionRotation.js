import React from 'react'
import Navbar from '../components/Navbar'
import DisplayRotations from '../components/DisplayRotations'
function ChampionRotation() {
    return (
        <div>
            <Navbar/>
            <h1>Champion Rotations!</h1>
            <DisplayRotations/>
        </div>    
    )
}

export default ChampionRotation