import React, { useState, useEffect } from 'react';
import { AnimalCard } from './AnimalCard';
import { getAllAnimals, remove, getAnimalById } from '../../modules/AnimalManager';
import { useHistory } from "react-router-dom";


export const AnimalList = () => {
  const [animals, setAnimals] = useState([]);

  const getAnimals = () => {
    return getAllAnimals().then(animalsFromAPI => {
      setAnimals(animalsFromAPI)
    });
  };
  const deleteAnimal = id => {
    remove(id)
    .then(() => getAllAnimals().then(setAnimals));
};

  useEffect(() => {
    getAnimals();
  }, []);
  const history = useHistory();
  return (
    <div className="container-cards">
   <section className="section-content">
      <button type="button"
      className="btn"
      onClick={() => {history.push("/animals/create")}}>
      Admit a new dog for testing
      </button>
    </section>
        
        {animals.map(animal => 
          <AnimalCard
            key={animal.id} animal={animal}
            deleteAnimal={deleteAnimal}/>)}
        </div>
    );
};