import React from 'react'

export default function ChampionItem({id, name, image}) {
    return (
        <div class="champion {{ @key }}" id="1">
            <a className="champion-link" href={`/champions/${id}`}>
                <p className="champion-name">{name}</p>
                <img class="champion-image" src={`http://ddragon.leagueoflegends.com/cdn/10.21.1/img/champion/${image.full}`} alt={name}/>
            </a>
        </div>
    )
}