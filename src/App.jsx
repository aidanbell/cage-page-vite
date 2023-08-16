import { useState, useEffect } from 'react'
import { getToken, setToken } from './utils/token-service';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { useGoogleLogin, googleLogout } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';

import Landing from './pages/Landing/Landing';
import Index from './pages/Index/Index';
import Nav from './components/Nav/Nav';
import Details from './pages/Details/Details';
import Dashboard from './pages/Dashboard/Dashboard';

import { login, getUser } from './utils/user-service';

import './App.css'


export default function App() {
  const [movies, setMovies] = useState([])
  const [sortkey, setSortkey] = useState('title')
  const [user, setUser] = useState(null)

  const navigate = useNavigate()

  const handleLogin = async (res) =>{
    let token = await login(res)
    console.log(token)
    setToken(token)
    let user = await getUser()
    console.log(user)
    if (user) {
      setUser(user)
      navigate('/dashboard')
    }
  }

  const getFreshUser = async () => {
    let user = await getUser()
    if (user) {
      setUser(user)
    }
  }


  const handleLogout = () => {
    googleLogout()
    setUser(null)
    setToken(null)
    navigate('/')
  }

  useEffect(() => {
    async function getUserHook() {
      let user = await getUser()
      if (user) {
        setUser(user)
      }
    }
    if (!user) {
      const token = getToken()
      if (token) {
        getUserHook()
        // navigate('/movies')
      }
    }
  }, [])



  return (
    <>
      <Nav user={user} handleLogin={handleLogin} handleLogout={handleLogout} />
      <div className="page">
        <Routes>
          <Route path="/" exact element={<Landing />} />
          <Route
            path="/movies"
            exact
            element={
              <Index
                user={user}
                movies={movies}
                setMovies={setMovies}
                sortkey={sortkey}
                setSortkey={setSortkey}
              />
            }
          />
          <Route
            path="/movies/:id"
            element={<Details user={user} getFreshUser={getFreshUser}/>}
          />
          <Route path="/dashboard" element={<Dashboard user={user} />} />
        </Routes>
      </div>
    </>
  );
}