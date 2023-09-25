import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Navbar from './components/navbar/Navbar';
import ErrorPage from './components/Error/ErrorPage';

import Cards from './components/Cards/Cards';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>
          <Navbar></Navbar>
          <Outlet></Outlet>
    </div>,
    
    errorElement:<ErrorPage></ErrorPage>,
    children:[
    
      {
        path:"/",
        element:<Cards></Cards>,
        // loader:fetch('../public/infos.json')
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />

  </React.StrictMode>,
)
