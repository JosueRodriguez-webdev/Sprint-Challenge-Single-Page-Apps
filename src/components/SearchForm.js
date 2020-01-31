import React, { useState } from "react";

export default function SearchForm() {
  const [search, setState] = useState("");

  const preventD = (e) => {
    e.preventDefault();
  };

  return (
    <section className="search-form">
      <from onSubmit={preventD}>
        Search:
        <input />
      </from>
    </section>
  );
}
