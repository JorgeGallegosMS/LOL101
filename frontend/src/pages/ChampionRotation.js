import React from 'react'
import Navbar from '../components/Navbar'
import DisplayRotations from '../components/DisplayRotations'

export default function ChampionRotation() {
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