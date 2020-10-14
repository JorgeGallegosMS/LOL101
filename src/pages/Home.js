import React, { useEffect } from 'react'
import Navbar from '../components/organisms/Navbar'
import HomeLogo from '../components/organisms/HomeLogo'
import DisplayChampions from '../components/organisms/DisplayChampions'
const axios = require("axios")

function Home() {
    // useEffect( async () => {
    //     const champions = ["Tryndamere", "Jax"]
    //     const requests = []
    //     async function postrequest(champion) {
    //         const data = await axios({
    //             url: 'http://localhost:5000/graphql',
    //             method: 'post',
    //             data: {
    //               query: `
    //                 query Champion {
    //                   champion(name: "${champion}") {
    //                     id
    //                     name
    //                     image {
    //                         full
    //                     }
    //                     }
    //                   }
    //                 `
    //             }
    //           })
    //         console.log(data.data)
    //     }
    //     champions.forEach(async champion => {
    //         console.log(champion)
    //         await postrequest(champion)
    //     });
    //     // const data2 = await axios.all(requests)
    //     // console.log(data2)
    //     // postrequest()
    // })
    
    
    return (
        <div>
            <Navbar/>
            <HomeLogo/>
            <h3>Choose Your Legend</h3>
            <input type="text" id="myInput"  placeholder="Search for names.."/>      
            <DisplayChampions/>
        </div>
    )
}

export default Home