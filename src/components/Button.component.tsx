import styled from "@emotion/styled";
import React, { FC, ReactNode } from "react";

interface IButton {
  children?: ReactNode;
  style?: object;
  color?: string;
  onClick?: () => void;
  border?: string;
  height?: string;
  radius?: string;
  width?: string;
}

const ButtonComponent: FC<IButton> = ({
  children,
  style,
  onClick,
  color,
  height,
  width,
  ...props
}) => {
  return (
    <Button
      style={{ backgroundColor: color, width, ...style }}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};
export default ButtonComponent;

const Button = styled.button`
  border: none;
  border-radius: var(--border-botton-radius);
`;
