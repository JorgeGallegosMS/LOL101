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
        async function grabIds() {
            const data = await axios({
                url: 'http://localhost:5000/graphql',
                method: 'post',
                data: {
                    query: `
                    query Champion {
                        champIds
                    }
                    `
                }
            })
            return data.data.data.champIds
        }
        async function postrequest() {
            // console.log(await grabIds())
            const champions = await grabIds()
            const p = champions.map((champ) => {
                return axios({
                    url: 'http://localhost:5000/graphql',
                    method: 'post',
                    data: {
                        query: `
                        query Champion {
                            champion(name: "${champ}") {
                            name
                            id
                            image {
                                full
                            }
                            }
                            }
                        `
                    }
                })
            })
            const values = await axios.all(p)
            // Set all champions here
            setAllChampions(values.map((champion)=> champion.data.data.champion))
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
                <button class="subbutton" type="submit">Search</button>
                </div>
            </form> 
            {/* instead of champions1 its filtered champions */}
            {loadingState}
            {displayAfterLoad()}
            <ChampionList champions={filteredChampions}/>
                   
        </div>
    )
}