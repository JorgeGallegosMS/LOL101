import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import HomeLogo from '../components/HomeLogo'
import DisplayChampions from '../components/DisplayChampions'
const axios = require("axios")

function Home() {
    
    return (
        <div>
            <Navbar/>
            <HomeLogo/>
            <main>
                <section className="home">
                    <div className="champions">
                        
            <h1>Home</h1>
            <div className="rectangle">
            <h3>Choose Your<text> Legend</text></h3>
            </div>
            <DisplayChampions/>
        
        </div>
        </section>
        </main>
        </div>
    )
}

export default Home