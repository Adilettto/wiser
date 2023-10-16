import React from "react";
import type { CustomTagProps } from "rc-select/lib/BaseSelect";
import { Select, Tag } from "antd";
import styles from "./Select.module.scss";
import { ReactComponent as Search } from "../../Assets/search.svg";
import { DownOutlined } from "@ant-design/icons";

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
      // defaultValue={["gold", "cyan"]}
      style={{ width: "100%", minWidth: "150px" }}
      options={options}
      suffixIcon={<DownOutlined />}
    />
    <span className={styles.select__icon}>
      <Search />
    </span>
  </div>
);

export default SelectField;
