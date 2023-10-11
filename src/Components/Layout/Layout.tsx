import React, { ReactNode } from "react";
import styles from "./Layout.module.scss";
import Sidebar from "Components/Sidebar/Sidebar";

type LayoutProps = {
  children: ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Sidebar />
      <div className={styles.layout__content}>{children}</div>
    </div>
  );
};
