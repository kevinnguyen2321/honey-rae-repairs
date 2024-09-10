import { useEffect, useState } from 'react';
import { getAllEmployees } from '../../services/employeeService';
import { User } from '../../users/User';
import './Employee.css';

export const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    getAllEmployees().then((employeeArr) => setEmployees(employeeArr));
  }, []);

  return (
    <div className="employees">
      {employees.map((employeeObj) => {
        return <User user={employeeObj.user} />;
      })}
    </div>
  );
};
