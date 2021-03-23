import React from 'react'
import Navbar from '../components/Navbar'
import DisplayRotations from '../components/DisplayRotations'

export default function ChampionRotation() {
    return (
        <div>
            <Navbar/>
            <div className="rotation">
            <DisplayRotations/>
            </div>
        </div>    
    )
}