
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Dashboard from "./pages/Dashboard";
import EmployeeForm from "./pages/EmployeeForm";
import "./App.css";

function App() {
  const [newEmployees, setNewEmployees] = useState([]);

  const addEmployee = (employee) => {
    setNewEmployees((previous) => [
      ...previous,
      { ...employee, id: `new-${Date.now()}` },
    ]);
  };

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={<Dashboard newEmployees={newEmployees} />}
        />

        <Route
          path="/employee-form"
          element={<EmployeeForm addEmployee={addEmployee} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

