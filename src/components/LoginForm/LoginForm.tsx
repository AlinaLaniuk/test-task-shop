"use client";

import useAuth from "./useAuth";
import styles from "./LoginForm.module.scss";

export default function LoginFrom() {
  const { username, updateUsername, password, updatePassword, onSubmit, authError } = useAuth();
  return (
    <form onSubmit={onSubmit} className={styles.form} noValidate>
      <input
        className={`${styles.input} ${styles.formItem} ${username.isError && styles.inputError}`}
        type="text"
        name="username"
        placeholder="Username"
        value={username.value}
        autoComplete="username"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          updateUsername(event.target.value)
        }
      />
      <div className={styles.error}>
        {username.isError && <span>The form field must contain at least 3 characters.</span>}
      </div>
      <input
        className={`${styles.input} ${styles.formItem} ${password.isError && styles.inputError}`}
        type="password"
        name="password"
        placeholder="Password"
        value={password.value}
        autoComplete="current-password"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          updatePassword(event.target.value)
        }
      />
      <div className={styles.error}>
        {password.isError && <span>The form field must contain at least 3 characters.</span>}
      </div>
      <button
        disabled={username.isError || password.isError}
        type="submit"
        className={`${styles.button} ${styles.formItem} ${username.isError || password.isError ? styles.disabled : ""}`}
      >
        Login
      </button>
      <div className={styles.error}>
        <span>{authError}</span>
      </div>
    </form>
  );
}
