import LoginForm from "@/components/LoginForm/LoginForm";
import styles from "./Page.module.scss";

export default function LoginPage() {
  return (
    <div className={`container flex flexBetween ${styles.loginPage}`}>
      <span className={styles.formHeader}>Login</span>
      <LoginForm />
    </div>
  );
}
