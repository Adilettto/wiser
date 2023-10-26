import React from "react";
import type { CustomTagProps } from "rc-select/lib/BaseSelect";
import { Select, Tag } from "antd";
import { ReactComponent as Search } from "../../Assets/search.svg";
import { DownOutlined } from "@ant-design/icons";
import styles from "./Select.module.scss";

const options = [
  { value: "gold" },
  { value: "lime" },
  { value: "green" },
  { value: "cyan" },
];

const tagRender = (props: CustomTagProps) => {
  const { label, value, closable, onClose } = props;
  const onPreventMouseDown = (event: React.MouseEvent<HTMLSpanElement>) => {
    event.preventDefault();
    event.stopPropagation();
  };
  return (
    <Tag
      color={value}
      onMouseDown={onPreventMouseDown}
      closable={closable}
      onClose={onClose}
      style={{ top: "30px" }}
    >
      {label}
    </Tag>
  );
};

const SelectField: React.FC = () => (
  <div className={styles.select}>
    <Select
      mode="multiple"
      className={styles.select}
      tagRender={tagRender}
      style={{ width: "100%", minWidth: "150px" }}
      options={options}
      suffixIcon={<DownOutlined />}
    />
    <span className={styles.select__icon} style={{ marginRight: "25px " }}>
      <Search />
    </span>
  </div>
);

export default SelectField;
