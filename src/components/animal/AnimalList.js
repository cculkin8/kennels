import React, { useState, useEffect } from 'react';
import { AnimalCard } from './AnimalCard';
import { getAllAnimals, remove, getAnimalById } from '../../modules/AnimalManager';
import { useHistory } from "react-router-dom";
import "./AnimalList.css"


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
    <section className="button"> 
    <button type="button"
      className="btn"
      onClick={() => {history.push("/animals/create")}}>
      Admit a new dog for testing
      </button>
      <div className="container-cards">
        {animals.map(animal => 
          <AnimalCard
            key={animal.id} animal={animal}
            deleteAnimal={deleteAnimal}/>)}
        </div>
        </section>
    );
};