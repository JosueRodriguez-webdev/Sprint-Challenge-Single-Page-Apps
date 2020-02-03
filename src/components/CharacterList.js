import React, { useEffect, useState } from "react";
import axios from "axios";

import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

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

  if (searchResults.length === 0) {
    return (
      <section className="character-list">
        <SearchForm
          characters={characters}
          searchResults={searchResults}
          setSearchResults={setSearchResults}
        />
        {characters.map((characterInfo) => {
          return (
            <CharacterCard
              key={characterInfo.id}
              characterInfo={characterInfo}
            />
          );
        })}
      </section>
    );
  } else {
    return (
      <section className="character-list">
        <SearchForm
          characters={characters}
          searchResults={searchResults}
          setSearchResults={setSearchResults}
        />

        {searchResults.map((item) => (
          <CharacterCard characterInfo={item} />
        ))}
      </section>
    );
  }
}
