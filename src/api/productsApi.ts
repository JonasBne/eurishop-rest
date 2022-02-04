/* eslint-disable max-len */
/* eslint-disable import/no-cycle */
import {
  useMutation, useQueries, useQuery, useQueryClient,
} from 'react-query';
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

export interface PutProductVariables {
  productId: string | number;
  product: ProductDTO;
}

export const productUrl = 'api/products';

export const productKeys = {
  all: ['products'],
  paged: (page: number) => [...productKeys.all, { page }],
  detail: (productId: string | number) => [...productKeys.all, { productId }],
};

const productMapper = (dto?: ProductDTO): Product | undefined => {
  if (!dto) return undefined;
  return {
    ...dto,
  };
};

const postProduct = async (data: any) => api.post(`${rootUrl}${productUrl}`, data);

const putProduct = async (productId: string | number, data: any) => api.put(`${rootUrl}${productUrl}/${productId}`, data);

export const useGetProduct = (productId: string) => {
  const url = `${rootUrl}${productUrl}/${productId}`;

  const {
    isLoading, isError, data, error,
  } = useQuery<ProductDTO>([productKeys.detail(productId), productId], () => api.get(url), { keepPreviousData: true });

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
  } = useQuery<ProductsDTO>([productKeys.paged(page), page], () => api.get(url));

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

export const useMutationProductPost = () => {
  const queryClient = useQueryClient();
  return useMutation<ProductDTO, Error, ProductDTO>((product) => postProduct(product), {
    onSuccess: () => {
      queryClient.invalidateQueries(productKeys.all);
    },
  });
};

export const useMutationProductPut = () => {
  const queryClient = useQueryClient();
  return useMutation<ProductDTO, Error, PutProductVariables>(({ productId, product }) => putProduct(productId, product), {
    onSuccess: () => {
      queryClient.invalidateQueries(productKeys.all);
    },
  });
};

// TODO: finalize also put, remove requests

// export const useMutationProductRemove = () => {
//   const queryClient = useQueryClient();
//   return useMutation(api.remove, {
//     onSuccess: () => {
//       queryClient.invalidateQueries(productKeys.all);
//     },
//   });
// };
