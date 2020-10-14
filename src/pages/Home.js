import React, { useEffect } from 'react'
import Navbar from '../components/organisms/Navbar'
import HomeLogo from '../components/organisms/HomeLogo'
import DisplayChampions from '../components/organisms/DisplayChampions'
const axios = require("axios")

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
        </div>
        </div>
        </section>
        </main>
        </div>
    )
}

export default Home