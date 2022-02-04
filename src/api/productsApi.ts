/* eslint-disable max-len */
/* eslint-disable import/no-cycle */
import { useMutation, useQueries, useQuery } from 'react-query';
import api from './fetchHelper';
import rootUrl from './rootUrl';
import Product from '../domain/product';

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
  } = useQuery<ProductDTO>(['product', productId], () => api.get(url), { keepPreviousData: true });

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
  } = useQuery<ProductsDTO>(['productList', page], () => api.get(url));

  return {
    isLoading,
    error,
    products: data?.selectedProducts.map(
      (product: ProductDTO) => productMapper(product)!,
    ),
    refetch,
  };
};

export const useGetMultipleProducts = (productIds: string[] | number[], enabled: boolean) => {
  const urls = productIds.map((productId) => `${rootUrl}${productUrl}/${productId}`);

  const productQueries = useQueries(urls.map((url) => ({
    queryKey: ['product', url],
    queryFn: () => api.get(url),
    enabled,
  })));

  const products = productQueries.map((product) => product.data);
  // TODO: find a way to extract error (first one thats thrown)
  return {
    isLoading: !!productQueries.some((query) => query.isLoading),
    isError: !!productQueries.some((query) => query.isError),
    products: productQueries.some((query) => query.isLoading) ? [] : products,
  };
};

// TODO: move to helper file
//
export const useProductMutation = () => {
  // TODO: hier onderscheid mken tussen post en put, patch op basis van of id reeds bestaat
  const post = async (data: any) => fetch(`${rootUrl}${productUrl}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  // TODO: add error handling to post
  //   const response = await fetch(url);
  //   if (!response.ok) {
  //     throw new RequestError(response.status);
  //   }
  //   return response.json();
  // };

  return useMutation(post);
};
