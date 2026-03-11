import { useRequest } from "@/hooks/useRequest";
import { getProducts } from "@/services/products.api.ts";

export default function useProducts() {
  return useRequest(async () => {
    const result = await getProducts();

    if (result.data) return result.data;

    throw new Error(result.error);
  });
}
