// Navbar.jsx
// import from "react";
import "../Market/navbar.css"; // Ensure this file includes Font Awesome CSS
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <NavLink exact to="/" className="nav-item" activeClassName="active">
        <i className="fas fa-home nav-icon"></i>
        <span className="nav-text">Home</span>
      </NavLink>
      <NavLink to="/msg" className="nav-item" activeClassName="active">
      <i className="fas fa-envelope nav-icon"></i>
        <span className="nav-text">Chat</span>
      </NavLink>
      <NavLink to="/profile" className="nav-item" activeClassName="active">
        <i className="fas fa-user nav-icon"></i>
        <span className="nav-text">Profile</span>
      </NavLink>
      <NavLink to="/shorts" className="nav-item" activeClassName="active">
        <i className="fas fa-play nav-icon"></i>
        <span className="nav-text">Shorts</span>
      </NavLink>
      <NavLink to="/social" className="nav-item" activeClassName="active">
        <i className="fas fa-store nav-icon"></i>
        <span className="nav-text">Market</span>
      </NavLink>
    </div>
  );
};

export default Navbar;
