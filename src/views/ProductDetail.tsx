import React, { useContext } from "react";
import { useParams } from "react-router";
import Navbar from "../components/general/Navbar";
import ProductsContext, {
  ProductsContextProps,
} from "../store/ProductsContext";
import LoadingSpinner from "../components/general/LoadingSpinner";
import PageNotFound from "../components/general/PageNotFound";

function ProductDetail() {
  const { productId } = useParams<string>();
  const { loading, error, products } =
    useContext<ProductsContextProps>(ProductsContext);
  const product = products.find((prod) => prod.id.toString() === productId);

  return (
    <>
      <Navbar />
      {loading && !error && <LoadingSpinner />}
      {error && <PageNotFound />}
      {!loading && !error && (
        <h3>{`Product detail: ${product?.title} (${product?.sku})`}</h3>
      )}
    </>
  );
}

export default ProductDetail;
