import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Router, Routes } from 'react-router-dom';
import Login from './components/forms/Login';
import { PrivateRoutesForDashboard } from './components/private-Router/PrivateRouter';
import { GrDashboard } from 'react-icons/gr';
import UserDashBoard from './pages/UserDashBoard';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <Router>
        <Routes>
        <>̥
          <Route element={<PrivateRoutes />}>
            <Route path='/login' element={<Login />} />
          </Route>
        </>

        <Route element = {<PrivateRoutesForDashboard/>}>
        <Route path='/dashboard' element={<UserDashBoard/>}/>
        </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
