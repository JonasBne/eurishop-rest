import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import ProductDetail from "./routes/ProductDetail";
import ProductOverview from "./routes/ProductOverview";
import ProductTable from "./routes/ProductTable";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="https://euri-webshop.netlify.app/" element={<App />} />
      <Route
        path="https://euri-webshop.netlify.app/products"
        element={<ProductOverview />}
      />
      <Route
        path="https://euri-webshop.netlify.app/products/:productId"
        element={<ProductDetail />}
      />
      <Route
        path="https://euri-webshop.netlify.app/admin"
        element={<ProductTable />}
      />
    </Routes>
  </BrowserRouter>,
  rootElement
);
