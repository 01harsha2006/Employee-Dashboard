import { useEffect, useState } from "react";

function Dashboard({ newEmployees = [] }) {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch employees");
        }
        return response.json();
      })
      .then((data) => {
        setEmployees(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Unable to load API employees.");
        setLoading(false);
      });
  }, []);

  return (
    <div className="dashboard">
      <h1>Employee Dashboard</h1>
      <p className="subtitle">Employee data fetched from external API.</p>

      {loading && <p>Loading employees...</p>}
      {error && <p className="error">{error}</p>}

      {!loading && !error && (
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
              </tr>
            </thead>

            <tbody>
              {employees.map((employee) => (
                <tr key={employee.id}>
                  <td>{employee.id}</td>
                  <td>{employee.name}</td>
                  <td>{employee.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {newEmployees.length > 0 && (
        <div style={{ marginTop: "35px" }}>
          <h2>Added Employees</h2>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Designation</th>
                  <th>Location</th>
                  <th>Salary</th>
                </tr>
              </thead>
              <tbody>
                {newEmployees.map((employee) => (
                  <tr key={employee.id}>
                    <td>{employee.name}</td>
                    <td>{employee.designation}</td>
                    <td>{employee.location}</td>
                    <td>{employee.salary}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
