import { AxiosError } from "axios";
import { api } from "./axios";
import { ProductsResponse } from "@/types/product.types";

export const getProducts = async () => {
  try {
    const response = await api.get<ProductsResponse>("/products?limit=12");
    return { data: response.data.products };
  } catch (err) {
    const axiosError = err as AxiosError<{ message: string }>;
    const errorMessage = axiosError.response?.data?.message || "Something went wrong";
    return { error: errorMessage };
  }
};
