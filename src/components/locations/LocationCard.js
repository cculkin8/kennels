import React from "react"
import "./Location.css"

export const LocationCard = ({ location}) => (
    <section className="location">
        <h3 className="location__name">{location.name}</h3>
        <address className="location_Address">{location.address}</address>
    </section>
)
