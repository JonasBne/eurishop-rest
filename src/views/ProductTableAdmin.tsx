import React, { useContext } from "react";
import Navbar from "../components/general/Navbar";
import ProductTable from "../components/products/ProductTable";
import ProductsContext, {
  ProductsContextProps,
} from "../store/ProductsContext";

function ProductTableAdmin() {
  const { error } = useContext<ProductsContextProps>(ProductsContext);
  return (
    <>
      {!error && <Navbar />}
      <ProductTable />
    </>
  );
}

export default ProductTableAdmin;
