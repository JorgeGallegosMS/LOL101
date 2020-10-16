import '../../static/css/HomeLogo.css'
import React, { Fragment, useState, useEffect } from 'react'
import ChampionList from '../ChampionList'
const axios = require("axios")


// import { Link } from 'react-router-dom'
//Call data.keys() on https://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion.json to grab list of champions.
function DisplayChampions() {
    const [search, setSearch] = useState('')
    const [allChampions, setAllChampions] = useState([])
    const [filteredChampions, setFilteredChampions] = useState(allChampions)
    const [loadingState, setLoadingState] = useState("Loading...")

    //All Champions
    //Filtered Champions
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


        //     //******************************** */
        //     // console.log('here')
        //     // console.log(p)
        //     console.log(values)
        //     //values is a list of champion name and image/full

        //     // const JSX_champ2 = values.filter((champion) => {
        //     //     return champion.data.data.champion.name.indexOf(search) !== -1;
        //     // })
        //     // const JSX_champ2 = values.filter((champion, index) => index < 10)
        //     // console.log(JSX_champ2.data.data)
        //     const newChampion = values.map((champion)=> champion.data.data.champion) 
        
        //     const test = newChampion.filter((champion) => {
        //         return champion.name.toLowerCase().includes(search.toLowerCase())
        //     })

        //     const filteredChampions = test.filter((champion, index) => index < 10)
        //     setChampions1(filteredChampions) //set filtered champions state

        //    /***************************************** */
        }
        postrequest()
    }, []) 
    function updateSearch(e) {
        let searchTerm = e.target.value.substr(0,20)
        setSearch(searchTerm)
        // const newChampions = values.map((champion)=> champion.data.data.champion) 
        const filter = allChampions.filter((champion) => {
            return champion.name.toLowerCase().includes(search.toLowerCase())
        })

        const filteredChampions = filter.filter((champion, index) => index < 12)
        setFilteredChampions(filteredChampions) //set filtered champions state
    }
    return (
        <div>
            <form onSubmit={(e)=>{
                updateSearch(e)
                e.preventDefault()
            }}>
                {/* On input */}
                <input type="text" value={search} onInput={(e)=>updateSearch(e)} placeholder="Search for names.."/> 
                <button type="submit">Search</button>
            </form>  
            {/* instead of champions1 its filtered champions */}
            {loadingState}
            <ChampionList champions={filteredChampions}/>
                   
        </div>
    )
}

export default DisplayChampions