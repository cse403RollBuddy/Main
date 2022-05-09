import React from "react";
import Button from "../../components/Button";
import { MainContainer } from "../../components/CenteredBox";
import { useNavigate } from "react-router-dom";
import { RollBuddyTitle } from "../../components/RollBuddyTitle";
export default function HomePage() {
  const history = useNavigate();

  const onPlayClick = (e) => {
    e.preventDefault();
    history("/PlayPage");
  };
  const onCharClick = (e) => {
    e.preventDefault();
    history("/CharacterPage");
  };
  return (
    <div>
      <RollBuddyTitle> RollBuddy </RollBuddyTitle>
      <hr />
      <MainContainer>
        <Button
          onClickAction={onPlayClick}
          buttonText="Enter PlayPage"
          buttonColor="red"
        />
        <Button
          onClickAction={onCharClick}
          buttonText="Select Character"
          buttonColor="blue"
        />
      </MainContainer>
    </div>
  );
}
