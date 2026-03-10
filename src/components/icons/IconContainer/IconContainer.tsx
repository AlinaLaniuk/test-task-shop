import styles from "./IconContainer.module.scss";

interface IconContainerProps {
  size?: "s" | "m" | "l";
  children: React.ReactNode;
}

export default function IconContainer({ size = "s", children }: IconContainerProps) {
  return (
    <div className={`${styles.iconContainer} ${styles[`size${size.toUpperCase()}`]}`}>
      {children}
    </div>
  );
}
