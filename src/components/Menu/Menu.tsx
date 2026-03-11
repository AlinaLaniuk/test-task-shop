import Link from "next/link";
import Burger from "../Burger/Burger";
import styles from "./Menu.module.scss";
import { useState } from "react";

export default function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
    <div className={styles.burgerContainer}>
      <Burger onClick={() => setMenuOpen(!menuOpen)} />
    </div>
      <div className={styles.nav}>
        <div className="container flex flexBetween">
          <nav>
            <ul className={styles.menu}>
              <Link href="/">Home</Link>
              <li>Hot Deals</li>
              <li>Categories</li>
              <li>Laptops</li>
              <li>Smartphones</li>
              <li>Cameras</li>
              <li>Accessories</li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
