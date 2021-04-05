import React, { useState, useEffect } from 'react';
import { CustomerCard } from './CustomerCard';
import { getAllCustomers } from '../../modules/CustomerHelper';

export const CustomerList = () => {
  const [customers, setCustomers] = useState([]);
  const getCustomers = () => {
    return getAllCustomers().then(CustomersFromAPI => {
      setCustomers(CustomersFromAPI)
    });
  };

  useEffect(() => {
    getCustomers();
  }, []);

  return (
        <div className="container-cards">
        {customers.map(customer => <CustomerCard key={customer.id} customer={customer}/>)}
        </div>
    );
};