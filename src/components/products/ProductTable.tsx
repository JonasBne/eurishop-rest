import React, { useContext } from "react";
import styled from "styled-components";
import { space, SpaceProps, layout, LayoutProps } from "styled-system";
// TODO: error thrown by TS: 'can't resolve @fortawesome/react-fontawesome or it's type declarations' but packages are installed?
// @ts-ignore
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPen,
  faTrash,
  faSortDown,
  faSortUp,
  faSort,
} from "@fortawesome/free-solid-svg-icons";
import ProductsContext, {
  ProductsContextProps,
} from "../../store/ProductsContext";
import Product from "../../types/Product";
import LoadingSpinner from "../general/LoadingSpinner";
import PageNotFound from "../general/PageNotFound";
import useSortTableData from "../../hooks/useSortTableData";

const TableContainer = styled.table<SpaceProps>`
  ${space};
  font-size: 0.9rem;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
`;

const TableRowHeader = styled.tr`
  color: white;
`;

const TableHead = styled.th<SpaceProps | LayoutProps>`
  background-color: #0077b6;
  ${space}
  ${layout}
  &:hover {
    cursor: pointer;
  }
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

const SortIcon = styled(FontAwesomeIcon)<SpaceProps>`
  &:hover {
    cursor: pointer;
  }
  ${space}
`;

function ProductTable() {
  const { loading, error, products } =
    useContext<ProductsContextProps>(ProductsContext);

  const { sortConfig, sortedData, requestedSorting } =
    useSortTableData(products);

  return (
    <>
      {loading && !error && <LoadingSpinner />}
      {error && <PageNotFound />}
      {!loading && !error && (
        <TableContainer m="2rem">
          <thead>
            <TableRowHeader>
              <TableHead onClick={() => requestedSorting("title")} p="1rem">
                Title
                {sortConfig.order === "default" && (
                  <SortIcon icon={faSort} m="auto" pl="0.5rem" />
                )}
                {sortConfig.order === "ascending" && (
                  <SortIcon icon={faSortDown} m="auto" pl="0.5rem" />
                )}
                {sortConfig.order === "descending" && (
                  <SortIcon icon={faSortUp} m="auto" pl="0.5rem" />
                )}
              </TableHead>
              <TableHead
                onClick={() => requestedSorting("desc")}
                p="1rem"
                width="30%"
              >
                Description
                {sortConfig.order === "default" && (
                  <SortIcon icon={faSort} m="auto" pl="0.5rem" />
                )}
                {sortConfig.order === "ascending" && (
                  <SortIcon icon={faSortDown} m="auto" pl="0.5rem" />
                )}
                {sortConfig.order === "descending" && (
                  <SortIcon icon={faSortUp} m="auto" pl="0.5rem" />
                )}
              </TableHead>
              <TableHead>Image</TableHead>
              <TableHead onClick={() => requestedSorting("stocked")} p="1rem">
                Stock
                {sortConfig.order === "default" && (
                  <SortIcon icon={faSort} m="auto" pl="0.5rem" />
                )}
                {sortConfig.order === "ascending" && (
                  <SortIcon icon={faSortDown} m="auto" pl="0.5rem" />
                )}
                {sortConfig.order === "descending" && (
                  <SortIcon icon={faSortUp} m="auto" pl="0.5rem" />
                )}
              </TableHead>
              <TableHead onClick={() => requestedSorting("basePrice")} p="1rem">
                Baseprice
                {sortConfig.order === "default" && (
                  <SortIcon icon={faSort} m="auto" pl="0.5rem" />
                )}
                {sortConfig.order === "ascending" && (
                  <SortIcon icon={faSortDown} m="auto" pl="0.5rem" />
                )}
                {sortConfig.order === "descending" && (
                  <SortIcon icon={faSortUp} m="auto" pl="0.5rem" />
                )}
              </TableHead>
              <TableHead onClick={() => requestedSorting("price")} p="1rem">
                price
                {sortConfig.order === "default" && (
                  <SortIcon icon={faSort} m="auto" pl="0.5rem" />
                )}
                {sortConfig.order === "ascending" && (
                  <SortIcon icon={faSortDown} m="auto" pl="0.5rem" />
                )}
                {sortConfig.order === "descending" && (
                  <SortIcon icon={faSortUp} m="auto" pl="0.5rem" />
                )}
              </TableHead>
              <TableHead p="1rem">Actions</TableHead>
            </TableRowHeader>
          </thead>
          <tbody>
            {sortedData.map((product: Product) => {
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
