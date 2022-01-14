// import { parser } from 'date-fns';

interface ProductDTO {
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

/*
function productMapper(dto: ProductDto): Product {
  return {
    ...dto
    createdAt: parse(dto.createdAt),
  }
}

function useGetProducts(url: string) {
  const { loading, error, data } = useFetch(url);
  return {
    loading,
    error,
    data: data.selectedProducts.map(x => productMapper(x)),
  };
}
*/
