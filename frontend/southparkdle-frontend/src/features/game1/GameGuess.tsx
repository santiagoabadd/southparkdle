

import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Game1.css";
import { useNavigate } from 'react-router-dom';
import { render } from "@testing-library/react";
import ConfettiComponent from "../utils/ConfettiComponent";


declare namespace __WebpackModuleApi {
  export function requireContext(directory: string, useSubdirectories?: boolean, regExp?: RegExp): (key: string) => any;
}

export const GameGuess: React.FC = () => {
  interface CharacterObject {
    [key: string]: string | number; 
    characterId: number;
    character: string;
    gender: string;
    hairColor: string;
    occupation: string;
    age: string;
    grade: string;
    religion: string;
    family: string;
  }

  

 


  const [characters, setCharacters] = useState<CharacterObject[]>([]);
  const [filteredCharacters, setFilteredCharacters] = useState<CharacterObject[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [randomCharacter, setRandomCharacter] = useState<CharacterObject | null>(null);
  const [selectedCharacters, setSelectedCharacters] = useState<CharacterObject[]>([]);
const [isLoading, setIsLoading] = useState<boolean>(true);
const [isSearchVisible, setIsSearchVisible] = useState<boolean>(false);
const [currentAttributeIndex, setCurrentAttributeIndex] = useState<number>(0);
const [isRevealingAttributes, setIsRevealingAttributes] = useState<boolean>(false);
const [displayedCharacter, setDisplayedCharacter] = useState<CharacterObject | null>(null);
const [isWon, setIsWon] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const charactersResponse = await axios.get<CharacterObject[]>("http://localhost:8080/character");
        setCharacters(charactersResponse.data);
        const randomCharacterIdResponse = await axios.get<number>("http://localhost:8080/character/random");
        const randomCharacterId = randomCharacterIdResponse.data;
        const random = charactersResponse.data.find(character => character.characterId === randomCharacterId);
        setRandomCharacter(random || null);
        setIsLoading(false);
      } catch (error) {
        console.error("Error al cargar los personajes:", error);
        setIsLoading(false);
      }
    };
  
    fetchData();
  }, []);
  
  useEffect(() => {
    const isSearchVisible = searchTerm != '';
    setIsSearchVisible(isSearchVisible);
  }, [filteredCharacters, searchTerm]);

  useEffect(() => {
  
    if (currentAttributeIndex > 0 && currentAttributeIndex <= 8) {
   
      setTimeout(() => {
        setCurrentAttributeIndex(currentAttributeIndex + 1);
      }, 300);
    }
  }, [currentAttributeIndex]);

  useEffect(() => {
    if (isRevealingAttributes && displayedCharacter) {
    
      setTimeout(() => {
        setCurrentAttributeIndex(1);
      }, 0);
    }
  }, [displayedCharacter, isRevealingAttributes]);

  useEffect(() => {
    if (selectedCharacters.length > 0 && randomCharacter) {
      const lastSelectedCharacter = selectedCharacters[selectedCharacters.length - 1];
      const attributesToCheck = ["gender", "hairColor", "occupation", "age", "grade", "religion", "family"];
      const isAllAttributesMatch = attributesToCheck.every(attribute =>
        isAttributeMatching(lastSelectedCharacter[attribute] as string, randomCharacter[attribute] as string)
      );
      if (isAllAttributesMatch) {
        setIsWon(true);
      }
    }
  }, [selectedCharacters, randomCharacter]);
  
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchTerm(searchTerm);
    const filtered = characters.filter((character) =>
      character.character.toLowerCase().includes(searchTerm)
    );
    setFilteredCharacters(filtered);
  };

  const handleCharacterClick = (character: CharacterObject) => {
    const updatedSelectedCharacters: CharacterObject[] = [...selectedCharacters, character];
    setSelectedCharacters(updatedSelectedCharacters);
    setIsRevealingAttributes(true);
    setCurrentAttributeIndex(1);
    setDisplayedCharacter(character);
    setSearchTerm('');
  };
  const isAttributeMatching = (attribute: string, selectedAttribute: string) => {
    return attribute.toLowerCase() === selectedAttribute.toLowerCase();
  };

  const renderCharacterAttributes2 = (character: CharacterObject) => {
    if (!randomCharacter) return null;
    return (
      <div className="attributes">
        <div className="attribute-container">
        
        <div className="arttribute" ><div><img className= "search-image" src={`/iconosCharacters/${character.characterId}.webp`} alt="" /></div></div>
       </div>
        <div className="attribute-container">
        <div className="arttribute" style={{ backgroundColor: isAttributeMatching(character.gender, randomCharacter.gender) ? 'rgb(80 201 0 / 52%)' : 'rgba(255, 55, 55, .52)' , border: isAttributeMatching(character.gender, randomCharacter.gender) ? '2px solid #513131' : '2px solid #513131' }}><span>{character.gender}</span></div>
        </div>
        <div className="attribute-container">
        <div className="arttribute"  style={{ backgroundColor: isAttributeMatching(character.hairColor, randomCharacter.hairColor) ? 'rgb(80 201 0 / 52%)' : 'rgba(255, 55, 55, .6)' , border: isAttributeMatching(character.hairColor, randomCharacter.hairColor) ? '2px solid #513131' : '2px solid #513131' }}><span>{character.hairColor}</span></div>
        </div>
        <div className="attribute-container">
        <div className="arttribute"  style={{ backgroundColor: isAttributeMatching(character.occupation, randomCharacter.occupation) ? 'rgb(80 201 0 / 52%)' : 'rgba(255, 55, 55, .6)' , border: isAttributeMatching(character.occupation, randomCharacter.occupation) ? '2px solid #513131' : '2px solid #513131' }}><span>{character.occupation}</span></div>
        </div>
        <div className="attribute-container">
        <div className="arttribute"  style={{ backgroundColor: isAttributeMatching(character.age, randomCharacter.age) ? 'rgb(80 201 0 / 52%)' : 'rgba(255, 55, 55, .6)' , border: isAttributeMatching(character.age, randomCharacter.age) ? '2px solid #513131' : '2px solid #513131' }}><span>{character.age}</span></div>
        </div>
        <div className="attribute-container">
        <div className="arttribute"  style={{ backgroundColor: isAttributeMatching(character.grade, randomCharacter.grade) ? 'rgb(80 201 0 / 52%)' : 'rgba(255, 55, 55, .6)' , border: isAttributeMatching(character.grade, randomCharacter.grade) ? '2px solid #513131' : '2px solid #513131' }}><span>{character.grade}</span></div>
        </div>
        <div className="attribute-container">
        <div className="arttribute"  style={{ backgroundColor: isAttributeMatching(character.religion, randomCharacter.religion) ? 'rgb(80 201 0 / 52%)' : 'rgba(255, 55, 55, .6)' , border: isAttributeMatching(character.religion, randomCharacter.religion) ? '2px solid #513131' : '2px solid #513131' }}><span>{character.religion}</span></div>
        </div>
        <div className="attribute-container">
        <div className="arttribute"  style={{ backgroundColor: isAttributeMatching(character.family, randomCharacter.family) ? 'rgb(80 201 0 / 52%)' : 'rgba(255, 55, 55, .6)' , border: isAttributeMatching(character.family, randomCharacter.family) ? '2px solid #513131' : '2px solid #513131' }}><span>{character.family}</span></div>
        </div>
      </div>
    /*
      <div className="attributes">
        <div className="attribute-container">
        
        <div className="arttribute" ><div>{character.character}</div></div>
       </div>
        <div className="attribute-container">
        <div className="arttribute" style={{ backgroundColor: isAttributeMatching(character.gender, randomCharacter.gender) ? 'rgba(0, 228, 105, .6)' : 'rgba(255, 55, 55, .6)' , border: isAttributeMatching(character.gender, randomCharacter.gender) ? '2px solid #24d475' : '2px solid #ff3737' }}><span>{character.gender}</span></div>
        </div>
        <div className="attribute-container">
        <div className="arttribute"  style={{ backgroundColor: isAttributeMatching(character.hairColor, randomCharacter.hairColor) ? 'rgba(0, 228, 105, .6)' : 'rgba(255, 55, 55, .6)' , border: isAttributeMatching(character.hairColor, randomCharacter.hairColor) ? '2px solid #24d475' : '2px solid #ff3737' }}><span>{character.hairColor}</span></div>
        </div>
        <div className="attribute-container">
        <div className="arttribute"  style={{ backgroundColor: isAttributeMatching(character.occupation, randomCharacter.occupation) ? 'rgba(0, 228, 105, .6)' : 'rgba(255, 55, 55, .6)' , border: isAttributeMatching(character.occupation, randomCharacter.occupation) ? '2px solid #24d475' : '2px solid #ff3737' }}><span>{character.occupation}</span></div>
        </div>
        <div className="attribute-container">
        <div className="arttribute"  style={{ backgroundColor: isAttributeMatching(character.age, randomCharacter.age) ? 'rgba(0, 228, 105, .6)' : 'rgba(255, 55, 55, .6)' , border: isAttributeMatching(character.age, randomCharacter.age) ? '2px solid #24d475' : '2px solid #ff3737' }}><span>{character.age}</span></div>
        </div>
        <div className="attribute-container">
        <div className="arttribute"  style={{ backgroundColor: isAttributeMatching(character.grade, randomCharacter.grade) ? 'rgba(0, 228, 105, .6)' : 'rgba(255, 55, 55, .6)' , border: isAttributeMatching(character.grade, randomCharacter.grade) ? '2px solid #24d475' : '2px solid #ff3737' }}><span>{character.grade}</span></div>
        </div>
        <div className="attribute-container">
        <div className="arttribute"  style={{ backgroundColor: isAttributeMatching(character.religion, randomCharacter.religion) ? 'rgba(0, 228, 105, .6)' : 'rgba(255, 55, 55, .6)' , border: isAttributeMatching(character.religion, randomCharacter.religion) ? '2px solid #24d475' : '2px solid #ff3737' }}><span>{character.religion}</span></div>
        </div>
        <div className="attribute-container">
        <div className="arttribute"  style={{ backgroundColor: isAttributeMatching(character.family, randomCharacter.family) ? 'rgba(0, 228, 105, .6)' : 'rgba(255, 55, 55, .6)' , border: isAttributeMatching(character.family, randomCharacter.family) ? '2px solid #24d475' : '2px solid #ff3737' }}><span>{character.family}</span></div>
        </div>
      </div>*/
    );
  };

  
  const renderCharacterAttributes = (character: CharacterObject) => {
    if (!randomCharacter) return null;
  
    if (!displayedCharacter) return null;
    const attributesToShow = Object.entries(character).slice(1, currentAttributeIndex);
    let gameWon=true;
    return (
      <div className="attributes">
        {attributesToShow.map(([key, value], index) => {
          const characterValue = character[key];
          const randomValue = randomCharacter[key] as string;
          if (typeof characterValue === 'string') {

            const isMatching = isAttributeMatching(characterValue, randomValue);

            if (!isMatching) {
              gameWon = false;
            }
            
            if (index === 0) {
              const imagePath = `/iconosCharacters/${character.characterId}.webp`;
              return (
                <div className="attribute-container" key={key}>
                  <div className="arttribute">
                    <img src={imagePath} alt={character.character} className="character-image" />
                  </div>
                </div>
              );
            } else {
              return (
                <div className="attribute-container" key={key}>
                  <div className="arttribute" style={{ backgroundColor: isAttributeMatching(characterValue, randomValue) ? 'rgb(80 201 0 / 52%)' : 'rgba(255, 55, 55, .52)', border: isAttributeMatching(characterValue, randomValue) ? '2px solid #513131' : '2px solid #513131' }}>
                    <span>{characterValue}</span>
                  </div>
                </div>
              );
            }
          } else {
            return null;
          }
          
        })}
        
      </div>
    );  
  };
    /*
      <div className="attributes">
        <div className="attribute-container">
        
        <div className="arttribute" ><div>{character.character}</div></div>
       </div>
        <div className="attribute-container">
        <div className="arttribute" style={{ backgroundColor: isAttributeMatching(character.gender, randomCharacter.gender) ? 'rgba(0, 228, 105, .6)' : 'rgba(255, 55, 55, .6)' , border: isAttributeMatching(character.gender, randomCharacter.gender) ? '2px solid #24d475' : '2px solid #ff3737' }}><span>{character.gender}</span></div>
        </div>
        <div className="attribute-container">
        <div className="arttribute"  style={{ backgroundColor: isAttributeMatching(character.hairColor, randomCharacter.hairColor) ? 'rgba(0, 228, 105, .6)' : 'rgba(255, 55, 55, .6)' , border: isAttributeMatching(character.hairColor, randomCharacter.hairColor) ? '2px solid #24d475' : '2px solid #ff3737' }}><span>{character.hairColor}</span></div>
        </div>
        <div className="attribute-container">
        <div className="arttribute"  style={{ backgroundColor: isAttributeMatching(character.occupation, randomCharacter.occupation) ? 'rgba(0, 228, 105, .6)' : 'rgba(255, 55, 55, .6)' , border: isAttributeMatching(character.occupation, randomCharacter.occupation) ? '2px solid #24d475' : '2px solid #ff3737' }}><span>{character.occupation}</span></div>
        </div>
        <div className="attribute-container">
        <div className="arttribute"  style={{ backgroundColor: isAttributeMatching(character.age, randomCharacter.age) ? 'rgba(0, 228, 105, .6)' : 'rgba(255, 55, 55, .6)' , border: isAttributeMatching(character.age, randomCharacter.age) ? '2px solid #24d475' : '2px solid #ff3737' }}><span>{character.age}</span></div>
        </div>
        <div className="attribute-container">
        <div className="arttribute"  style={{ backgroundColor: isAttributeMatching(character.grade, randomCharacter.grade) ? 'rgba(0, 228, 105, .6)' : 'rgba(255, 55, 55, .6)' , border: isAttributeMatching(character.grade, randomCharacter.grade) ? '2px solid #24d475' : '2px solid #ff3737' }}><span>{character.grade}</span></div>
        </div>
        <div className="attribute-container">
        <div className="arttribute"  style={{ backgroundColor: isAttributeMatching(character.religion, randomCharacter.religion) ? 'rgba(0, 228, 105, .6)' : 'rgba(255, 55, 55, .6)' , border: isAttributeMatching(character.religion, randomCharacter.religion) ? '2px solid #24d475' : '2px solid #ff3737' }}><span>{character.religion}</span></div>
        </div>
        <div className="attribute-container">
        <div className="arttribute"  style={{ backgroundColor: isAttributeMatching(character.family, randomCharacter.family) ? 'rgba(0, 228, 105, .6)' : 'rgba(255, 55, 55, .6)' , border: isAttributeMatching(character.family, randomCharacter.family) ? '2px solid #24d475' : '2px solid #ff3737' }}><span>{character.family}</span></div>
        </div>
      </div>*/
 

      const renderSelectedCharacterAttributes = () => {
    
        return selectedCharacters.filter(character => displayedCharacter && displayedCharacter.characterId !== character.characterId)
        .map(character => (
          <div key={character.characterId} className="selected-character" onClick={() => handleCharacterClick(character)}>
            {displayedCharacter && displayedCharacter.characterId === character.characterId && renderCharacterAttributes(character)}
           { renderCharacterAttributes2(character)}
            
          </div>
        ));
      };

      const renderLastSelectedCharacterAttributes2 = () => {
   
        if (selectedCharacters.length === 0) {
          return null;
        }
        const lastSelectedCharacter = selectedCharacters[selectedCharacters.length - 1];
        return (
          <div key={lastSelectedCharacter.characterId} className="selected-character" onClick={() => handleCharacterClick(lastSelectedCharacter)}>
            {renderCharacterAttributes(lastSelectedCharacter)}
           
          </div>
        );
      };



      
  if (isLoading) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="gameGuess-container-flex">
    {isWon && <ConfettiComponent run={isWon} />}
      <div className="gameGuess-container">

      {!isWon && (
    <div className="search-box">
    <input className="input-gameGuess"
      type="text"
      placeholder="Buscar por nombre..."
      value={searchTerm}
      onChange={handleSearch}
    />
    {isSearchVisible && (
      <div className="search-results">
        {filteredCharacters.map((character) => (
          <div key={character.characterId} onClick={() => handleCharacterClick(character)} className={randomCharacter && isAttributeMatching(character.character, randomCharacter.character) ? 'matching' : 'not-matching'}>
              <div className="search-item">
          
           
                  <img className= "search-image" src={`/iconosCharacters/${character.characterId}.webp`} alt="" />
               </div>
               <div className="seach-character">
                  <span>
                  {character.character}
                  </span>
               </div>
            
            
          </div>
        ))}
      </div>
    )}
  </div>
  )}
      
        <header className="attributes-header">
          
          <div className="attributes">
            <div className="attribute-header"><div>Nombre</div></div>
            <div className="attribute-header"><div>Género</div></div>
            <div className="attribute-header"><div>Color de cabello</div></div>
            <div className="attribute-header"><div>Ocupación</div></div>
            <div className="attribute-header"><div>Edad</div></div>
            <div className="attribute-header"><div>Grado</div></div>
            <div className="attribute-header"><div>Religión</div></div>
            <div className="attribute-header"><div>Familia</div></div>
          </div>
        </header>
        <div className="selected-characters-table">
          {renderSelectedCharacterAttributes()}
          {renderLastSelectedCharacterAttributes2 ()}
        </div>
      </div>
    </div>
  );
};