import React, { ReactNode, useEffect, useRef } from "react";
import Sidebar from "Components/Sidebar/Sidebar";
import styles from "./Layout.module.scss";

type LayoutProps = {
  children: ReactNode;
  update?: boolean;
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const sidebarRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const sidebarDiv = sidebarRef.current;

    if (sidebarDiv) {
      const updateSidebarHeight = () => {
        const contentHeight = 1000 + window.scrollY;
        if (contentHeight > 1000 && contentHeight < 2000) {
          sidebarDiv.style.height = `${contentHeight}px`;
        }
      };

      updateSidebarHeight();

      window.addEventListener("scroll", updateSidebarHeight);

      return () => {
        window.removeEventListener("scroll", updateSidebarHeight);
      };
    }
  }, [window.scrollY]);
  return (
    <div className={styles.layout}>
      <div className={styles.layout__sidebar} ref={sidebarRef}>
        <Sidebar />
      </div>

      <div className={styles.layout__background}></div>
      <div className={styles.layout__content}>{children}</div>
    </div>
  );
};
