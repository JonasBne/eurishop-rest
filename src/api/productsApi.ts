import rootUrl from "./rootUrl";
import useFetch from "../hooks/useFetch";

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

const url = "api/products";

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

export const useGetProducts = () => {
  const { loading, error, data } = useFetch<ProductsDTO>(`${rootUrl}${url}`);
  return {
    loading,
    error,
    products: data?.selectedProducts,
  };
};

/*

const url = 'api/products'

function productMapper(dto: ProductDto): Product {
  return {
    ...dto
    createdAt: parse(dto.createdAt),
  }
}

function updateGetProduct(id: string) {

}


function useGetProduct(id: string) {

}

function useGetProducts() {
  const { loading, error, data } = useFetch(`${rootUrl}{url}`);
  return {
    loading,
    error,
    data: data.selectedProducts.map(x => productMapper(x)),
  };
}
*/
