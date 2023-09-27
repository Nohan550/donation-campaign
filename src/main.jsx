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

import Statistics from './components/Statistics/Statistics';
import DonationCart from './components/DonationCart/DonationCart';


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
          },
          
          
        ]
      },
    
      
      {
        path:"/cards/:id",
        element:<Card></Card>,
        loader:() => fetch('/infos.json')
      },
      {
        path:'/statistics',
        element:<Statistics></Statistics>
      },
      {
        path:"/donation",
        element:<DonationCart></DonationCart>
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />

  </React.StrictMode>,
)
