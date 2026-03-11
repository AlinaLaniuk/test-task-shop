"use client";

import { Product } from "@/types/product.types";
import Card from "../ProductCard/ProductCard";
import useProducts from "./useProducts";
import { useUserStore } from "../../store/useStore";
import styles from "./Products.module.scss";

export default function Products() {
  const { products } = useProducts();
  const user = useUserStore((state) => state.user);
  return (
    <div className="container">
      <div className={styles.productsContainer}>
        {products.map((product: Product) => (
          <Card
            key={product.id}
            imgSrc={product.images[0]}
            title={product.title}
            category={product.category}
            price={product.price}
            isButtonVisible={Boolean(user)}
          />
        ))}
      </div>
    </div>
  );
}
