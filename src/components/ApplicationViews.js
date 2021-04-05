import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { AnimalList } from "./animal/AnimalList"
import { LocationList } from "./locations/LocationList"
import { CustomerList } from "./customers/CustomerList"
import {EmployeeList } from "./employees/EmployeeList"
export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route path="/animals">
              <AnimalList/>
            </Route>
            <Route path="/Employees">
              <EmployeeList/>
            </Route>
            <Route path="/Customers">
              <CustomerList/>
            </Route>
            <Route path="/Locations">
              <LocationList/>
            </Route>
        </>
    )
}