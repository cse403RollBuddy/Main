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
const BlueButtonStyle = styled.button`
    color: #Fff !important;
    text-transform: uppercase;
    text-decoration: none;
    background: #0000FF;
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
export default function Button({ onClickAction, buttonText, buttonColor }) {
  if (buttonColor === "red") {
    return (
      <RedButtonStyle onClick={onClickAction}>{buttonText}</RedButtonStyle>
    );
  } else if (buttonColor === "blue") {
    return (
      <BlueButtonStyle onClick={onClickAction}>{buttonText}</BlueButtonStyle>
    );
  }
  return <button onClick={onClickAction}>{buttonText}</button>;
}
