import { Button } from "antd";
import React from "react";
import styles from "./MainBtn.module.scss";

interface AuthBtnProps {
  text: string;
  onClick?: () => void;
}

export const AuthBtn: React.FC<AuthBtnProps> = ({ text, onClick }) => {
  return (
    <Button onClick={onClick} className={styles.authBtn}>
      {text}
    </Button>
  );
};

