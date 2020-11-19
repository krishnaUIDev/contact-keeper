import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";

const NavBar = ({ title, icon }) => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, logout, user } = authContext;
  const onLogout = () => {
    logout();
  };
  const authLinks = () => {
    <>
      <li>Hello {user && user.name}</li>
      <li>
        <a href="#!">
          <i className="fas fa-sign-out-alt" onClick={onLogout}></i>
          <span>Logout</span>
        </a>
      </li>
    </>;
  };
  const guestLinks = () => {
    <>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </>;
  };
  return (
    <div className="navbar bg-primary">
      <h1>
        <i className={icon} /> {title}
      </h1>
      <ul>{isAuthenticated ? authLinks() : guestLinks()}</ul>
    </div>
  );
};
NavBar.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
};
NavBar.defaultProps = {
  title: "Contact Keeper",
  icon: "fas fa-id-card-alt",
};
export default NavBar;
