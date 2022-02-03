/* eslint-disable max-len */
/* eslint-disable import/no-cycle */
import { useMemo } from 'react';
import { useQuery } from 'react-query';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import useFetchMultiple from '../hooks/useFetchMultiple';
import rootUrl from './rootUrl';
import Product from '../domain/product';
import useUpdate from '../hooks/useUpdate';
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

// TODO: is this ok? Interface added to type property error to type Error because otherwise TS throws an error that error is of type unknown
export interface GetProduct {
  isLoading: boolean;
  error: Error;
  product: Product;
}

export interface GetProducts {
  isLoading: boolean;
  error: Error;
  products: Product[];
  refetch: () => void;
}

export const productUrl = 'api/products';

// TODO: where to store this?
const fetchData = async (url: string) => {
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
  } = useQuery<ProductDTO>(['product', url], () => fetchData(url), { keepPreviousData: true });

  return {
    isLoading,
    isError,
    error,
    product: productMapper(data),
  };
};

export const useGetProducts = (page = 0) => {
  const url = `${rootUrl}${productUrl}/?page=${page}`;
  const {
    isLoading, data, error, refetch,
  } = useQuery<ProductsDTO>(['productList', url], () => fetchData(url));

  return {
    isLoading,
    error,
    products: data?.selectedProducts.map(
      (product: ProductDTO) => productMapper(product)!,
    ),
    refetch,
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
