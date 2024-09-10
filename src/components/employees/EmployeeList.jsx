import { useEffect, useState } from 'react';
import { getAllEmployees } from '../../services/employeeService';
import { User } from '../../users/User';
import './Employee.css';
import { Link } from 'react-router-dom';

export const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    getAllEmployees().then((employeeArr) => setEmployees(employeeArr));
  }, []);

  return (
    <div className="employees">
      {employees.map((employeeObj) => {
        return (
          <Link to={`/employees/${employeeObj.user.id}`} key={employeeObj.id}>
            <User user={employeeObj.user} />
          </Link>
        );
      })}
    </div>
  );
};
