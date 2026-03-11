"use client";

import { Product } from "@/types/product.types";
import Card from "../../components/ProductCard/ProductCard";
import useProducts from "./useProducts";
import { useUserStore } from "../../store/useUserStore";
import styles from "./Products.module.scss";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "@/components/ErrorMessage/ErrorMessage";

export default function Products() {
  const { data, loading, error } = useProducts();
  const user = useUserStore((state) => state.user);

  if (loading)
    return (
      <div className="container flex flexCenter">
        <Loader />
      </div>
    );

  if (error)
    return (
      <div className="container flex flexCenter">
        <ErrorMessage message={error} />
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
