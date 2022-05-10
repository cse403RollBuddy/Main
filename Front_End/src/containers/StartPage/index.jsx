import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import { MainContainer } from "../../components/CenteredBox";
import {Nav, RollBuddyTitle} from "../../components/RollBuddyTitle";

export default function StartPage() {
  const history = useNavigate();
  const onMainClick = (e) => {
    e.preventDefault();
    history("/HomePage");
  };

  return (
    <div>
      <Nav>
         <h1 className="app-title">ROLLBUDDY</h1>
      </Nav>
      <MainContainer>
        <Button
          onClickAction={onMainClick}
          buttonText="Enter HomePage"
          buttonColor="red"
        />
      </MainContainer>
    </div>
  );
}
