import React from 'react';
import './styles.scss'
import { Link } from 'react-router-dom'

const Header = (props) => {
  return (
    <div className="header">
      <div className="wrapper">
          <div className="logo">
            <Link to="/">
              <p>Labyrinth</p>
            </Link>
          </div>
          <div className="cta">
            <ul>
              <li>
                <Link to="/registration">Register</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          {/* <p>Register</p> */}
          </div>
      </div>
    </div>
  );
}

export default Header;
