import React from "react";
import ChampionItem from "./championItem";

export default function ChampionList({ champions }) {
  return (
    <ul>
      {champions.map((champion) => {
        return (
          <li>
            <ChampionItem {...champion} />
          </li>
        );
      })}
    </ul>
  );
}