import { getProducts } from "@/services/products.api.ts";
import { Product } from "@/types/product.types";
import { useEffect, useState } from "react";

export default function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    getProducts().then((data) => setProducts(data));
    console.log(products);
  }, []);

  return { products };
}
