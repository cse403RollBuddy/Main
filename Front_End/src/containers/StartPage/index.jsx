import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import { MainContainer } from "../../components/CenteredBox";
import { RollBuddyTitle } from "../../components/RollBuddyTitle";

export default function StartPage() {
  const history = useNavigate();

  const onMainClick = (e) => {
    e.preventDefault();
    history("/HomePage");
  };

  return (
    <>
      <RollBuddyTitle> RollBuddy </RollBuddyTitle>
      <hr />
      <MainContainer>
        <Button
          onClickAction={onMainClick}
          buttonText="Enter HomePage"
          buttonColor="red"
        />
      </MainContainer>
    </>
  );
}
