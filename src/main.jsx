import React from "react";
import ReactDOM from "react-dom";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from "./Layout";
import Home from './components/HomePage/HomePage'
import DonationForm from './components/DonetForm/DonetForm'
import DileveryBoy from './components/DileveryBoy/DileveryBoyLogin'
import AdminDashboard from './components/AdminDashBoard/AdminDashboard'
import DileveryBoard from './components/DeliveryDashBoard/DeliveryDashBoard'
import Shooping from './components/ShoppingCategory/ShoppingCategory'
import Decorative from './components/ShoppingPages/Decorative'
import EarthenPots from './components/ShoppingPages/EarthenPots'
import Edible from './components/ShoppingPages/Edible'
import Fashion from './components/ShoppingPages/Fashion'
import WhatWeDo from './components/WhatWeDo/WhatWeDo'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
    <Route path="" element={<Home/>}/>
    <Route path="Home" element={<Home/>}/>
    <Route path="donation" element={<DonationForm/>}/>
    <Route path="dileveryBoy" element={<DileveryBoy/>}/>
    <Route path="adminBoard" element={<AdminDashboard/>}/>
    <Route path="dileveryBoard" element={<DileveryBoard/>}/>
    <Route path="shooping" element={<Shooping/>}/>
    <Route path="decorative" element={<Decorative/>}/>
    <Route path="earthenPots" element={<EarthenPots/>}/>
    <Route path="edible" element={<Edible/>}/>
    <Route path="fashion" element={<Fashion/>}/>
    <Route path="whatWeDo" element={<WhatWeDo/>}/>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router}/>
  </React.StrictMode>
)