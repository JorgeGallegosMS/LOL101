import React from 'react'
import Navbar from '../components/Navbar'
import DisplayChampion from '../components/DisplayChampion'

export default function Champion() {
    return (
        <div>
            <Navbar/>
            <div className="championinf">
            <DisplayChampion/>
            </div>
        </div>
    )
}