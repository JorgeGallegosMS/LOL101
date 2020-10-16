import React from 'react'
import Navbar from '../components/Navbar'
import DisplayRotations from '../components/DisplayRotations'
function ChampionRotation() {
    return (
        <div>
            <div class="nav-rota">
            <Navbar/>
            </div>
            <div className="rotation">
            <DisplayRotations/>
            </div>
        </div>    
    )
}

export default ChampionRotation