import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root.jsx';
import Home from './Components/Home/Home.jsx';
import Login from './Components/Authentication/Login.jsx';
import Register from './Components/Authentication/Register.jsx';
import AuthProvider from '../AuthProvider/AuthProvider.jsx';
import CheckOut from './Components/CheckOut/CheckOut.jsx';
import CheckOutList from './Components/CheckOut/CheckOutList.jsx';
import PrivetRoute from './Components/PrivetRoute/PrivetRoute.jsx';
import EditeList from './Components/CheckOut/EditeList.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/check_out/:id",
        element: <PrivetRoute><CheckOut></CheckOut></PrivetRoute>,
        loader:({params})=>fetch(`http://localhost:3000/services/${params.id}`)
      },
      {
        path: "/check_out_list",
        element: <PrivetRoute><CheckOutList></CheckOutList></PrivetRoute>,
        
      },
      {
        path: "/check_out_list/edit/:id",
        element: <PrivetRoute><EditeList></EditeList></PrivetRoute>,
        loader:({params})=>fetch(`http://localhost:3000/check_out/${params.id}`)
        
      },

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>

     <RouterProvider router={router} />
  
    </AuthProvider>
  </React.StrictMode>,
)
