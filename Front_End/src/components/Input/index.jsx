import styled from "styled-components";

export const InputBox = styled.input`
  border: 1px solid #000;
  border-radius: 3px;
  padding: 10px;
  margin: 5px;
  width: 175px;
  box-sizing: border-box;
`;

export default function Input({
  label,
  type,
  placeholder,
  value,
  onChange,
  readonly,
}) {
  return (
    <label>
      {label}
      <InputBox
        type={type}
        readOnly={readonly}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </label>
  );
}
