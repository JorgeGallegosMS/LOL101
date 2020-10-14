import React, { useEffect } from '../../frontend/node_modules/@types/react'
import Navbar from '../components/organisms/Navbar'
import HomeLogo from '../components/organisms/HomeLogo'
import DisplayChampions from '../components/organisms/DisplayChampions'
import DisplayChampion from '../components/organisms/DisplayChampion'
const axios = require("../../frontend/node_modules/axios")

function Home() {
    
    return (
        <div>
            <Navbar/>
            <HomeLogo/>
            <main>
                <section className="home">
                    <div className="champions">
                        <div className="champion-text">
            <h1>Home</h1>
            <h3>Choose Your<text> Legend</text></h3>
            <input type="text" id="myInput" onkeyup="myFunction()" placeholder="Search for names.."/>            
            {/* Map a list of every champion 
            return a component that contains name, and icon  */}
            <DisplayChampions/>
        </div>
        </div>
        </section>
        </main>
        </div>
    )
}

export default Home