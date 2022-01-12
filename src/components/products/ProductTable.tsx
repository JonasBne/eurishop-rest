import React, { useContext } from "react";
import styled from "styled-components";
import { space, SpaceProps } from "styled-system";
import ProductsContext, {
  ProductsContextProps,
} from "../../store/ProductsContext";
import Product from "../../types/Product";
import LoadingSpinner from "../general/LoadingSpinner";

const TableContainer = styled.table<SpaceProps>`
  ${space};
  font-size: 0.9rem;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
`;

function ProductTable() {
  const { loading, error, products } =
    useContext<ProductsContextProps>(ProductsContext);

  return (
    <>
      {loading && <LoadingSpinner />}
      {!loading && products.length <= 0 && <div>Loading...</div>}
      {error && <div>Error...</div>}
      {!loading && !error && (
        <TableContainer m="2rem" p="1rem">
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
                  <td>{product.stocked ? "Available" : "Out of stock"}</td>
                  <td>{product.basePrice}</td>
                  <td>{product.price}</td>
                </tr>
              );
            })}
          </tbody>
        </TableContainer>
      )}
    </>
  );
}

export default ProductTable;
