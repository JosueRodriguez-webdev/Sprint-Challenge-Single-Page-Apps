import React, { useState } from "react";

export default function SearchForm() {
  const [search, setState] = useState("");

  const preventD = (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {
    setState(event.target.value);
  };

  return (
    <section className="search-form">
      <form onSubmit={preventD}>
        Search:
        <input
          placeholder="Boba fet🔎"
          onChange={handleChange}
          value={search}
        />
      </form>
    </section>
  );
}
