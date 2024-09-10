import { useEffect, useState } from 'react';
import { getNonStaffUsers } from '../../services/userService';
import './Customer.css';
import { User } from '../../users/User';
import { Link } from 'react-router-dom';

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
        return (
          <Link to={`/customers/${customerObj.id}`} key={customerObj.id}>
            <User user={customerObj} />
          </Link>
        );
      })}
    </div>
  );
};
