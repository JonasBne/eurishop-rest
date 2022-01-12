import React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import ProductDetail from "./routes/ProductDetail";
import ProductOverview from "./routes/ProductOverview";
import ProductTableAdmin from "./routes/ProductTableAdmin";

const container = document.getElementById("app");
// @ts-ignore
const root = ReactDOM.createRoot(container);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="*" element={<p>There is nothing here!</p>} />
      <Route path="/" element={<App />} />
      <Route path="home" element={<ProductOverview />} />
      <Route path="products" element={<ProductOverview />} />
      <Route path="products/:productId" element={<ProductDetail />} />
      <Route path="products/admin" element={<ProductTableAdmin />} />
    </Routes>
  </BrowserRouter>
);
