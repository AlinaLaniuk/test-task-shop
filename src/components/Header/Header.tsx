"use client";

import { useRouter } from "next/navigation";
import LoginIcon from "../lib/Icons/LoginIcon";
import MailIcon from "../lib/Icons/MailIcon";
import PhoneIcon from "../lib/Icons/PhoneIcon";
import PointerIcon from "../lib/Icons/PointerIcon";
import { useUserStore } from "../../store/useStore";
import Link from "next/link";
import styles from "./Header.module.scss";

export default function Header() {
  const user = useUserStore((state) => state.user);
  const logout = useUserStore((state) => state.logout);
  const router = useRouter();

  const handleLogin = () => {
    router.push("/login");
  };

  const handleLogout = () => {
    logout();
    console.log("user", user);
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
          {user ? (
            <User onClick={handleLogout} name={`${user.firstName} ${user.lastName}`} />
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
