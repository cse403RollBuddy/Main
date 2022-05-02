import React from "react";
import Button from "../../components/Button";
import { MainContainer } from "../../components/CenteredBox";
import {useNavigate} from "react-router-dom";
import {RollBudyTitle} from "../../components/RollBudyTitle";

export default function PlayPage() {
  const history = useNavigate();

  const onMainClick = (e) => {
    e.preventDefault();
    history("/HomePage");
  };

  return (
    <>
      <RollBudyTitle> RollBudy </RollBudyTitle>
      <hr/>
      <MainContainer>
        <Button
          onClickAction={onMainClick}
          buttonText="Update"
          buttonStyle="red" />
      </MainContainer>
    </>
  );
}
