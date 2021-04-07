import React from "react"
import "./Animal.css"
import { Link } from "react-router-dom";
import { firstLetterCase } from "../../modules/helpers";

export const AnimalCard = ({ animal }) => (
    <section className="animal">
        <h3 className="animal__name">{firstLetterCase(animal.name)}</h3>
        <div className="animal_breed">Breed: {firstLetterCase(animal.breed)}</div>
        <Link className="animalCardDetails" to={`/animals/${animal.id}`}><button type="button">Details</button></Link>
    </section>
)
