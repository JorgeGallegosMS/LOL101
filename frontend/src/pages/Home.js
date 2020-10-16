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
                        <div className="champion-text">
                            <h3>Choose Your <text>Legend</text></h3>
                            <DisplayChampions/>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}