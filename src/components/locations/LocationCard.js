import React from "react"
import "./Location.css"
import { Link } from "react-router-dom";
export const LocationCard = ({ location, deleteLocation }) => (
    <section className="location">
        <h3 className="location__name">{location.name}</h3>
        <address className="location_Address">{location.address}</address>
        <button type="button" onClick={() => deleteLocation(location.id)}>Close Location</button>
        <Link className="locationCardDetails" to={`/locations/${location.id}`}><button type="button">Details</button></Link>
    </section>
)
