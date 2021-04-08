import React from "react"
import { Route, Redirect } from "react-router-dom";
import { Home } from "./Home";
import { AnimalList } from "./animal/AnimalList";
import { LocationList } from "./locations/LocationList";
import { CustomerList } from "./customers/CustomerList";
import {EmployeeList } from "./employees/EmployeeList";
import { AnimalDetail } from "./animal/AnimalDetail";
import { LocationDetail } from "./locations/LocationDetail";
import { AnimalForm } from "./animal/AnimalForm";
import { Login } from "../components/auth/Login";
import { Register } from "../components/auth/Register";
import { AnimalEditForm } from "./animal/AnimalEditForm";

export const ApplicationViews = () => {
  const isAuthenticated = () => sessionStorage.getItem("kennel_customer") !== null;

    return (
        <>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route exact path="/animals">
              {isAuthenticated()? <AnimalList /> : <Redirect to="/login"/>}
              </Route>
            <Route exact path="/animals/:animalId(\d+)">
              <AnimalDetail/>
            </Route>
            <Route exact path ="/animals/create">
              <AnimalForm/>
            </Route>
            <Route exact path="/animals/:animalId(\d+)/edit">
              <AnimalEditForm />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
	          <Register />
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
            <Route exact path="/Locations/:locationId(\d+)">
              <LocationDetail/>
            </Route>
        </>
    )
}
//export const ApplicationViews = () => {
  //const [isAuthenticated, setIsAuthenticated]= () => useState(sessionStorage.getItem("kennel_customer")

  //const checkIsAuthenticated = () =>{
  //setIsAuthenticated(sessionStorage.getItem()("kennel_customer")}