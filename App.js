import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { useEffect, useState } from 'react'
import Home from './pages/Home'
import Vaccination from './pages/Vaccination'
import Navbar from './components/Navbar'
import About from './pages/About'
import Schedule from './pages/Schedule'
import Login from './pages/Login'
import axios from './axios'
import Register from './pages/Register'

import UserPanel from './pages/UserPanel'
function App () {
  const [user, setUser] = useState(null)
  const [role, setRole] = useState(null)
  const token = localStorage.getItem('access_token')
  const admintoken = localStorage.getItem('admin')
  useEffect(() => {
    async function getContent () {
      if (!token && !admintoken) {
        return
      }

      const utoken = admintoken || token

      try {
        const response = await axios.get('/validateUser', {
          headers: {
            Authorization: `Bearer ${utoken}`
          }
        })
        setUser(response.data.validateOne.fullName)
        setRole(response.data.validateOne.role)
      } catch (error) {
        console.log(error)
      }
    }

    getContent()
  }, [])
  return (
    <>
      <Toaster
        position='top-center'
        toastOptions={{
          success: {
            theme: {
              primary: '#18206F'
            },
            style: {
              background: '#18206F',
              color: 'white'
            },
            iconTheme: {
              primary: '#FBCBDC',
              secondary: '#18206F'
            }
          }
        }}
      ></Toaster>
      <Router>
        <Navbar user={user} role={role} />
        <main>
          <Routes>
            <Route path='' element={<Home />} />
            <Route path='/vaccination' element={<Vaccination />} />
            <Route path='/about' element={<About />} />
            <Route
              path='/schedule'
              element={<Schedule user={user} role={role} />}
            />
            <Route path='/to/login' element={<Login />} />
            <Route path='/to/register' element={<Register />} />
            <Route path='/myprofile' element={<UserPanel />} />
          </Routes>
        </main>
      </Router>
    </>
  )
}

export default App
