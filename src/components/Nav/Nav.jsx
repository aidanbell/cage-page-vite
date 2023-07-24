import { NavLink } from 'react-router-dom';
import cageBrand from "../../assets/cage.png"
import { GoogleLogin, useGoogleLogin } from '@react-oauth/google';
import {Button} from "@mui/material";


import "./Nav.css"

export default function Nav({ user, handleLogin, handleLogout }) {
  return (
    <nav>
      <NavLink to="/" className="brand-logo">
        <img className="navbar-brand" src={cageBrand} alt="Nic Cage Logo" />
      </NavLink>
      <div className="navbar-links">
        <NavLink className="navbar-link" to="/movies/">
          Movies
        </NavLink>
        {user ? (
          <>
            <NavLink className="navbar-link" to="/dashboard" className="navbar-link">
              Dashboard
            </NavLink>
            <div className="navbar-link" onClick={() => handleLogout()}>
              Logout
            </div>
          </>
        ) : (
          <GoogleLogin
            onSuccess={(res) => handleLogin(res)}
            onError={(err) => console.log(err)}
            theme="filled_black"
            shape="rectangdivar"
            width="150"
          />
        )}
      </div>
    </nav>
  );
}