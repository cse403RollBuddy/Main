import { React, useState, useEffect } from "react";
import Button from "../../components/Button";
import { MainContainer } from "../../components/CenteredBox";
import Input from "../../components/Input/index";
import DropDownList from "../../components/DropDownList/index";
import CharacterPageService from "./service";
import { Nav, RollBuddyTitle } from "../../components/RollBuddyTitle";
import { useNavigate } from "react-router-dom";

export default function CharacterPage() {
  const history = useNavigate();
  const [name, setName] = useState("");
  const [races, setRaces] = useState([]);
  const [backgrounds, setBackgrounds] = useState([]);
  const [classes, setClasses] = useState([]);
  const [selectedRace, setSelectedRace] = useState();
  const [selectedBackground, setSelectedBackground] = useState();
  const [selectedLevel, setSelectedLevel] = useState();
  const [selectedClass, setSelectedClass] = useState();

  const [strength, setStrength] = useState();
  const [dexterity, setDexterity] = useState();
  const [constitution, setConstitution] = useState();
  const [intelligence, setIntelligence] = useState();
  const [wisdom, setWisdom] = useState();
  const [charisma, setCharisma] = useState();

  const onMainClick = (e) => {
    e.preventDefault();
    history("/HomePage");
  };

  async function getRaces() {
    return CharacterPageService.getRaces();
  }

  async function getBackground() {
    return CharacterPageService.getBackground();
  }

  async function getClasses() {
    return CharacterPageService.getClasses();
  }

  const handleNewName = (event) => {
    setName(event.target.value);
  };

  useEffect(() => {
    setRaces(getRaces());
    setBackgrounds(getBackground());
    setClasses(getClasses());
  }, []);

  return (
    <div>
      <Nav>
        <h1 className="app-title">ROLL BUDDY</h1>
      </Nav>
      <MainContainer>
        <Input
          placeholder={"Enter character name"}
          value={name}
          onChange={handleNewName}
        />
        <DropDownList
          label={"Race"}
          isMulti={false}
          maxMenuHeight={150}
          setSelectedOptions={setSelectedRace}
          list={races}
        />
        <DropDownList
          label={"Background"}
          isMulti={false}
          maxMenuHeight={150}
          setSelectedOptions={setSelectedBackground}
          list={backgrounds}
        />
        <DropDownList
          label={"Class"}
          isMulti={false}
          maxMenuHeight={150}
          setSelectedOptions={setSelectedClass}
          list={classes}
        />
        <Input
          label={"strength score"}
          readonly={true}
          type={"text"}
          placeholder={"score"}
          value={strength}
          onChange={setStrength}
        />
        <Input
          label={"charisma score"}
          readonly={true}
          type={"text"}
          placeholder={"score"}
          value={charisma}
          onChange={setCharisma}
        />
        <Input
          label={"dexterity score"}
          readonly={true}
          type={"text"}
          placeholder={"score"}
          value={dexterity}
          onChange={setDexterity}
        />
        <Input
          label={"intelligence score"}
          readonly={true}
          type={"text"}
          placeholder={"score"}
          value={intelligence}
          onChange={setIntelligence}
        />
        <Input
          label={"wisdom score"}
          readonly={true}
          type={"text"}
          placeholder={"score"}
          value={wisdom}
          onChange={setWisdom}
        />
        <Input
          label={"constitution score"}
          readonly={true}
          type={"text"}
          placeholder={"score"}
          value={constitution}
          onChange={setConstitution}
        />
        <Button buttonColor={"red"} buttonText={"Submit"} />
        <Button
          onClickAction={onMainClick}
          buttonText="Update and Play"
          buttonColor="blue"
        />
      </MainContainer>
    </div>
  );
}
