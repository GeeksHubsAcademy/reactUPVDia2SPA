import { CharacterDesign } from "../../common/CharacterDesign/CharacterDesign";
import { bringCharacters } from "../../services/apiCalls";
import "./Home.css";
import React, { useState, useEffect } from "react";

export const Home = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    if (characters.length === 0) {
      setTimeout(() => {
        bringCharacters()
          .then((results) => {
            //Data de la API llega, seteo dentro del estado del
            //componente
            setCharacters(results.data.results);
          })
          .catch((error) => console.log(error));
      }, 750);
    }
  }, [characters]);

  return (
    <div className="homeDesign">
      {characters.length > 0 ? (
        <div className="showcaseCharacters" >
          {characters.map((character) => {
            return (
              <div 
                key={character.id}
                onClick={()=>console.log(character)}
              >
                <CharacterDesign
                  name={character.name}
                  image={character.image}
                />
              </div>
            );
          })}
        </div>
      ) : (
        <div>aun no han llegado</div>
      )}
    </div>
  );
};
