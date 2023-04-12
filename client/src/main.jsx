import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Login from './components/Login'
import Register from './components/Register'
import Asian from './components/Asian'
import Western from './components/Western'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },

  {
    path: "register",
    element: <Register/>,
  },

  {
    path: "login",
    element: <Login/>,
  },

  {
    path: "asian",
    element: <Asian/>,
  },

  {
    path: "western",
    element: <Western/>,
  },

  
]);



const root = ReactDOM.createRoot(document.getElementById('root')).render(

    <RouterProvider router={router}/>
  
);
