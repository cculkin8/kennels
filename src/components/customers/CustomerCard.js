import React from "react"
import "./Customer.css"

export const CustomerCard = ({ customer, deleteCustomer}) => (
    <section className="customer">
        <h3 className="customer__name">{customer.name}</h3>
        <address className="customer_address">{customer.address}</address>
        <button type="button" onClick={() => deleteCustomer(customer.id)}>This Customer has decided to work with a lesser Kennel</button>
    </section>
)
