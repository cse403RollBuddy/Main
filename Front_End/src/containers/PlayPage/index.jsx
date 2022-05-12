import React, { useEffect, useState } from "react";
import Button from "../../components/Button";
import { MainContainer } from "../../components/CenteredBox";
import { useNavigate } from "react-router-dom";
import { Nav } from "../../components/RollBuddyTitle";
import DropDownList from "../../components/DropDownList";
import CharacterPageService from "../CharacterPage/service";
import Input from "../../components/Input";
import Ability from "../../components/Ability";

export default function PlayPage() {
  const history = useNavigate();

  const [characters, setCharacters] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState("");

  const [strength, setStrength] = useState();
  const [dexterity, setDexterity] = useState();
  const [constitution, setConstitution] = useState();
  const [intelligence, setIntelligence] = useState();
  const [wisdom, setWisdom] = useState();
  const [charisma, setCharisma] = useState();
  const [score, setScore] = useState(0);

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

  async function getCharaterData() {
    if (selectedCharacter) {
      await fetch("http://localhost:4567/select-character?name=" + selectedCharacter.value)
          .then((response) => response.json())
          .catch((e) => {
            throw new Error("server unavailable");
          })
          .then((data) => {
            setCharisma(data.charisma);
            setWisdom(data.wisdom);
            setDexterity(data.dexterity);
            setStrength(data.strength);
            setIntelligence(data.intelligence);
            setConstitution(data.constitution);
          });
    }
  }

  useEffect(() => {
    getCharacters();
  }, []);

  useEffect(() => {
    getCharaterData();
   // setAbility();
  }, [selectedCharacter]);

  // function setAbility() {
  //   if (selectedCharacter) {
  //     setCharisma(16);
  //     setWisdom(6);
  //     setDexterity(13);
  //     setStrength(10);
  //     setIntelligence(5);
  //     setConstitution(3);
  //   }
  // }

  const onMainClick = (e) => {
    e.preventDefault();
    history("/HomePage");
  };

  return (
    <div>
      <Nav>
        <h1 className="app-title">ROLLBUDDY</h1>
      </Nav>
      <MainContainer>
        <DropDownList
          label={"Characters"}
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
          placeholder={"score"}
          value={strength}
          onChange={setStrength}
        />
        <Input
          label={"Charisma"}
          placeholder={"score"}
          value={charisma}
          onChange={setCharisma}
        />
        <Input
          label={"Dexterity"}
          placeholder={"score"}
          value={dexterity}
          onChange={setDexterity}
        />
        <Input
          label={"Constitution"}
          placeholder={"score"}
          value={constitution}
          onChange={setConstitution}
        />
        <Input
          label={"Intelligence"}
          placeholder={"score"}
          value={intelligence}
          onChange={setIntelligence}
        />
        <Input
          label={"Wisdom"}
          placeholder={"score"}
          value={wisdom}
          onChange={setWisdom}
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
