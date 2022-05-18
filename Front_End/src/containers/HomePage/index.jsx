import React, {useEffect, useState} from "react";
import Button from "../../components/Button";
import { MainContainer } from "../../components/CenteredBox";
import { useNavigate } from "react-router-dom";
import {Nav, RollBuddyTitle} from "../../components/RollBuddyTitle";
import CharacterPageService from "../CharacterPage/service";
import Input from "../../components/Input";
import DropDownList from "../../components/DropDownList";
import {CharHeader} from "../../components/CharHeader";

/**
 * This is the home page where a uer can choose to create a new character
 * or choose a character to start a game
 */
export default function HomePage() {
  const history = useNavigate();
    /**
     * Provide all stored characters for the user to select for the game
     * */
  const [characters, setCharacters] = useState([]);

  /**
   * Set the picked character based on user's selection
  * */
  const [selectedCharacter, setSelectedCharacter] = useState("");

  /**
  * Obtain all saved characters from the server
  * */
  async function getCharacters() {
    await fetch("http://localhost:4567/characters")
        .then((response) => response.json())
        .catch((e) => {
          throw new Error("server unavailable");
        })
        .then((data) => {
          setCharacters(data);
        });
  }


  useEffect(() => {
    getCharacters();
  }, []);

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
          <Input
              label={"Saved Characters"}
              value={characters}
          />

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
