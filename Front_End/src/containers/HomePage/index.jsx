import React from "react";
import Button from "../../components/Button";
import { MainContainer } from "../../components/CenteredBox";
import { useNavigate } from "react-router-dom";
import { Nav } from "../../components/RollBuddyTitle";

/**
 * This is the home page where a uer can choose to create a new character
 * or choose a character to start a game
 */
export default function HomePage() {
  const history = useNavigate();
  /**
   * Navigate to PlayPage
   */
  const onPlayClick = (e) => {
    e.preventDefault();
    history("/PlayPage/");
  };

  /**
   * Navigate to CharacterPage
   */
  const onCharClick = (e) => {
    e.preventDefault();
    history("/CharacterPage");
  };

  return (
    <div>
      <Nav>
        <h1 className="app-title">ROLLBUDDY</h1>
      </Nav>
      <MainContainer>
        <Button
          onClickAction={onPlayClick}
          buttonText="Enter PlayPage"
          buttonColor="red"
        />
        <Button
          onClickAction={onCharClick}
          buttonText="Create Character"
          buttonColor="blue"
        />
      </MainContainer>
    </div>
  );
}
