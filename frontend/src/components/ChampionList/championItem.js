import React from 'react'
import { BrowserRouter as Link } from "react-router-dom";

export default function ChampionItem({id, name, icon}) {
    return (
        <div key={id} id="1">
            <a href={`/champion/${id}`}>
                <p className="champion-name">{name}</p>
                <img class="champion-image" src={icon} alt={name}/>
            </a>
        </div>
    )
}