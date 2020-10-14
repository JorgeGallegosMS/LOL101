import React from '../../frontend/node_modules/@types/react'
import Navbar from '../components/organisms/Navbar'
import DisplayChampion from '../components/organisms/DisplayChampion'

function Champion() {
    return (
        <div>
            <Navbar/>
            <DisplayChampion/>
        </div>
    )
}

export default Champion