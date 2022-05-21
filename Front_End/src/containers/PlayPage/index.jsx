import React, { useEffect, useState } from "react";
import Button from "../../components/Button";
import { MainContainer } from "../../components/CenteredBox";
import { useNavigate } from "react-router-dom";
import { Nav } from "../../components/RollBuddyTitle";
import DropDownList from "../../components/DropDownList";
import CharacterPageService from "../CharacterPage/service";
import Input from "../../components/Input";
import Ability from "../../components/Ability";


/**
 * This is the play page where a uer can choose a character to review
 * the current state of the chosen character, change the character states
 * using dice rolls, and update character data when finish playing
 */
export default function PlayPage() {
  const history = useNavigate();

  /**
   * Set Character details based on the picked character by the user
   * */
  const[charData, setcharData] = useState([]);

  /**
   * Provide all stored characters for the user to select for the game
   * */
  const [characters, setCharacters] = useState([]);

  /**
   * Set the picked character based on user's selection
   * */
  const [selectedCharacter, setSelectedCharacter] = useState("");


  /**
   * Set the score returned from dice rolling
   * */
  const [score, setScore] = useState(0);

  /**
   * Navigate to HomePage
   */
  const onMainClick = (e) => {
    e.preventDefault();
    history("/HomePage");
  };

  useEffect(() => {
    getCharacters();
  }, []);

  useEffect(() => {
    getCharacterData();
    // setAbility();
  }, [selectedCharacter]);

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


  /**
  * Obtain selected character data from the server
  * */

  async function getCharacterData() {
    if (selectedCharacter) {
      await fetch("http://localhost:4567/select-character?name=" + selectedCharacter.value)
          .then((response) => response.json())
          .catch((e) => {
            throw new Error("server unavailable");
          })
          .then((data) => {
            setcharData(data);
          });
    }
  }


  /* List all the abilities as input box now, consider to use a form component later */
  return (
    <div>
      <Nav>
        <h1 className="app-title">ROLLBUDDY</h1>
      </Nav>
      <MainContainer>
        <DropDownList
          label={"Select a character"}
          value={selectedCharacter}
          maxMenuHeight={150}
          setSelectedOptions={setSelectedCharacter}
          list={characters.map((name) => ({
            value: name,
            label: name,
          }))}
          isMulti={false}
        />
        <Input
          label={"Strength"}
          value={charData.strength}
        />
        <Input
          label={"Charisma"}
          value={charData.charisma}
        />
        <Input
          label={"Dexterity"}
          value={charData.dexterity}
        />
        <Input
          label={"Constitution"}
          value={charData.constitution}
        />
        <Input
          label={"Intelligence"}
          value={charData.intelligence}
        />
        <Input
          label={"Wisdom"}
          value={charData.wisdom}
        />

        <Button
          onClickAction={onMainClick}
          buttonText="Update"
          buttonColor="blue"
        />
      </MainContainer>
    </div>
  );
}
