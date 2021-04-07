import React, { useState, useEffect } from 'react';
import { getAnimalById } from "../../modules/AnimalManager";
import "./AnimalDetail.css";
import { useParams, useHistory } from "react-router-dom"
import { PropsAndState } from '../PropsAndState';
import { remove } from "../../modules/AnimalManager"

export const AnimalDetail = () =>{
    const [animal, setAnimal] = useState({name: "", breed: ""});
    const [isLoading, setIsLoading] = useState(true)
   
    const { animalId } = useParams();
    const history = useHistory();

    useEffect(() =>{
        console.log("useEffect", animalId) 
        getAnimalById(animalId)
            .then(animal => {
                setAnimal(animal);
            }); 
            setIsLoading(false);
    }, [animalId]);
    const handleDelete = () => {
        setIsLoading(true);
        remove(animalId).then(() => 
        history.push("/animals")
        );
    };
    return (
        <section className="animal">
            <h3 className="animal__name">Name: {animal.name}</h3>
            <div className="animal__breed">Breed: {animal.breed}</div>
            <div className="animal__location">Location: {animal.location?.name}</div>
            <div className="animal__owner">Customer: {animal.customer?.name}</div>
            <button type="button" disabled={isLoading} onClick={handleDelete}>Remove the Dog</button>
        </section>
    )
} 
