import React from "react";
import Button from "../../components/Button";
import { MainContainer } from "../../components/CenteredBox";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const history = useNavigate();

  const onMainClick = (e) => {
    e.preventDefault();
    history("/PlayPage");
  };
  const onCharClick = (e) => {
    e.preventDefault();
    history("/CharacterPage");
  };
  return (
    <MainContainer>
      <Button
        onClickAction={onMainClick}
        buttonText="Enter PlayPage"
        buttonStyle="red"
      />
      <Button
        onClickAction={onCharClick}
        buttonText="Edit Character"
        buttonStyle="blue"
      />
    </MainContainer>
  );
}
