import rootUrl from "./rootUrl";
import useFetch from "../hooks/useFetch";
import useUpdate from "../hooks/useUpdate";

export interface ProductDTO {
  id: number;
  sku: string;
  title: string;
  desc: string;
  image: string;
  stocked: boolean | string;
  basePrice: number;
  price: number;
}

export interface ProductsDTO {
  total: number;
  page: number;
  pageSize: number;
  selectedProducts: ProductDTO[];
}

const url = "api/products";

const productMapper = (dto: ProductDTO) => {
  return {
    ...dto,
    stocked: dto.stocked ? "Yes" : "No",
  };
};

export const useGetProduct = (productId: string) => {
  const { loading, error, data } = useFetch<ProductDTO>(
    `${rootUrl}${url}/${productId}`
  );
  return {
    loading,
    error,
    product: data,
  };
};

// TODO: remove the pagesize later, this is only temporary
export const useGetProducts = () => {
  const { loading, error, data, refetch } = useFetch<ProductsDTO>(
    `${rootUrl}${url}/?pageSize=1000`
  );
  return {
    loading,
    error,
    products: data?.selectedProducts.map((product: ProductDTO) =>
      productMapper(product)
    ),
    refetch,
  };
};

export const useUpdateProduct = () => {
  const { loading, error, data, update, remove } = useUpdate<ProductDTO>(
    `${rootUrl}${url}`
  );
  return {
    loading,
    error,
    data,
    update,
    remove,
  };
};
