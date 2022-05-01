import React from "react";
import Button from "../../components/Button";
import { MainContainer } from "../../components/CenteredBox";

export default function HomePage() {
  return (
    <MainContainer>
      <Button buttonText="This is the HomePage" buttonStyle="red" />
    </MainContainer>
  );
}
