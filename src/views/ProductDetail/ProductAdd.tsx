import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import toasts from '../../components/toasts';
import { useUpdateProduct } from '../../api/productsApi';
import ProductForm from './ProductForm';
import { UpdateMethods } from '../../hooks/useUpdate';

function ProductAdd() {
  const { succesToast, failToast } = toasts();
  const navigate = useNavigate();
  const { error: postError, data: postedData, update } = useUpdateProduct();

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

  const handleSubmit = (product: Product) => {
    // const product = {
    //   ...formValues,
    //   basePrice: +formValues.basePrice,
    //   price: +formValues.price,
    // };

    const formattedData = {
      ...data,
      basePrice: +data.basePrice,
      price: +data.price,
    };
    update(UpdateMethods.POST, formattedData, formattedData.id);
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
