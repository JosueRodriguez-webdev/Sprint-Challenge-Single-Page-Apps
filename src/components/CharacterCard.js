import React from "react";

export default function CharacterCard({ characterInfo }) {
  const { name, status, species } = characterInfo;
  return (
    <div>
      <h1>{name}</h1>
      <p>{status}</p>
      <p>{species}</p>
    </div>
  );
}
