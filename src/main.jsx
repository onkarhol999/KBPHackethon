import React from "react";
import ReactDOM from "react-dom";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from "./Layout";
import Home from './components/HomePage/HomePage'
import DonationForm from './components/DonetForm/DonetForm'
import DileveryBoy from './components/DileveryBoy/DileveryBoyLogin'
import AdminDashboard from './components/AdminDashBoard/AdminDashboard'
import DileveryBoard from './components/DeliveryDashBoard/DeliveryDashBoard'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
    <Route path="" element={<Home/>}/>
    <Route path="Home" element={<Home/>}/>
    <Route path="donation" element={<DonationForm/>}/>
    <Route path="dileveryBoy" element={<DileveryBoy/>}/>
    <Route path="adminBoard" element={<AdminDashboard/>}/>
    <Route path="dileveryBoard" element={<DileveryBoard/>}/>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router}/>
  </React.StrictMode>
)