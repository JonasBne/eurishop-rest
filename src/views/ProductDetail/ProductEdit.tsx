import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';
import {
  useGetProduct,
  ProductDTO,
  useUpdateProduct,
} from '../../api/productsApi';
import LoadingSpinner from '../../components/LoadingSpinner';
import ErrorModal from '../../components/ErrorModal/ErrorModal';
import ProductForm, { ProductFormValues } from './ProductForm';
import toasts from '../../components/toasts';

function ProductEdit() {
  const { succesToast, failToast } = toasts();
  const navigate = useNavigate();
  const { productId } = useParams<string>();
  const { loading, error, product } = useGetProduct(productId!);
  const { error: putError, data: puttedData, update } = useUpdateProduct();

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
      succesToast(`Item with id: ${puttedData.id} updated!`);
      navigate('/products/admin');
    }
  }, [putError, puttedData]);

  const handleSubmit = (formValues: ProductFormValues) => {
    console.log(formValues.id);
    const item: ProductDTO = {
      ...formValues,
      id: +formValues.id,
      basePrice: +formValues.basePrice,
      price: +formValues.price,
    };

    update('PUT', item, item.id);
  };

  return (
    <>
      {loading && <LoadingSpinner />}
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
