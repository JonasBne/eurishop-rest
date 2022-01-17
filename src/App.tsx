import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/general/Navbar";
import Home from "./views/Home";
import ProductDetail from "./views/ProductDetail";
import ProductList from "./views/ProductList";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="products/admin" element={<ProductList />} />
        <Route path="products/:productId" element={<ProductDetail />} />
      </Routes>
    </>
  );
}

export default App;
