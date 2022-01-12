import React, { useContext } from "react";
import ProductsContext, {
  ProductsContextProps,
} from "../../store/ProductsContext";

function Table() {
  const { loading, error, products } =
    useContext<ProductsContextProps>(ProductsContext);

  return (
    <>
      {loading && <div>Loading...</div>}
      {!loading && products.length <= 0 && <div>Loading...</div>}
      {error && <div>Error...</div>}
      {!loading && !error && <div>Success...</div>}
    </>
  );
}

export default Table;
