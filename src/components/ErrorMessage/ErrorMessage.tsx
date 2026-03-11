import React from "react";
import styles from "./ErrorMessage.module.scss";

interface ErrorMessageProps {
  message: string;
  className?: string;
}

export default function ErrorMessage({ message, className }: ErrorMessageProps) {
  return (
    <div className={`${styles.errorMessage} ${className || ""}`}>
      <p>{message}</p>
    </div>
  );
}
