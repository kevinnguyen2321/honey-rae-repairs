import { useParams } from 'react-router-dom';
import './Employee.css';
import { useEffect, useState } from 'react';
import { getEmployeeById } from '../../services/employeeService';

export const EmployeeDetails = () => {
  const { employeeId } = useParams();
  const [employee, setEmployee] = useState({});

  useEffect(() => {
    getEmployeeById(employeeId).then((data) => {
      const employeeObj = data[0];

      setEmployee(employeeObj);
    });
  }, [employeeId]);

  return (
    <>
      <section className="employee">
        <header className="employee-header">{employee.user?.fullName}</header>
        <div>
          <span className="employee-info">Email:</span>
          {employee.user?.email}
        </div>

        <div>
          <span className="employee-info">Specialty:</span>
          {employee.specialty}
        </div>

        <div>
          <span className="employee-info">Rate:</span>
          {employee.rate}
        </div>

        <div>
          <span className="employee-info">
            Currently working on {employee.employeeTickets?.length} {''}
            {employee?.employeeTickets?.length > 1 ? 'tickets' : 'ticket'}
          </span>
        </div>
      </section>
    </>
  );
};
