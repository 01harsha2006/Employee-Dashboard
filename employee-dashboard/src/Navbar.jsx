import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>Employee Dashboard</h2>

      <div className="nav-links">
        <NavLink 
          to="/" 
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Home
        </NavLink>
        <NavLink 
          to="/employee-form" 
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Employee Form
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
