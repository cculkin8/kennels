import React from "react"
import "./Location.css"

export const LocationCard = ({ location, deleteLocation }) => (
    <section className="location">
        <h3 className="location__name">{location.name}</h3>
        <address className="location_Address">{location.address}</address>
        <button type="button" onClick={() => deleteLocation(location.id)}>Close Location</button>
    </section>
)
