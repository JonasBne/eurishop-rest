/* eslint-disable import/no-cycle */
import { useMemo } from 'react';
import { useQuery } from 'react-query';
import rootUrl from './rootUrl';
import Product from '../domain/product';
import useUpdate from '../hooks/useUpdate';
import useFetchMultiple from '../hooks/useFetchMultiple';
import RequestError from '../errors/RequestError';

export interface ProductDTO {
  id: number;
  sku: string;
  title: string;
  desc: string;
  image: string;
  stocked: boolean;
  basePrice: number;
  price: number;
}

export interface ProductsDTO {
  total: number;
  page: number;
  pageSize: number;
  selectedProducts: ProductDTO[];
}

export const productUrl = 'api/products';

const get = async (url: string) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new RequestError(response.status);
  }
  return response.json();
};

const productMapper = (dto?: ProductDTO): Product | undefined => {
  if (!dto) return undefined;
  return {
    ...dto,
  };
};

export const useGetProduct = (productId: string) => {
  const url = `${rootUrl}${productUrl}/${productId}`;

  const {
    isLoading, isError, data, error,
  } = useQuery<ProductDTO>(['productList', url], () => get(url));

  return {
    isLoading,
    isError,
    error,
    product: productMapper(data),
  };
};

export const useGetProducts = (page?: number) => {
  const url = page ? (`${rootUrl}${productUrl}/page=${page}`) : (`${rootUrl}${productUrl}`);

  const {
    isLoading, isError, data, error,
  } = useQuery<ProductsDTO>(['productList', url], () => get(url));

  return {
    isLoading,
    isError,
    error,
    products: data?.selectedProducts.map(
      (product: ProductDTO) => productMapper(product)!,
    ),
  };
};

export const useGetMultipleProducts = (productIds: string[] | number[]) => {
  const urls = useMemo(() => productIds.map((productId) => `${rootUrl}${productUrl}/${productId}`), [rootUrl, productUrl, productIds]);

  const {
    loading, error, data,
  } = useFetchMultiple<Product[]>(urls);

  return {
    loading,
    error,
    products: data,
  };
};

export const useUpdateProduct = () => {
  const {
    loading, error, post, put, remove, data,
  } = useUpdate<ProductDTO>();
  return {
    loading,
    error,
    post,
    put,
    remove,
    data,
  };
};
