import React, { useState } from "react";
import {
  Button,
  Checkbox,
  Tabs as AntdTabs,
  TabsProps as AntdTabsProps,
} from "antd";
import styles from "./Tabs.module.scss";

const CheckboxGroup = Checkbox.Group;

const OperationsSlot: Record<PositionType, React.ReactNode> = {
  left: <Button className="tabs-extra-demo-button">Left Extra Action</Button>,
  right: <Button>Right Extra Action</Button>,
};

type PositionType = "left" | "right";

const items = new Array(3).fill(null).map((_, i) => {
  const id = String(i + 1);
  return {
    label: `Tab ${id}`,
    key: id,
    children: `${id}`,
  };
});

type TabsProps = AntdTabsProps;

const Tabs: React.FC<TabsProps> = ({ items, className, ...props }) => {
  const [position, setPosition] = useState<PositionType[]>(["left", "right"]);

  return (
    <>
      <AntdTabs items={items} className={styles.tabs} {...props} />
    </>
  );
};

export default Tabs;
