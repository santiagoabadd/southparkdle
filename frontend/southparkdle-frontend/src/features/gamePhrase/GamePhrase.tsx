import React, { useState, useEffect } from "react";
import axios from "axios";
import "./GamePhrase.css";
import ConfettiComponent from "../utils/ConfettiComponent";

export const GamePhrase: React.FC = () => {
  interface CharacterObject {  
    characterId: number;
    character: string;
  }

  interface PhraseObject {  
    phraseId: number;
    phrase: string;
    characterId: number;
  }

  const [characters, setCharacters] = useState<CharacterObject[]>([]);
  const [filteredCharacters, setFilteredCharacters] = useState<CharacterObject[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [randomCharacter, setRandomCharacter] = useState<CharacterObject | null>(null);
  const [selectedCharacters, setSelectedCharacters] = useState<{ character: CharacterObject, isMatch: boolean }[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isSearchVisible, setIsSearchVisible] = useState<boolean>(false);
 
  const [isWon, setIsWon] = useState<boolean>(false);
  const [randomPhrase, setRandomPhrase] = useState<PhraseObject | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const charactersResponse = await axios.get<CharacterObject[]>("http://localhost:8080/character");
        setCharacters(charactersResponse.data);
        const randomPhraseIdResponse = await axios.get<PhraseObject>("http://localhost:8080/phrase/random");
        setRandomPhrase(randomPhraseIdResponse.data);
        const random = charactersResponse.data.find(character => character.characterId === randomPhraseIdResponse.data.characterId);
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
    const isSearchVisible = searchTerm !== '';
    setIsSearchVisible(isSearchVisible);
  }, [filteredCharacters, searchTerm]);

  
  

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchTerm(searchTerm);
    const filtered = characters.filter((character) =>
      character.character.toLowerCase().includes(searchTerm)
    );
    setFilteredCharacters(filtered);
  };

  const handleCharacterClick = (character: CharacterObject) => {
    const isMatch = character.characterId === randomCharacter?.characterId;
    const updatedSelectedCharacters = [...selectedCharacters, { character, isMatch }];
    setSelectedCharacters(updatedSelectedCharacters);
    setSearchTerm('');
    if (isMatch) {
      setIsWon(true);
    }
  };

  const renderCharacterAttributes = (character: CharacterObject, isMatch: boolean) => {
    const backgroundColor = isMatch ? 'rgb(80 201 0 / 52%)' : 'rgba(255, 55, 55, .52)';
    const className = isMatch ? 'shadow-container-match' : 'shadow-container-no-match';
    
    return (
      <div className="shadow-item" key={character.characterId}>
        <div className={className}>
          <div className="shadow" style={{ backgroundColor }}>
            <img className="shadow-image" src={`/iconosCharacters/${character.characterId}.webp`} alt="" />
          </div>
        </div>
      </div>
    );
  };

  const renderSelectedCharacterAttributes = () => {
    return selectedCharacters.map(({ character, isMatch }) => (
      <div key={character.characterId} className="selected-character-shadow">
        {renderCharacterAttributes(character, isMatch)}
      </div>
    ));
  };

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="gameGuess-container-flex">
      {isWon && <ConfettiComponent run={isWon} />}
      <div className="gameGuess-container">
        
        <div className="phrase-container">
          <div><span>{randomPhrase?.phrase}</span></div>
        </div>
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
          <div key={character.characterId} onClick={() => handleCharacterClick(character)} className={randomCharacter && character.characterId === randomCharacter.characterId ? 'matching' : 'not-matching'}>
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
        
        <div className="selected-characters-table">
          {renderSelectedCharacterAttributes()}
        </div>
      </div>
    </div>
  );
};