import styled from "styled-components";
import Button from "../Button";
import {MainContainer} from "../CenteredBox";
import React from "react";

export const InputBox = styled.input`
  border: 1px solid #000;
  border-radius: 3px;
  padding: 10px;
  margin: 5px;
  width: 100px;
  box-sizing: border-box;
  align-items: left;
`;

export default function Ability({ label, type, placeholder, value, onChange, onClick }) {
  return (
    <label>
      {label}
      <InputBox
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <Button
        onClickAction={onClick}
         buttonText="Roll Dice"
         buttonColor="red"
      />
    </label>
  );
}
