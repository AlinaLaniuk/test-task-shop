import styles from "./Card.module.scss";

export default function Card() {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}></div>
      <div className={styles.name}></div>
      <div className={styles.category}></div>
      <div className={styles.price}></div>
      <button className={styles.button}>Add to cart</button>
    </div>
  );
}
