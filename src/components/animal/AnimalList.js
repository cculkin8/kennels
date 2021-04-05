import React, { useState, useEffect } from 'react';
//import the components we will need
import { AnimalCard } from './AnimalCard';
import { getAllAnimals, getAnimalById } from '../../modules/AnimalManager';

export const AnimalList = () => {
  const [animals, setAnimals] = useState([]);

  const getAnimals = () => {
    return getAllAnimals().then(animalsFromAPI => {
      setAnimals(animalsFromAPI)
    });
  };

  useEffect(() => {
    getAnimals();
  }, []);

  return (
        <div className="container-cards">
        {animals.map(animal => <AnimalCard key={animal.id} animal={animal}/>)}
        </div>
    );
};