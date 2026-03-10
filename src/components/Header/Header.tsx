"use client";

import { useRouter } from "next/navigation";
import LoginIcon from "../icons/LoginIcon";
import MailIcon from "../icons/MailIcon";
import PhoneIcon from "../icons/PhoneIcon";
import PointerIcon from "../icons/PointerIcon";
import { useUserStore } from "../../store/useStore";
import styles from "./Header.module.scss";
import { LoginResponse } from "@/types/auth.types";

export default function Header() {
  const user = useUserStore((state) => state.user);
  const router = useRouter();

  const onClick = () => {
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
          {user ? <User user={user} /> : <LoginButton onClick={onClick} />}
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

function User({ user }: { user: LoginResponse }) {
  return (
    <div className={styles.topbarItem}>
      <LoginIcon />
      {user?.firstName} {user?.lastName}
    </div>
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
