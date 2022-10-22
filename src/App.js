import React from "react";
import Order from "./pages/Order";
import Products from "./pages/Products";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Reviews from "./pages/Reviews";
import Reservations from "./pages/Reservations";
import {BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
       <Navbar />
       <hr />
      <Sidebar />
      <Routes>
        <Route path="/orders" element={<Order />} />
        <Route path="/products" element={<Products />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/reservations" element={<Reservations />} />
      </Routes>      
    </BrowserRouter>
   
  );

}
export default App;