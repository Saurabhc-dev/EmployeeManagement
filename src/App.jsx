import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import EmployeeList from "./pages/EmployeeList";
import AddEditEmployee from "./pages/AddEditEmployee";

function App() {
  return <>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/employees" element={<EmployeeList />} />
    <Route path="/employees/add" element={<AddEditEmployee />} />
    <Route path="/employees/edit/:id" element={<AddEditEmployee />} />
  </Routes>
  </BrowserRouter>
  </>;
}

export default App;
