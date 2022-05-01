import React from "react";
import styled from "styled-components";

const RedButtonStyle = styled.button`
    color: #fff !important;
    text-transform: uppercase;
    text-decoration: none;
    background: #cc2344;
    padding: 10px;
    border-radius: 10px;
    display: inline-block;
    border: none;
    margin: 10px;
    box-sizing: border-box
    transition: all 0.4s ease 0s;
    :hover {
        background: #434343;
        letter-spacing: 1px;
        -webkit-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
        -moz-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
        box-shadow: 5px 40px -10px rgba(0, 0, 0, 0.57);
        transition: all 0.4s ease 0s;
      }
    `;

export default function Button({ onClickAction, buttonText, buttonStyle }) {
  if (buttonStyle === "red") {
    return (
      <RedButtonStyle onClick={onClickAction}>{buttonText}</RedButtonStyle>
    );
  }
  return <button onClick={onClickAction}>{buttonText}</button>;
}
