import React from "react";
import Button from "../../components/Button";
import { MainContainer } from "../../components/CenteredBox";
import { useNavigate } from "react-router-dom";

export default function CharacterPage() {
  return (
    <MainContainer>
      <Button buttonText="Create new Character" buttonStyle="red" />
    </MainContainer>
  );
}
