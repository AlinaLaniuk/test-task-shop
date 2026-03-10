"use client";

import { useRouter } from "next/navigation"; 
import LoginIcon from "../icons/LoginIcon";
import MailIcon from "../icons/MailIcon";
import PhoneIcon from "../icons/PhoneIcon";
import PointerIcon from "../icons/PointerIcon";
import styles from "./Header.module.scss";

export default function Header() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/login");
  };

  return (
    <header className={styles.header}>
      <div className={styles.topbar}>
        <div className="container">
          <ul className={styles.contactsContainer}>
            <li className={styles.topbarItem}>
              <PhoneIcon />
              +021-95-51-84
            </li>
            <li className={styles.topbarItem}>
              <MailIcon />
              shop@abelohost.com
            </li>
            <li className={styles.topbarItem}>
              <PointerIcon />
              1734 Stonecoal Road
            </li>
          </ul>
          <button onClick={handleClick} className={styles.topbarItem}>
            <LoginIcon />
            Login
          </button>
        </div>
      </div>
      <div className={styles.main}>
        <div className="container">
          <h1>
            Abelohost Shop <span className={styles.dot}>.</span>
          </h1>
          <div className={styles.banner}></div>
        </div>
      </div>
      <div className={styles.nav}>
        <div className="container">
          <nav>
            <ul className={styles.menu}>
              <li>Home</li>
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
    </header>
  );
}
