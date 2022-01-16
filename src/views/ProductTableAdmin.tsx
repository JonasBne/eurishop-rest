import React, { useContext } from "react";
import Navbar from "../components/general/Navbar";
import ProductTable from "../components/products/ProductTable";
import ProductsContext, {
  ProductsContextProps,
} from "../store/ProductsContext";

function ProductTableAdmin() {
  const { data, error, pending } = useGetProducts("http://domain/products");
  const [sortBy, setSortBy] = useState();

  // const { error } = useContext<ProductsContextProps>(ProductsContext);
  // TODO: load data here and pass it to ProductTable

  const sortedData = sortBy(data, sortBy);

  const handleSort = (expression) => {
    setSortBy(expression);
  };

  return (
    <>
      {loading && !error && <LoadingSpinner />}
      {error && <PageNotFound />}
      {!error && <Navbar />}
      <ProductTable data={sortedData} sortBy={sortBy} onSort={handleSort} />
    </>
  );
}

export default ProductTableAdmin;
