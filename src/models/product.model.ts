import { ProductBrand, ProductType } from ".";

export interface Product {
  id: number;
  name: string;
  description: string;
  pictureUrl: string;
  quantityInStock: number;
  price: number;
  productType: ProductType;
  productBrand: ProductBrand;
}