import React, { useEffect, useState } from "react";
import Button from "../../components/Button";
import { MainContainer } from "../../components/CenteredBox";
import { useNavigate } from "react-router-dom";
import { Nav } from "../../components/RollBuddyTitle";
import DropDownList from "../../components/DropDownList";
import Input from "../../components/Input";
import { HorizontalBox } from "../../components/HorizontalBox";
import { VerticalBox } from "../../components/VerticalBox";

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
  const [charData, setCharData] = useState([]);

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
  const [score, setScore] = useState();

  const [selectedRollType, setSelectedRollType] = useState("");

  const [rollTypes, setRollTypes] = useState([]);

  const [selectedRollAbility, setSelectedRollAbility] = useState("");

  const [rollAbility, setRollAbility] = useState([]);

  const [currentHealth, setCurrentHealth] = useState(0);

  const [experience, setExperience] = useState(0);

  const onExperienceChange = (e) => {
    e.preventDefault();
    setExperience(e.target.value);
  };

  const sendCurrentHealth = () => {
    console.log("TODO SEND TO BACKEND");
  };

  useEffect(() => {
    getCharacters();
    setRollTypes(["Regular", "Advantage", "Disadvantage"]);
    setRollAbility([
      "Strength",
      "Charisma",
      "Dexterity",
      "Constitution",
      "Intelligence",
      "Wisdom",
    ]);
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
      await fetch(
        "http://localhost:4567/select-character?name=" + selectedCharacter.value
      )
        .then((response) => response.json())
        .catch((e) => {
          throw new Error("server unavailable");
        })
        .then((data) => {
          setCharData(data);
        });
    }
  }

  async function submitDice() {
    await fetch(
      "http://localhost:4567/abilityroll?name=" +
        selectedCharacter.value +
        "&ability=" +
        selectedRollAbility.value +
        "&roll-type=" +
        selectedRollType.value
    )
      .then((response) => response.json())
      .catch((e) => {
        throw new Error("server unavailable");
      })
      .then((data) => {
        console.log(data);
        setScore(data);
      });
  }

  /* List all the abilities as input box now, consider to use a form component later */
  return (
    <div>
      <Nav>
        <h1 className="app-title">ROLLBUDDY</h1>
      </Nav>
      <MainContainer>
        <HorizontalBox>
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
          <Input label={"Race"} readonly={true} value={charData.race} />
          <Input label={"Class"} readonly={true} value={charData.classtype} />
          <Input
            label={"Background"}
            readonly={true}
            value={charData.background}
          />
          <Input label={"Level"} readonly={true} value={charData.level} />
        </HorizontalBox>
        <HorizontalBox>
          <VerticalBox>
            <Input
              label={"Strength"}
              readonly={true}
              value={charData.strength}
            />
            <Input
              label={"Charisma"}
              readonly={true}
              value={charData.charisma}
            />
            <Input
              label={"Dexterity"}
              readonly={true}
              value={charData.dexterity}
            />
            <Input
              label={"Constitution"}
              readonly={true}
              value={charData.constitution}
            />
            <Input
              label={"Intelligence"}
              readonly={true}
              value={charData.intelligence}
            />
            <Input label={"Wisdom"} readonly={true} value={charData.wisdom} />
          </VerticalBox>
          <VerticalBox>
            <Input
              label="Max Health"
              readonly={true}
              value={charData.maxhealth}
            />
            <HorizontalBox>
              <Input
                label="Current Health"
                readonly={true}
                value={currentHealth}
              />
              <Button
                buttonText={"+"}
                onClickAction={() => setCurrentHealth(currentHealth + 1)}
              ></Button>
              <Button
                buttonText={"-"}
                onClickAction={() => setCurrentHealth(currentHealth - 1)}
              ></Button>
              <Button
                buttonText={"Update"}
                onClickAction={sendCurrentHealth}
              ></Button>
            </HorizontalBox>
            <HorizontalBox>
              <Input
                label="Experience"
                onChange={onExperienceChange}
                value={experience}
              />
              <Button buttonText={"Update"}></Button>
            </HorizontalBox>
            <HorizontalBox>
              <Input label={"Gold Coins"} value={charData.goldcoins}></Input>
            </HorizontalBox>
          </VerticalBox>
        </HorizontalBox>
        <HorizontalBox>
          <VerticalBox>
            <DropDownList
              label={"Choose Roll"}
              value={selectedRollType}
              maxMenuHeight={150}
              setSelectedOptions={setSelectedRollType}
              list={rollTypes.map((name) => ({
                value: name,
                label: name,
              }))}
              isMulti={false}
            />
            <DropDownList
              label={"Choose Ability"}
              value={selectedRollAbility}
              maxMenuHeight={150}
              setSelectedOptions={setSelectedRollAbility}
              list={rollAbility.map((name) => ({
                value: name,
                label: name,
              }))}
              isMulti={false}
            />
          </VerticalBox>
          <Button
            buttonColor={"red"}
            onClickAction={submitDice}
            buttonText="Roll Dice "
          />
        </HorizontalBox>
        <HorizontalBox>
          <Input label="High" value={score === undefined ? "" : score.high} />
          <Input label="Low" value={score === undefined ? "" : score.low} />
          <Input
            label="Modifier"
            value={score === undefined ? "" : score.mod}
          />
          <Input label="Total" value={score === undefined ? "" : score.total} />
        </HorizontalBox>
      </MainContainer>
    </div>
  );
}
