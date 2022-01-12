import React from "react";
import * as ReactDOM from "react-dom";
// import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import ProductDetail from "./routes/ProductDetail";
import ProductOverview from "./routes/ProductOverview";
import ProductTable from "./routes/ProductTable";

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
      <Route path="products/admin" element={<ProductTable />} />
    </Routes>
  </BrowserRouter>
);

// const rootElement = document.getElementById("root");
// render(
//   <BrowserRouter>
//     <Routes>
//       <Route path="*" element={<p>There is nothing here!</p>} />
//       <Route path="/" element={<App />} />
//       <Route path="home" element={<ProductOverview />} />
//       <Route path="products" element={<ProductOverview />} />
//       <Route path="products/:productId" element={<ProductDetail />} />
//       <Route path="products/admin" element={<ProductTable />} />
//     </Routes>
//   </BrowserRouter>,
//   rootElement
// );
