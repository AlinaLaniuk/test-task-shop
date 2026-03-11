"use client";

import React, { useState } from "react";
import styles from "./Burger.module.scss";

interface BurgerProps {
  onClick?: () => void;
}

const Burger: React.FC<BurgerProps> = ({ onClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleBurger = () => {
    setIsOpen((prev) => !prev);
    if (onClick) onClick();
  };

  return (
    <button
      className={`${styles.burger} ${isOpen ? styles.open : ""}`}
      onClick={toggleBurger}
      aria-label="Toggle menu"
    >
      <span />
      <span />
      <span />
    </button>
  );
};

export default Burger;
