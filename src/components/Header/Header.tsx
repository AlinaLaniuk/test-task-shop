"use client";

import { useRouter } from "next/navigation";
import LoginIcon from "../Icons/LoginIcon";
import MailIcon from "../Icons/MailIcon";
import PhoneIcon from "../Icons/PhoneIcon";
import PointerIcon from "../Icons/PointerIcon";
import Link from "next/link";
import styles from "./Header.module.scss";

interface HeaderProps {
  logout: () => void;
  name?: string;
  isAuth: boolean;
}

export default function Header({ logout, name = "", isAuth }: HeaderProps) {
  const router = useRouter();

  const handleLogin = () => {
    router.push("/login");
  };

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  return (
    <header className={styles.header}>
      <div className={styles.topbar}>
        <div className="container flex flexBetween">
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
          {isAuth ? (
            <User onClick={handleLogout} name={name} />
          ) : (
            <LoginButton onClick={handleLogin} />
          )}
        </div>
      </div>
      <div className={styles.main}>
        <div className="container flex flexBetween">
          <h1>
            <Link href="/">
              Abelohost Shop <span className={styles.dot}>.</span>
            </Link>
          </h1>
          <div className={styles.banner}></div>
        </div>
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
    </header>
  );
}

function User({ name, onClick }: { name: string; onClick: () => void }) {
  return (
    <button onClick={onClick} className={styles.topbarItem}>
      <LoginIcon />
      {name} | Logout
    </button>
  );
}

function LoginButton({ onClick }: { onClick: () => void }) {
  return (
    <button onClick={onClick} className={styles.topbarItem}>
      <LoginIcon />
      Login
    </button>
  );
}
