import { ProductDTO } from "../api/productsApi";

export interface Product extends Omit<ProductDTO, "createdAt"> {
  createdAt: Date;
}

// class Product {
//   constructor(dto?: ProductDTO) {
//     Object.assign(this, dto, {
//       createdAt: new Date(dto.createdAt);
//     })
//   }

//   copyFrom(source: Product) {
//     Object.assign(this, source)
//   }
// }

// const product = new Product(dto);

// const str = JSON.stringify(product)

// const pro = new Product()
// pro.copyFrom(JSON.parse(str))

// export interface Product {
//   id: number;
//   sku: string;
//   title: string;
//   desc: string;
//   image: string;
//   stocked: boolean;
//   basePrice: number;
//   price: number;
//   createdAt: Date;
// }
