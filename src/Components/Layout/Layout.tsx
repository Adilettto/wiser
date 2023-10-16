import React, { ReactNode, useEffect, useRef, useState } from "react";
import Sidebar from "Components/Sidebar/Sidebar";
import styles from "./Layout.module.scss";

type LayoutProps = {
  children: ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [height, setHeight] = useState<number>();

  useEffect(() => {
    if (contentRef.current) {
      const contentHeight = contentRef.current?.clientHeight;
      const sidebar: HTMLElement | null = document.querySelector(
        `.${styles.layout__sidebar}`
      );
      if (sidebar) {
        console.log(sidebar.clientHeight, contentHeight);
        if (1000 < contentHeight) {
          setHeight(contentHeight);
          sidebar.style.height = `${contentHeight}px`;
        }
      }
    }
  }, [contentRef]);
  return (
    <div className={styles.layout}>
      <div className={styles.layout__sidebar}>
        <Sidebar height={height} />
      </div>

      <div className={styles.layout__background}></div>
      <div ref={contentRef} className={styles.layout__content}>
        {children}
      </div>
    </div>
  );
};
