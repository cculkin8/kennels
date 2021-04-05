import React from "react"
import "./Animal.css"

export const AnimalCard = ({ animal, deleteAnimal }) => (
    <section className="animal">
        <h3 className="animal__name">{animal.name}</h3>
        <div className="animal_breed">Breed: {animal.breed}</div>
        <button type="button" onClick={() => deleteAnimal(animal.id)}>Entfernen Sie den Hund</button>
    </section>
)
