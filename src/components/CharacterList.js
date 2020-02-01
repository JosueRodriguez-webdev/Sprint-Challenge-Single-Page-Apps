import React, { useEffect, useState } from "react";
import axios from "axios";

import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/`)
      .then((response) => {
        console.log(`Success! you got a response`, response.data.results);
        setCharacters(response.data.results);
      })
      .catch((error) => {
        console.log(`ERROR, try axios get again.`, error);
      });
  }, []);

  const names = characters.forEach((name) => {
    return name.name;
  });

  return (
    <section className="character-list">
      <SearchForm names={names} />
      {characters.map((characterInfo) => {
        return (
          <CharacterCard key={characterInfo.id} characterInfo={characterInfo} />
        );
      })}
    </section>
  );
}
