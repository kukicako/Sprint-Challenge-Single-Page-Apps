import React, { useEffect, useState } from "react";
import axios from 'axios';
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
      <SearchForm characters={characters}/>
      {/* <h2>{characters.map(character => (
        <CharacterDetails key={character.id} character={character} />
      ))}</h2> */}
    </section>
  );
}



export default CharacterList;
