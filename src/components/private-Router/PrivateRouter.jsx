import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRouter = () => {
   const token = !!sessionStorage.getItem('token')
   return token?<Outlet/> : <Navigate to={"/login"}/>
}

export const PrivateRoutesForDashboard = () => {
    const token = !!sessionStorage.getItem('token')
    return !token ?<Outlet/> : <Navigate to="/userdashboard" />;  
}

export default PrivateRouter