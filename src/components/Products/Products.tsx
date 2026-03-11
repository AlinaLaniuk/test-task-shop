"use client";

import { Product } from "@/types/product.types";
import Card from "../ProductCard/ProductCard";
import useProducts from "./useProducts";
import { useUserStore } from "../../store/useStore";
import styles from "./Products.module.scss";
import Loader from "../lib/Loader/Loader";

export default function Products() {
  const { data, loading, error } = useProducts();
  const user = useUserStore((state) => state.user);

  if (loading)
    return (
      <div className="container flex flexCenter">
        <Loader />
      </div>
    );

  return (
    <div className="container flex flexBetween">
      <div className={styles.productsContainer}>
        {data?.map((product: Product) => (
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
