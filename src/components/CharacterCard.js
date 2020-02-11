import React from "react";

import styled from "styled-components";

const TextAlignh1 = styled.h1`
  text-align: center;
`;

const TextAlignp = styled.p`
  text-align: center;
`;

export default function CharacterCard({ characterInfo }) {
  const { name, status, species } = characterInfo;
  return (
    <div>
      <TextAlignh1>{name}</TextAlignh1>
      <TextAlignp>{status}</TextAlignp>
      <TextAlignp>{species}</TextAlignp>
    </div>
  );
}
