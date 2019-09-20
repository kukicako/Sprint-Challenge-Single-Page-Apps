import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import SearchForm from "./SearchForm"
const CharacterList = props =>{
const [characters, setCharacters] = useState([])

  
  useEffect(() => {
    const GetCharacters = () => {
      axios
        .get('https://rickandmortyapi.com/api/character/')
        .then(response => {
          console.log(response)
          setCharacters(response.data.results);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    };
     GetCharacters();
  }, []);

  return (
    <section className="character-list">
      <SearchForm/>
      <h2>{characters.map(character => (
        <CharacterDetails key={character.id} character={character} />
      ))}</h2>
    </section>
  );
}

function CharacterDetails({character}) {
  const {name, species} = character;
  return(
    <div>
      
      <h2>{name}</h2>
      <p>{species}</p>
    </div>
  )
}

export default CharacterList;
