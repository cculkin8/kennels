import React from "react";
import "./Kennel.css"
import { AnimalCard, AnimalCard2, AnimalCard3 } from "./animal/AnimalCard";
import { LocationCard, LocationCard2, LocationCard3 } from "./locations/LocationCard";
import { CustomerCard, CustomerCard2, CustomerCard3, CustomerCard4} from "./customers/CustomerCard";
import { EmployeeCard, EmployeeCard2, EmployeeCard3} from "./employees/EmployeeCard";
import { PropsAndState } from "./PropsAndState.js"
export const Kennel = () => (
    <>
        <h1 className ="solid">Nashville Kennels</h1>
        <small className ="solid">Take more dogs from us please.</small>

        <address className ="solid">
            <div>Visit Us at the Nashville North Location</div>
            <div>500 Puppy Way</div>
        </address>
        <PropsAndState yourName="His Almighty Thiccness" />
        <h2>Animals</h2>
        <article className="animals">
            <AnimalCard/>
            <AnimalCard2/>
            <AnimalCard3/>
        </article>
        <h2>Employees</h2>
        <article className="employees">
            <EmployeeCard/>
            <EmployeeCard2/>
            <EmployeeCard3/>
        </article>
        <h2>Locations</h2>
        <article className="locations">
            <LocationCard/>
            <LocationCard2/>
            <LocationCard3/>
        </article>
        <h2>Customers</h2>
        <article className="customers">
            <CustomerCard/>
            <CustomerCard2/>
            <CustomerCard3/>
            <CustomerCard4/>
        </article>
    </>
)