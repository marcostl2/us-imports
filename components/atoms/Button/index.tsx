import React, { FC } from "react";

import styles from "./Button.module.css";

interface Props {
  text: string;
  size: string;
}

const Button: FC<Props> = ({ text, size }) => {
  function getSize(size: string) {
    switch (size) {
      case "medium":
        return "w-48 h-12 text-lg font-medium";
      case "large":
        return "w-96 h-16 font-bold text-2xl";
    }
  }

  return (
    <button
      className={`rounded bg-primary text-white ${getSize(size)} rounded ${
        styles.btnShadow
      }`}
    >
      {text}
    </button>
  );
};

export default Button;
