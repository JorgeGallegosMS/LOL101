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
                </section>
            </main>
        </div>
    )
}