import { Button, ButtonProps } from "antd";
import React from "react";
import styles from "./MainBtn.module.scss";

type MainBtnProps = ButtonProps & {
  text: string;
  onClick?: any;
};

export const MainBtn: React.FC<MainBtnProps> = ({ text, onClick }) => {
  return (
    <Button onClick={onClick} className={styles.authBtn}>
      {text}
    </Button>
  );
};
