import React from "react"
import "./Animal.css"
import { Link } from "react-router-dom";

export const AnimalCard = ({ animal, deleteAnimal }) => (
    <section className="animal">
        <h3 className="animal__name">{animal.name}</h3>
        <div className="animal_breed">Breed: {animal.breed}</div>
        <button type="button" onClick={() => deleteAnimal(animal.id)}>Entfernen Sie den Hund</button>
        <Link className="animalCardDetails" to={`/animals/${animal.id}`}><button type="button">Details</button></Link>
    </section>
)
