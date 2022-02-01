/* eslint-disable import/no-cycle */
import rootUrl from './rootUrl';
import useFetch from '../hooks/useFetch';
import Product from '../domain/product';
import useUpdate from '../hooks/useUpdate';

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

const productMapper = (dto?: ProductDTO): Product | undefined => {
  if (!dto) return undefined;
  return {
    ...dto,
  };
};

export const useGetProduct = (productId: string) => {
  const { loading, error, data } = useFetch<ProductDTO>(
    `${rootUrl}${productUrl}/${productId}`,
  );
  return {
    loading,
    error,
    product: productMapper(data),
  };
};

// TODO: add possibility to pass id's?
export const useGetProducts = () => {
  const {
    loading, error, data, refetch, fetchDataNextPage,
  } = useFetch<ProductsDTO>(`${rootUrl}${productUrl}`);
  return {
    loading,
    error,
    products: data?.selectedProducts.map(
      (product: ProductDTO) => productMapper(product)!,
    ),
    refetch,
    fetchDataNextPage,
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
