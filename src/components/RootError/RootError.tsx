import React from "react";
import styles from "./RootError.module.scss";

interface RootErrorProps {
  message: string;
  onRetry?: () => void;
}

const RootError: React.FC<RootErrorProps> = ({ message, onRetry }) => {
  return (
    <div className={styles.rootError}>
      <div className={styles.content}>
        <h2>Oops! Something went wrong</h2>
        <p>{message}</p>
        {onRetry && (
          <button className={styles.retryButton} onClick={onRetry}>
            Retry
          </button>
        )}
      </div>
    </div>
  );
};

export default RootError;
