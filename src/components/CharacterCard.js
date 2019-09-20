import React from "react";
import styled from "styled-components"

const StyledDiv = styled.div`
  text-align:center;
  color:blue;
  border-top:2px solid red;
  background-color:lightgreen;
  
` 



export default function CharacterCard({character}) {
  const {name, species} = character;
  return(
    <StyledDiv>
      <h2>{name}</h2>
      <p>{species}</p>
    </StyledDiv>
  )
}
