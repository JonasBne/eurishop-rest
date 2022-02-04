import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import toasts from '../../components/toasts';
import { ProductDTO } from '../../api/productsApi';
import ProductForm, { ProductFormValues } from './ProductForm';
import rootUrl from '../../api/rootUrl';
import useUpdate from '../../hooks/useUpdate';

function ProductAdd() {
  const { succesToast, failToast } = toasts();
  const navigate = useNavigate();
  const {
    error: postError, data: postedData, post,
  } = useUpdate();

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
      succesToast(`New product with id ${postedData.id} added!`);
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
    post(product, `${rootUrl}api/products`);
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
