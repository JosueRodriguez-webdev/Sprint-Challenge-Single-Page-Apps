import React from "react";
import CharacterList from "./CharacterList";
import WelcomePage from "./WelcomePage";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>

      <NavLink to="/">Home</NavLink>
      <NavLink to="/characters">Characters</NavLink>
    </header>
  );
}
