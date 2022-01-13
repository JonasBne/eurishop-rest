import React, { useContext, useMemo, useState } from "react";
import styled from "styled-components";
import { space, SpaceProps } from "styled-system";
// TODO: error thrown by TS: 'can't resolve @fortawesome/react-fontawesome or it's type declarations' but packages are installed?
// @ts-ignore
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
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

const TableData = styled.td<SpaceProps>`
  ${space}
`;

const IconsContainer = styled.td<SpaceProps>`
  display: flex;
  justify-content: space-around;
  ${space}
`;

const Icon = styled(FontAwesomeIcon)`
  &:hover {
    cursor: pointer;
  }
`;

interface SortConfig {
  key: string;
  order: string;
}

function ProductTable() {
  const [sortConfig, setSortConfig] = useState<SortConfig | null>(null);

  const { loading, error, products } =
    useContext<ProductsContextProps>(ProductsContext);

  function requestedSorting(key: string) {
    let order = "ascending";
    if (sortConfig?.key === key && sortConfig.order === "ascending") {
      order = "descending";
    }
    setSortConfig({ key, order });
  }

  // TODO: transfer this to a custom hook
  const sortedProducts = [...products];

  useMemo(() => {
    if (sortConfig !== null) {
      sortedProducts.sort((a: any, b: any) => {
        // TODO: find a better alternative to typecast this
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.order === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.order === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }
    return sortedProducts;
  }, [products, sortConfig]);

  // TODO: add an icon which shows the current sorting order
  return (
    <>
      {loading && !error && <LoadingSpinner />}
      {error && <PageNotFound />}
      {!loading && !error && (
        <TableContainer m="2rem">
          <thead>
            <TableRowHeader>
              <TableHead onClick={() => requestedSorting("title")}>
                Title
              </TableHead>
              <TableHead onClick={() => requestedSorting("desc")}>
                Description
              </TableHead>
              <TableHead>Image</TableHead>
              <TableHead onClick={() => requestedSorting("stocked")}>
                Stock
              </TableHead>
              <TableHead onClick={() => requestedSorting("basePrice")}>
                Baseprice
              </TableHead>
              <TableHead onClick={() => requestedSorting("price")}>
                price
              </TableHead>
              <TableHead>Actions</TableHead>
            </TableRowHeader>
          </thead>
          <tbody>
            {sortedProducts.map((product: Product) => {
              return (
                <tr key={product.id}>
                  <TableData p="1rem">{product.title}</TableData>
                  <TableData p="1rem">{product.desc}</TableData>
                  <TableData p="1rem">{product.image}</TableData>
                  <TableData p="1rem">
                    {product.stocked ? "Available" : "Out of stock"}
                  </TableData>
                  <TableData p="1rem">{product.basePrice}</TableData>
                  <TableData p="1rem">{product.price}</TableData>
                  <IconsContainer p="1rem">
                    <Icon icon={faPen} />
                    <Icon icon={faTrash} />
                  </IconsContainer>
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
