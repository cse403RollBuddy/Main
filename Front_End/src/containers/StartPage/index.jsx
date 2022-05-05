import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import { MainContainer } from "../../components/CenteredBox";
import { RollBudyTitle } from "../../components/RollBudyTitle";

export default function StartPage() {
  const history = useNavigate();

  const onMainClick = (e) => {
    e.preventDefault();
    history("/HomePage");
  };

  return (
    <>
      <RollBudyTitle> RollBudy </RollBudyTitle>
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
