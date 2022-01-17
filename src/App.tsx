import React from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import Navbar from "./views/Navigation/Navbar";
import Home from "./views/Home";
import ProductDetail from "./views/ProductDetail";
import ProductList from "./views/ProductList";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="products/admin" element={<ProductList />} />
        <Route path="products/:productId" element={<ProductDetail />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
