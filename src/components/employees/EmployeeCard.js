import React from "react"
import "./Employee.css"

export const EmployeeCard = ({ employee, deleteEmployee }) => (
    <section className="employee">
        <h3 className="employee__name">{employee.name}</h3>
        <p className="employee_address">{employee.Location}</p>
        <button type="button" onClick={() => deleteEmployee(employee.id)}>Fire this Employee</button>
    </section>
)