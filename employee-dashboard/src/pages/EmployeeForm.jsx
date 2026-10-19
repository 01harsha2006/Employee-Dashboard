import { useState } from "react";
import { useNavigate } from "react-router-dom";

function EmployeeForm({ addEmployee }) {
  const navigate = useNavigate();

  const [employee, setEmployee] = useState({
    name: "",
    designation: "",
    location: "",
    salary: "",
  });

  const handleChange = (event) => {
    setEmployee({
      ...employee,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (addEmployee) {
      addEmployee(employee);
    }
    navigate("/");
  };

  return (
    <div className="form-container">
      <h1>Employee Form</h1>
      <p className="subtitle">Enter the employee details below.</p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Enter employee name"
          value={employee.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="designation">Designation</label>
        <input
          id="designation"
          type="text"
          name="designation"
          placeholder="Enter designation"
          value={employee.designation}
          onChange={handleChange}
          required
        />

        <label htmlFor="location">Location</label>
        <input
          id="location"
          type="text"
          name="location"
          placeholder="Enter location"
          value={employee.location}
          onChange={handleChange}
          required
        />

        <label htmlFor="salary">Salary</label>
        <input
          id="salary"
          type="number"
          name="salary"
          placeholder="Enter salary"
          min="0"
          value={employee.salary}
          onChange={handleChange}
          required
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default EmployeeForm;
