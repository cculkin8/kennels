import React, { useState, useEffect } from 'react';
import { getAnimalById } from "../../modules/AnimalManager";
import "./AnimalDetail.css";
import { useParams, useHistory } from "react-router-dom"

export const AnimalDetail = () =>{
    const [animal, setAnimal] = useState({name: "", breed: ""});
    const { animalId } = useParams();
    const history = useHistory();

    useEffect(() =>{
        console.log("useEffect", animalId) 
        getAnimalById(animalId)
            .then(animal => {
                setAnimal(animal);
            });
    }, [animalId]);
    return (
        <section className="animal">
            <h3 className="animal__name">Name: {animal.name}</h3>
            <div className="animal__breed">Breed: {animal.breed}</div>
            <div className="animal__location">Location: {animal.location?.name}</div>
            <div className="animal__owner">Customer: {animal.customer?.name}</div>
        </section>
    )
} 
