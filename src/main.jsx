import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './components/ErrorPage/ErrorPage';
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import Donations from './components/Donations/Donations';
import Details from './components/Details/Details';
import Statistics from './components/Statistics/Statistics';



const router = createBrowserRouter([

  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [

      {
        path: "/",
        loader: () => fetch('/donations.json'),
        element: <Home></Home>
      },
      {
        path: "/Donations",
        loader: () => fetch('/donations.json'),
        element: <Donations></Donations>
      },
      {
        path: "/Details/:categoryId",
        loader: () => fetch('/donations.json'),
        element: <Details></Details>
      },
      {
        path: "/Statistics",
        element: <Statistics></Statistics>
      }




    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <RouterProvider router={router} />


  </React.StrictMode>
)

