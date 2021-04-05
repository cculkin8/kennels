import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { AnimalList } from "./animal/AnimalList"
import { LocationList } from "./locations/LocationList"
import { CustomerList } from "./customers/CustomerList"
import {EmployeeList } from "./employees/EmployeeList"
import { AnimalDetail } from "./animal/AnimalDetail";
export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route exact path="/animals">
              <AnimalList/>
            </Route>
            <Route exact path="/animals/:animalId(\d+)">
              <AnimalDetail/>
            </Route>
            <Route exact path="/Employees">
              <EmployeeList/>
            </Route>
            <Route exact path="/Customers">
              <CustomerList/>
            </Route>
            <Route exact path="/Locations">
              <LocationList/>
            </Route>
        </>
    )
}