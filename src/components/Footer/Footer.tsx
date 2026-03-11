import { useUserStore } from "@/store/useStore";
import styles from "./Footer.module.scss";

export default function Footer() {
  const user = useUserStore((state) => state.user);
  const currentYear = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      {user ? `${currentYear} | Logged as ${user?.email}` : currentYear}
    </footer>
  );
}
