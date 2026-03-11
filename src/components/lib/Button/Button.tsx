import styles from "./Button.module.scss";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: "s" | "m" | "l";
  children: React.ReactNode;
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
