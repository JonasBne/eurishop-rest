/* eslint-disable import/no-cycle */
import rootUrl from './rootUrl';
import useFetch from '../hooks/useFetch';
import useUpdate from '../hooks/useUpdate';
import Product from '../domain/product';
import useUpdate2 from '../hooks/useUpdate2';

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

const url = 'api/products';

const productMapper = (dto?: ProductDTO): Product | undefined => {
  if (!dto) return undefined;
  return {
    ...dto,
  };
};

export const useGetProduct = (productId: string) => {
  const { loading, error, data } = useFetch<ProductDTO>(
    `${rootUrl}${url}/${productId}`,
  );
  return {
    loading,
    error,
    product: productMapper(data),
  };
};

export const useGetProducts = () => {
  const {
    loading, error, data, refetch, fetchDataNextPage,
  } = useFetch<ProductsDTO>(`${rootUrl}${url}`);
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
    loading, error, data, update,
  } = useUpdate<ProductDTO>(
    `${rootUrl}${url}`,
  );
  return {
    loading,
    error,
    data,
    update,
  };
};

export const useUpdateProduct2 = () => {
  const {
    loading, error, post, put, remove, data,
  } = useUpdate2<ProductDTO>();
  return {
    loading,
    error,
    post,
    put,
    remove,
    data,
  };
};
