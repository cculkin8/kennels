import React, { useState, useEffect } from 'react';
import { LocationCard } from './LocationCard';
import { getAllLocations, remove } from '../../modules/LocationManager';
import "./LocationList.css";

export const LocationList = () => {
  const [locations, setLocations] = useState([]);
  const getLocations = () => {
    return getAllLocations().then(LocationsFromAPI => {
      setLocations(LocationsFromAPI)
    });
  };
  const deleteLocation = id => {
    remove(id)
    .then(() => getAllLocations().then(setLocations));
  }
  useEffect(() => {
    getLocations();
  }, []);

  return (
        <div className="container-cards">
        {locations.map(location => 
        <LocationCard 
        key={location.id} location={location}
        deleteLocation={deleteLocation}/>)}
        </div>
    );
};