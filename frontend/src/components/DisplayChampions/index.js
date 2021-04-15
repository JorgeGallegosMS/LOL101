import React, { useState, useEffect } from 'react'
import ChampionList from '../ChampionList'
const axios = require("axios")
// 1st Issue, it could randomly error
// 2nd Issue, need to wait till search STATE is set before activating filter.
// Fix this, then do the slug Routes then chill.
// First check office hours, then ask mitchell.
export default function DisplayChampions() {
    const [search, setSearch] = useState('')
    const [allChampions, setAllChampions] = useState([])
    const [filteredChampions, setFilteredChampions] = useState(allChampions)
    const [loadingState, setLoadingState] = useState("Loading...")

    useEffect( () => {
        async function postrequest() {
            const p = await axios({
                    url: `/graphql`,
                    method: 'post',
                    data: {
                        query: `
                        query Champion {
                            championList {
                                id
                                name
                                icon
                            }
                        }
                        `
                    }
                })
            const values = p.data.data.championList
            // Set all champions here
            setAllChampions(values)
            setLoadingState("Finished!")
        }
        postrequest()
    }, []) 

    function updateSearch(e) {
        setLoadingState("")
        let searchTerm = e.target.value.substr(0,20)
        setSearch(searchTerm)
        console.log(search)
        // const newChampions = values.map((champion)=> champion.data.data.champion) 
        const filter = allChampions.filter((champion) => {
            return champion.name.toLowerCase().includes(searchTerm.toLowerCase())
        })

        const filteredChampions = filter.filter((champion, index) => index < 12)
        setFilteredChampions(filteredChampions) //set filtered champions state
    }
    
    function displayAfterLoad() {
        if (loadingState === "Loading...") {
            console.log("Still loading")
        } else if (loadingState === "Finished!") {
            return <ChampionList champions={allChampions}/>
        } else {
            return
        }
    }
    return (
        <div>
            <form onSubmit={(e)=>{
                updateSearch(e)
                e.preventDefault()
            }}>
                {/* On input */}
                <div className="searchbar-container">
                <input class="searchinp" type="text" value={search} onInput={(e)=>updateSearch(e)} placeholder="Search for champions"/> 
                </div>
            </form> 
            {/* instead of champions1 its filtered champions */}
            {loadingState}
            {displayAfterLoad()}
            <ChampionList champions={filteredChampions}/>
                   
        </div>
    )
}