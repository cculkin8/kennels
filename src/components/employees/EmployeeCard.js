import React from "react"
import "./Employee.css"

export const EmployeeCard = () => (
    <section className="Employee">
        <h3 className="Employee__name">Andrew Fletcher</h3>
        <address className="Employee_Address">213 Oceola Ave, Nashville, TN 37209</address>
    </section>
)
export const EmployeeCard2 = () => (
    <section className="Employee">
      <h3 className="Employee_name">Martin Gore</h3>
      <address className="Employee_Address">Wouldn't you like to know?</address>
    </section>
)
export const EmployeeCard3 = () => (
    <section className="Employee">
      <h3 className="Employee_name">Dave Gahan</h3>
      <address className="Employee_Address">200 Main Street</address>
    </section>
)