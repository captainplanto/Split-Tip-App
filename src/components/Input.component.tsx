import React, { FC, HTMLInputTypeAttribute } from "react";
import styled from "styled-components";
interface IInput {
  type: HTMLInputTypeAttribute;
  value: number;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  placeholder: string;
  style?: object;
  border?: string;
  height?: string;
  radius?: string;
  width?: string;
  outline?: string;
  color?: string;
}
const InputComponent: FC<IInput> = ({
  value,
  type,
  onChange,
  placeholder,
  style,
  width,
  outline,
  border,
  color,

  ...props
}) => {
  return (
    <Input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      style={{ backgroundColor: color, width, border, outline, ...style }}
    />
  );
};
export default InputComponent;
const Input = styled.input`
 width:70%;
  @media screen and (max-width:820px){
    width: 100%;

  }
  border: none;
  outline: none;
  color: var(--Grayish-cyan);
  background: var(--Very-light-grayish-cyan);
  border-radius: 3px;
  padding: 8px 0 8px 3px;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
