import React from 'react'
import Navbar from '../components/Navbar'
import HomeLogo from '../components/HomeLogo'
import DisplayChampions from '../components/DisplayChampions'

export default function Home() {
    return (
        <div>
            <Navbar/>
            <HomeLogo/>
            <main>
                <section className="home">
                    <div className="champions">
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