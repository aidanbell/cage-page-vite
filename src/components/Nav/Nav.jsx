import { NavLink } from 'react-router-dom';
import cageBrand from "../../assets/cage.png"
import { GoogleLogin, useGoogleLogin } from '@react-oauth/google';



import "./Nav.css"

export default function Nav({ user, handleLogin, handleLogout }) {
  const login = useGoogleLogin({
    onSuccess: async (res) => handleLogin(res),
    flow: 'auth-code'
  })

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
            <NavLink className="navbar-link" to="/dashboard">
              Dashboard
            </NavLink>
            <div className="navbar-link" onClick={() => handleLogout()}>
              Logout
            </div>
          </>
        ) : (
          <NavLink onClick={() => login()}>Login</NavLink>
          // <GoogleLogin
          //   onSuccess={(res) => handleLogin(res)}
          //   onError={(err) => console.log(err)}
          //   theme="filled_black"
          //   shape="rectangdivar"
          //   width="150"
          // />
        )}
      </div>
    </nav>
  );
}