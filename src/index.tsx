import React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import ProductDetail from "./views/ProductDetail";
import ProductOverview from "./views/ProductOverview";
import ProductTableAdmin from "./views/ProductTableAdmin";
import ProductsContextProvider from "./store/ProductsContextProvider";

const container = document.getElementById("app");
// @ts-ignore
const root = ReactDOM.createRoot(container);

root.render(
  <ProductsContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ProductsContextProvider>
);
