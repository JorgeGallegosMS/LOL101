import React from 'react'
import { BrowserRouter as Link } from "react-router-dom";

export default function ChampionItem({id, name, image}) {
    return (
        <div key={id} id="1">
            <a href={`/champion/${id}`}>
                <p className="champion-name">{name}</p>
                <img class="champion-image" src={`http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/${image.full}`} alt={name}/>
            </a>
        </div>
    )
}