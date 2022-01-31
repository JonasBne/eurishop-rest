import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import toasts from '../../components/toasts';
import { ProductDTO, useUpdateProduct2 } from '../../api/productsApi';
import ProductForm, { ProductFormValues } from './ProductForm';

function ProductAdd() {
  const { succesToast, failToast } = toasts();
  const navigate = useNavigate();
  // const { error: postError, data: postedData, update } = useUpdateProduct();
  const {
    error: postError, data: postedData, post,
  } = useUpdateProduct2();

  const gridTemplateAreas = `
  "title sku"
  "basePrice price"
  "stocked image"
  "desc desc"
  `;

  useEffect(() => {
    if (postError) {
      failToast(postError);
    }
    if (postedData) {
      succesToast(`New product with id: ${postedData.id} added!`);
      navigate('/products/admin');
    }
  }, [postError, postedData]);

  const handleSubmit = (formValues: ProductFormValues) => {
    const product: ProductDTO = {
      ...formValues,
      basePrice: +formValues.basePrice,
      price: +formValues.price,
      id: 0,
    };
    post(product);
    // update('POST', product);
  };

  return (
    <ProductForm
      title="NEW PRODUCT"
      gridTemplateAreas={gridTemplateAreas}
      onSubmit={handleSubmit}
      mt="2rem"
      mx="auto"
    />
  );
}

export default ProductAdd;
