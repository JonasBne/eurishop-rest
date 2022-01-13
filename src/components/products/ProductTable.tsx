import React, { useContext } from "react";
import styled from "styled-components";
import { space, SpaceProps } from "styled-system";
import ProductsContext, {
  ProductsContextProps,
} from "../../store/ProductsContext";
import Product from "../../types/Product";
import LoadingSpinner from "../general/LoadingSpinner";
import PageNotFound from "../general/PageNotFound";

const TableContainer = styled.table<SpaceProps>`
  ${space};
  font-size: 0.9rem;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
`;

const TableRowHeader = styled.tr`
  color: white;
`;

const TableHead = styled.th`
  background-color: #0077b6;
  padding: 1rem;
`;

function ProductTable() {
  const { loading, error, products } =
    useContext<ProductsContextProps>(ProductsContext);

  return (
    <>
      {loading && !error && <LoadingSpinner />}
      {error && <PageNotFound />}
      {!loading && !error && (
        <TableContainer m="2rem">
          <thead>
            <TableRowHeader>
              <TableHead>Title</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Image</TableHead>
              <TableHead>Stock</TableHead>
              <TableHead>Baseprice</TableHead>
              <TableHead>price</TableHead>
              <TableHead>Actions</TableHead>
            </TableRowHeader>
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
