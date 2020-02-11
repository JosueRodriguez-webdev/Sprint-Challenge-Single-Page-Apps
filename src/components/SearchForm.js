import React, { useState, useEffect } from "react";
import CharacterCard from "./CharacterCard";
import axios from "axios";

export default function SearchForm(props) {
  const [search, setState] = useState();

  console.log(props);

  useEffect(() => {
    props.setSearchResults(
      props.characters.filter((item) => {
        return item.name.toLowerCase().includes(search);
      })
    );
  }, [search]);

  const preventD = (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {
    setState(event.target.value);
  };

  return (
    <section className="search-form">
      <form>
        <label htmlFor="search"></label>
        Search:
        <input
          name="search"
          placeholder="  Search for ..."
          onChange={handleChange}
          value={search}
        />
      </form>
    </section>
  );
}
