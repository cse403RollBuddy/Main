import React from "react";
import Button from "../../components/Button";
import { MainContainer } from "../../components/CenteredBox";
import { useNavigate } from "react-router-dom";
import { RollBuddyTitle } from "../../components/RollBuddyTitle";

export default function PlayPage() {
  const history = useNavigate();

  const onMainClick = (e) => {
    e.preventDefault();
    history("/HomePage");
  };

  return (
    <>
      <RollBuddyTitle> RollBudy </RollBuddyTitle>
      <hr />
      <MainContainer>
        <Button
          onClickAction={onMainClick}
          buttonText="Update"
          buttonColor="red"
        />
      </MainContainer>
    </>
  );
}
