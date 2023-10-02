import React from 'react';
import { Button as AntdButton, ButtonProps as AntdButtonProps } from 'antd';

type ButtonProps = AntdButtonProps & {

};

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {

  return <AntdButton {...props}>{children}</AntdButton>
}
export default Button;