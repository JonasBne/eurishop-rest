import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home">
          <div>Homepage goes here</div>
        </Route>
        <Route path="/products">
          <div>Product overview goes here</div>
        </Route>
        <Route path="/products/productId">
          <div>Product detail goes here</div>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
