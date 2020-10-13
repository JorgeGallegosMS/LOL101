import React from 'react'
import Navbar from '../components/organisms/Navbar'
import HomeLogo from '../components/organisms/HomeLogo'
function Home() {
    return (
        <div>
            <Navbar/>
            <HomeLogo/>
            <h1>Home</h1>
            <h3>Choose Your<text> Legend</text></h3>
            <input type="text" id="myInput" onkeyup="myFunction()" placeholder="Search for names.."/>            
            {/* Map a list of every champion 
            return a component that contains name, and icon  */}
        </div>
    )
}

export default Home