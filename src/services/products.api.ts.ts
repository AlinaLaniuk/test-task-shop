import { api } from "./axios";
import { ProductsResponse } from "@/types/product.types";

export const getProducts = async () => {
  const response = await api.get<ProductsResponse>("/products?limit=12");
  return response.data.products;
};