// import React, { useContext } from "react";
// import { useParams } from "react-router";
// import Navbar from "../Navigation/Navbar";
// import LoadingSpinner from "../../components/LoadingSpinner";
// import PageNotFound from "../../components/PageNotFound";
// import ProductForm from "../../components/products/ProductForm";
import React from "react";

function ProductDetail() {
  // const { productId } = useParams<string>();
  // TODO: is there a better solution to resolve the error "type Product | undefined is not assignable to type Product"
  // const product = products.find((prod) => prod.id.toString() === productId)!;

  return (
    <div>detail</div>
    // <>
    //   <Navbar />
    //   {loading && !error && <LoadingSpinner />}
    //   {error && <PageNotFound />}
    //   {!loading && !error && (
    //     <div>
    //       <h3>{`Product detail: ${product?.title} (${product?.sku})`}</h3>
    //       <ProductForm product={product} />
    //     </div>
    //   )}
    // </>
  );
}

export default ProductDetail;
