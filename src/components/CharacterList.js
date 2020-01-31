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
        console.log(`Success! you got a response`, response);
        setCharacters(response.data.results);
      })
      .catch((error) => {
        console.log(`ERROR, try axios get again.`, error);
      });
  }, []);

  return (
    <section className="character-list">
      {characters.map((characterInfo) => {
        return <CharacterCard characterInfo={characterInfo} />;
      })}
    </section>
  );
}
