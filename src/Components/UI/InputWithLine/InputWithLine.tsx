import { Input } from 'antd';
import React from 'react';
import { ReactComponent as DollarSign } from "Assets/dollar.svg";
import styles from './InputWithLine.module.scss';
type InputWithLineProps = {
  line?: string
};

const InputWithLine: React.FC<InputWithLineProps> = ({ line }) => {

  return <div>
    <Input
      placeholder="default size"
      prefix={<DollarSign
        className={styles.dollar__sign} />}
    />
    {line && <span className={styles.input__line}>| /my</span>}
  </div>
}
export default InputWithLine;