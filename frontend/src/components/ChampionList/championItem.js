import React from 'react'

export default function ChampionItem({id, name, image}) {
    return (
        <div class="champion {{ @key }}" id="1">
            <a class="champion-link" href={`/champions/${id}`} id="2">
            <p class="champion-name">{name}</p>
            <div id="a"><img class="champion-image" src={`http://ddragon.leagueoflegends.com/cdn/10.21.1/img/champion/${image.full}`} id="3"/>
            </div>
            </a>
        </div>
    )
}