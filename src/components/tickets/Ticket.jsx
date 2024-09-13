import { useEffect, useState } from 'react';
import { getAllEmployees } from '../../services/employeeService';
import {
  assignTicket,
  deleteTicket,
  updateTicket,
} from '../../services/ticketService';

export const Ticket = ({ ticket, currentUser, getAndSetTickets }) => {
  const [employees, setEmployees] = useState([]);
  const [assignedEmployee, setAssignedEmployee] = useState({});

  useEffect(() => {
    getAllEmployees().then((employeesArr) => setEmployees(employeesArr));
  }, []);

  useEffect(() => {
    const foundEmployee = employees.find(
      (employee) => employee.id === ticket.employeeTickets[0]?.employeeId
    );
    setAssignedEmployee(foundEmployee);
  }, [employees, ticket]);

  const handleClaim = () => {
    const currentEmployee = employees.find(
      (employee) => employee.userId === currentUser.id
    );
    const newEmployeeTicket = {
      employeeId: currentEmployee.id,
      serviceTicketId: ticket.id,
    };

    assignTicket(newEmployeeTicket).then(() => {
      getAndSetTickets();
    });
  };

  const handleClose = () => {
    const closedTicket = {
      id: ticket.id,
      userId: ticket.userId,
      description: ticket.description,
      emergency: ticket.emergency,
      dateCompleted: new Date(),
    };

    updateTicket(closedTicket).then(() => {
      getAndSetTickets();
    });
  };

  const handleDelete = () => {
    deleteTicket(ticket.id).then(() => {
      getAndSetTickets();
    });
  };

  return (
    <section className="ticket">
      <header className="ticket-info">#{ticket.id}</header>
      <div>{ticket.description}</div>
      <footer>
        <div>
          <div className="ticket-info">Assignee</div>
          <div>
            {assignedEmployee ? assignedEmployee.user?.fullName : 'None'}
          </div>
        </div>
        <div>
          <div className="ticket-info">Emergency</div>
          <div>{ticket.emergency ? 'Yes' : 'No'}</div>
        </div>
        <div className="btn-container">
          {/* If the logged in user is an employee and there's no employee ticket associated with service ticket,
         then a button to claim ticket should display */}
          {currentUser.isStaff && !assignedEmployee ? (
            <button className="btn btn-secondary" onClick={handleClaim}>
              Claim
            </button>
          ) : (
            ''
          )}
          {/* If the logged in user is the assigned employee for the ticket
         and there is no dateCompleted then a button to close ticket should render */}
          {assignedEmployee?.userId === currentUser.id &&
          !ticket.dateCompleted ? (
            <button className="btn btn-warning" onClick={handleClose}>
              Close
            </button>
          ) : (
            ''
          )}

          {!currentUser.isStaff && (
            <button className="btn btn-warning" onClick={handleDelete}>
              Delete
            </button>
          )}
        </div>
      </footer>
    </section>
  );
};
