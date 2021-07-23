import React, { useState,useEffect } from "react";
import { AnimalSpotlight } from "../components/animal/AnimalSpotlight";
import { getRandomId } from "../modules/AnimalManager";
import { PropsAndState } from "../components/PropsAndState";

export const Home = () => {
    const [spotlightId, setSpotlightId] = useState(0);

    const refreshSpotlightAnimal = () =>{
        getRandomId().then(setSpotlightId);
    };
    useEffect(() => {
        refreshSpotlightAnimal();
    }, []);

return(
<>  
        <h1 className ="solid">Nashville Kennels</h1>
        <small className ="solid">Take more dogs from us please.</small>
        <address className ="solid">
            <div>Visit Us at the Nashville North Location:
            500 Puppy Way
            </div>
            </address>
            <PropsAndState />
            <h1>Animal Spotlight</h1>
            <button onClick={refreshSpotlightAnimal}>Reload &#x27f3;</button>
      { spotlightId && <AnimalSpotlight animalId={spotlightId} />}
    </>
);
};