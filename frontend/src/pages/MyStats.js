import React from 'react'
import Navbar from '../components/Navbar'
import MyStats from '../components/MyStats'

export default function Home() {
    return (
        <div>
            <Navbar/>
            <main>
                <section className="home">
                   <h1>My Stats Page</h1>
                </section>
            </main>
        </div>
    )
}