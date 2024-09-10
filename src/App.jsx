import './App.css';
import { TicketList } from './components/tickets/TicketList';
import { CustomerList } from './components/customers/CustomerList';
import { EmployeeList } from './components/employees/EmployeeList';
import { Route, Routes, Outlet } from 'react-router-dom';
import { NavBar } from './components/nav/NavBar';

export const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <NavBar />
            <Outlet />
          </>
        }
      >
        <Route path="tickets" element={<TicketList />} />
        <Route path="customers" element={<CustomerList />} />
      </Route>
    </Routes>
  );
};
