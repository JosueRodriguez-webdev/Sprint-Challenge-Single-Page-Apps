import React, { useState, useEffect } from "react";
import CharacterCard from "./CharacterCard";

export default function SearchForm(props) {
  console.log(props);

  const [search, setState] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const preventD = (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {
    setState(event.target.value);
  };

  // useEffect(() => {
  //   const results = INSERTDATANAME.filter((person) =>
  //     person.toLowerCase().includes(search)
  //   );
  //   setSearchResults(results);
  // }, [search]);

  return (
    <section className="search-form">
      <form onSubmit={preventD}>
        <label htmlFor="search"></label>
        Search:
        <input
          name="search"
          placeholder="  Search for ..."
          onChange={handleChange}
          value={search}
        />
      </form>
      {searchResults.map((item) => {
        return <CharacterCard item={item} />;
      })}
    </section>
  );
}
