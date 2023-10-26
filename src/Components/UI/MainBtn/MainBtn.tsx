import { Button } from "antd";
import React from "react";
import styles from "./MainBtn.module.scss";

interface MainBtnProps {
  text: string;
  onClick?: any;
}

export const MainBtn: React.FC<MainBtnProps> = ({ text, onClick }) => {
  return (
    <Button onClick={onClick} className={styles.authBtn}>
      {text}
    </Button>
  );
};

