import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import { MainContainer } from "../../components/CenteredBox";

export default function StartPage() {
  const history = useNavigate();

  const onMainClick = (e) => {
    e.preventDefault();
    history("/HomePage");
  };

  return (
    <MainContainer>
      <Button
        onClickAction={onMainClick}
        buttonText="Enter HomePage"
        buttonStyle="red"
      />
    </MainContainer>
  );
}
