import React, { useContext } from "react";
import {
  faPen,
  faTrash,
  faSortDown,
  faSortUp,
  faSort,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import ProductsContext, {
  ProductsContextProps,
} from "../../store/ProductsContext";
import Product from "../../types/Product";
import LoadingSpinner from "../general/LoadingSpinner";
import PageNotFound from "../general/PageNotFound";
import useSortTableData from "../../hooks/useSortTableData";
import {
  Icon,
  IconsContainer,
  SortIcon,
  TableContainer,
  TableData,
  TableHead,
  TableRowHeader,
} from "./ProductTable.styles";

function ProductTable() {
  const navigate = useNavigate();

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
                  <IconsContainer p="1.5rem">
                    <Icon icon={faPen} px="0.5rem" />
                    <Icon icon={faTrash} px="0.5rem" />
                    <Icon
                      icon={faEye}
                      px="0.5rem"
                      onClick={() => navigate(`/products/${product.id}`)}
                    />
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
