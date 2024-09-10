import { useEffect, useState } from 'react';
import { getNonStaffUsers } from '../../services/userService';
import './Customer.css';
import { User } from '../../users/User';

export const CustomerList = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    getNonStaffUsers().then((customerArr) => {
      setCustomers(customerArr);
    });
  }, []);

  return (
    <div className="customers">
      {customers.map((customerObj) => {
        return <User user={customerObj} />;
      })}
    </div>
  );
};
