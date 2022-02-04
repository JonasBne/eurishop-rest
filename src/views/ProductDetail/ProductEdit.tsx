import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';
import {
  useGetProduct,
  ProductDTO,
  GetProduct,
  useMutationProductPut,
} from '../../api/productsApi';
import LoadingSpinner from '../../components/LoadingSpinner';
import ErrorModal from '../../components/ErrorModal/ErrorModal';
import ProductForm, { ProductFormValues } from './ProductForm';
import toasts from '../../components/toasts';
import rootUrl from '../../api/rootUrl';

function ProductEdit() {
  const { succesToast, failToast } = toasts();
  const navigate = useNavigate();
  const { productId } = useParams<string>();
  const { isLoading, error, product } = useGetProduct(productId!) as GetProduct;
  // const { error: putError, data: puttedData, put } = useUpdate<ProductDTO>();
  const { mutate, error: putError, data: puttedData } = useMutationProductPut();

  const gridTemplateAreas = `
  "title sku"
  "basePrice price"
  "stocked image"
  "desc desc"
  `;

  useEffect(() => {
    if (putError) {
      failToast(putError);
    }
    if (puttedData) {
      succesToast(`Item with id ${puttedData.id} updated!`);
      navigate('/products/admin');
    }
  }, [putError, puttedData]);

  const handleSubmit = (formValues: ProductFormValues) => {
    const item: ProductDTO = {
      ...formValues,
      id: +formValues.id,
      basePrice: +formValues.basePrice,
      price: +formValues.price,
    };

    const url = `${rootUrl}api/products/${item.id}`;

    mutate({ variables: url, item });
  };

  return (
    <>
      {isLoading && <LoadingSpinner />}
      {error && <ErrorModal name={error.name} message={error.message} />}
      {product && (
        <ProductForm
          title="EDIT PRODUCT"
          gridTemplateAreas={gridTemplateAreas}
          initialProduct={product}
          onSubmit={handleSubmit}
          mt="2rem"
          mx="auto"
        />
      )}
    </>
  );
}

export default ProductEdit;
