import styled from "styled-components";

export const InputBox = styled.input`
  border: 1px solid #000;
  border-radius: 3px;
  padding: 10px;
  margin: 5px;
  width: 100px;
  box-sizing: border-box;
  align-items: left;
`;

export default function Ability({ label, type, placeholder,  value1, value2, onChange }) {
  return (
    <label>
      {label}
      <InputBox
        type={type}
        value={value1}
        onChange={onChange}
      />
      <InputBox
        type={type}
        placeholder={placeholder}
        value={value2}
        onChange={onChange}
      />
    </label>
  );
}
