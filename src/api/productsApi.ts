/* eslint-disable no-useless-return */
import rootUrl from "./rootUrl";
import useFetch from "../hooks/useFetch";

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

export enum UpdateProductDTOMethods {
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
}

const url = "api/products";

const productMapper = (dto: ProductDTO) => {
  return {
    ...dto,
    stocked: dto.stocked ? "Yes" : "No",
  };
};

export const mapProductUpdateMethodsToUrls = (
  method: UpdateProductDTOMethods,
  id: number | string = ""
  // eslint-disable-next-line consistent-return
) => {
  switch (method) {
    case UpdateProductDTOMethods.POST:
      return "https://euricom-test-api.herokuapp.com/api/products";
    case UpdateProductDTOMethods.PUT:
      return `https://euricom-test-api.herokuapp.com/api/products/${id.toString()}`;
    case UpdateProductDTOMethods.DELETE:
      return `https://euricom-test-api.herokuapp.com/api/products/${id.toString()}`;
    default:
      return "https://euricom-test-api.herokuapp.com/api/products";
  }
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
  const { loading, error, data } = useFetch<ProductsDTO>(
    `${rootUrl}${url}/?pageSize=1000`
  );
  return {
    loading,
    error,
    products: data?.selectedProducts.map((product: ProductDTO) =>
      productMapper(product)
    ),
  };
};

// export const updateProduct = (productId: string, data: ProductDTO) => {
//   const { loading, error } = usePut<ProductDTO>(
//     `${rootUrl}${url}/${productId}`,
//     data
//   );
//   return {
//     loading,
//     error,
//   };
// };

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
