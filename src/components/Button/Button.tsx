import { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./Button.module.scss";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: "s" | "m" | "l";
  children: ReactNode;
};

export default function Button({ size = "m", children, className = "", ...props }: ButtonProps) {
  return (
    <button
      className={`${styles.button} ${styles[`size${size.toUpperCase()}`]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
