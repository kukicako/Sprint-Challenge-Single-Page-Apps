import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import ReactDOM from "react-dom";
const characters = [
  "Rick Sanchez",
  "Morty Smith",
  "Summer Smith",
  "Beth Smith",
  "Jerry Smith",
  "Abadango Cluster Princess",
  "Abradolf Lincler",
  "Adjudicator Rick",
  "Agency Director",
  "Alan Rails",
  "Albert Einsein",
  "Alexander",
  "Alien Googah", 
  "Alien Morty",
  "Alien Rick", 
  "Amish Cyborg", 
  "Annie", 
  "Antenna Morty", 
  "Antenna Rick", 
  "Ants in my Eyes Johnson",
]
export default function SearchForm(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  useEffect(() => {
    const results = characters.filter(character =>
      character.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm]);
    const handleChange = event => {
    setSearchTerm(event.target.value);
  };
 
  return (
    <section className="search-form">
     <form>
         <input 
         id="name" 
         type="text" 
         name="name" 
         onChange={handleChange} 
         value={searchTerm} 
         />
         <StyledBtn type="submit"> Search! </StyledBtn>
     </form> 
        <ul>
          {searchResults.map(character => (
            <li>{character}</li>
          ))}
        </ul>  
    </section>
  );
}
const StyledBtn = styled.button`
text-align: center;
`