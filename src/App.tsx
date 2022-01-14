import React from "react";
import "./App.css";
import Navbar from "./components/general/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="*" element={<p>There is nothing here!</p>} />
        <Route path="/" element={<App />} />
        <Route path="/" element={<ProductOverview />} />
        <Route path="products" element={<ProductOverview />} />
        <Route path="products/:productId" element={<ProductDetail />} />
        <Route path="products/admin" element={<ProductTableAdmin />} />
      </Routes>
    </>
  );
}

export default App;
