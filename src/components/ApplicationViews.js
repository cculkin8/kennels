import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { AnimalCard, AnimalCard2, AnimalCard3 } from "./animal/AnimalCard"
import { EmployeeCard, EmployeeCard2, EmployeeCard3 } from "./employees/EmployeeCard"
import { LocationCard, LocationCard2, LocationCard3 } from "./locations/LocationCard"
import { CustomerCard, CustomerCard2, CustomerCard3} from "./customers/CustomerCard"
export const ApplicationViews = () => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/">
                <Home />
            </Route>

            {/* Render the animal list when http://localhost:3000/animals */}
            <Route path="/animals">
              <AnimalCard/>
              <AnimalCard2/>
              <AnimalCard3/>
            </Route>
            <Route path="/Employees">
              <EmployeeCard/>
              <EmployeeCard2/>
              <EmployeeCard3/>
            </Route>
            <Route path="/Customers">
              <CustomerCard/>
              <CustomerCard2/>
              <CustomerCard3/>
            </Route>
            <Route path="/Locations">
              <LocationCard/>
              <LocationCard2/>
              <LocationCard3/>
            </Route>
        </>
    )
}