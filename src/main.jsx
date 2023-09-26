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
import Card from './components/Card/Card';
import Banner from './components/banner/Banner';
import Donation from './components/Donation/Donation';

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
        path:'/',
        element:<div>
          <Banner></Banner>
          <Outlet></Outlet>
        </div>,
        children:[
          {
            path:'/',
            element:<Cards></Cards>
          }
        ]
      },
    
      {
        path:"/",
        element:<Cards></Cards>,
      
      },
      {
        path:"/cards/:id",
        element:<Card></Card>,
        loader:() => fetch('./infos.json')
      },
      {
        path:'/donation',
        element:<Donation></Donation>
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />

  </React.StrictMode>,
)
