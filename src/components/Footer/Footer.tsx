import styles from "./Footer.module.scss";

interface FooterProps {
  email?: string;
}

export default function Footer({ email }: FooterProps) {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      {email ? `${currentYear} | Logged as ${email}` : currentYear}
    </footer>
  );
}
