import React, { useContext } from "react";
import ProductsContext, {
  ProductsContextProps,
} from "../../store/ProductsContext";
import Product from "../../types/Product";

function Table() {
  const { loading, error, products } =
    useContext<ProductsContextProps>(ProductsContext);

  return (
    <>
      {loading && <div>Loading...</div>}
      {!loading && products.length <= 0 && <div>Loading...</div>}
      {error && <div>Error...</div>}
      {!loading && !error && (
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Image</th>
              <th>Stock</th>
              <th>Baseprice</th>
              <th>price</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product: Product) => {
              return (
                <tr key={product.id}>
                  <td>{product.title}</td>
                  <td>{product.desc}</td>
                  <td>{product.image}</td>
                  <td>{product.stocked}</td>
                  <td>{product.basePrice}</td>
                  <td>{product.price}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </>
  );
}

export default Table;
