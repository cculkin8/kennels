import React, { useState, useEffect } from 'react';
import { CustomerCard } from './CustomerCard';
import { getAllCustomers, remove } from '../../modules/CustomerHelper';
import "./CustomerList.css";

export const CustomerList = () => {
  const [customers, setCustomers] = useState([]);
  const getCustomers = () => {
    return getAllCustomers().then(CustomersFromAPI => {
      setCustomers(CustomersFromAPI)
    });
  };
  const deleteCustomer = id => {
    remove(id)
    .then(() => getAllCustomers().then(setCustomers));
};

  useEffect(() => {
    getCustomers();
  }, []);
  
  return (
        <div className="container-cards">
        {customers.map(customer => 
        <CustomerCard 
        key={customer.id} customer={customer}
        deleteCustomer={deleteCustomer}/>)}
        
        </div>
    );
};