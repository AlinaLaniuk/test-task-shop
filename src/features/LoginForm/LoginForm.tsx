"use client";

import { ChangeEvent } from "react";
import useLogin from "./useLogin";
import Button from "../../components/Button/Button";
import styles from "./LoginForm.module.scss";

export default function LoginFrom() {
  const { username, updateUsername, password, updatePassword, onSubmit, authError } = useLogin();
  return (
    <form onSubmit={onSubmit} className={styles.form} noValidate>
      <input
        className={`${styles.input} ${styles.formItem} ${username.isError && styles.inputError}`}
        type="text"
        name="username"
        placeholder="Username"
        value={username.value}
        autoComplete="username"
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
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
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          updatePassword(event.target.value)
        }
      />
      <div className={styles.error}>
        {password.isError && <span>The form field must contain at least 3 characters.</span>}
      </div>
      <Button
        disabled={username.isError || password.isError}
        type="submit"
        className={`${username.isError || password.isError ? styles.disabled : ""}`}
      >
        Login
      </Button>
      <div className={styles.error}>
        <span>{authError}</span>
      </div>
    </form>
  );
}
