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

const useGetProducts = () => {
  const { loading, error, data } = useFetch<ProductsDTO>(`${rootUrl}${url}`);
  return {
    loading,
    error,
    data: data?.selectedProducts,
  };
};

export default useGetProducts;

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
