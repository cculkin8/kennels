import React, { useState, useEffect } from 'react';
import { EmployeeCard } from './EmployeeCard';
import { getAllEmployees, remove } from '../../modules/EmployeeManager';
import "./EmployeeList.css"

export const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const getEmployees = () => {
    return getAllEmployees().then(EmployeesFromAPI => {
      setEmployees(EmployeesFromAPI)
    });
  };
  const deleteEmployee = id => {
    remove(id)
    .then(() => getAllEmployees().then(setEmployees));
};
  useEffect(() => {
    getEmployees();
  }, []);

  return (
        <div className="container-cards">
        {employees.map(employee => 
        <EmployeeCard 
        key={employee.id} employee={employee}
        deleteEmployee={deleteEmployee}/>)}
        </div>
    );
};