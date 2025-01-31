import { useState } from 'react'
import './App.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Login from '../Pages/Login'
import Register from '../Pages/Register'

function App() {

  const routes = createBrowserRouter([
    {
      path:'/login',
      element:<Login />
    },
    {
      path:'/register',
      element:<Register />
    }
  ])

  return (
    <>
     <RouterProvider router={routes} />
    </>
  )
}

export default App
