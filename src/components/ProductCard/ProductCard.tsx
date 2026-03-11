import Image from "next/image";
import styles from "./ProductCard.module.scss";
import Button from "../lib/Button/Button";

interface ProductCardProps {
  imgSrc: string;
  title: string;
  category: string;
  price: number;
  isButtonVisible?: boolean;
}

export default function ProductCard({
  imgSrc,
  title,
  category,
  price,
  isButtonVisible = true,
}: ProductCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Image fill style={{ objectFit: "cover" }} src={imgSrc} alt={title} />
      </div>
      <div className={styles.title}>{title}</div>
      <div className={styles.category}>{category.toUpperCase()}</div>
      <div className={styles.price}>${price}</div>
      {isButtonVisible && <Button size="s">Add to cart</Button>}
    </div>
  );
}
