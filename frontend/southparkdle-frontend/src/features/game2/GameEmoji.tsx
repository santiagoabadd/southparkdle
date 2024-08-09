import React, { useState, useEffect } from "react";
import axios from "axios";
import "./GameEmoji.css";

const GameEmoji: React.FC = () => {
  interface CharacterObject {
    id: number;
    name: string;
    sex: string;
    hair_color: string;
    occupation: string;
    age: string;
    grade: string;
    religion: string;
  }

  
  const [characters, setCharacters] = useState<CharacterObject[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchAllCharacters = async () => {
        try {
          setIsLoading(true);
          let allCharacters: CharacterObject[] = [];
      
          for (let i = 1; i <= 20; i++) {
            const response = await axios.get<CharacterObject>(`https://spapi.dev/api/characters/${i}`);
            allCharacters.push(response.data);
            await new Promise(resolve => setTimeout(resolve, 300)); // Agregar un retardo de 100ms entre cada solicitud
          }
      
          setCharacters(allCharacters);
          setIsLoading(false);
        } catch (error) {
          console.error("Error al cargar los personajes:", error);
          setIsLoading(false);
        }
      };
  
    fetchAllCharacters();
  }, []);


  const exportCharactersAsJSON = () => {
    try {
      const charactersJSON = JSON.stringify(characters, null, 2);
      const blob = new Blob([charactersJSON], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "characters.json";
      a.click();
    } catch (error) {
      console.error("Error al exportar los personajes como JSON:", error);
    }
  };

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <button onClick={exportCharactersAsJSON}>Exportar como JSON</button>
      <ul>
        {characters.map((character) => (
          <li key={character.id}>{character.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default GameEmoji;