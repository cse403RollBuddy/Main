import { React, useState, useEffect } from "react";
import Button from "../../components/Button";
import { MainContainer } from "../../components/CenteredBox";
import Input from "../../components/Input/index";
import DropDownList from "../../components/DropDownList/index";
import CharacterPageService from "./service";
import {Nav, RollBuddyTitle} from "../../components/RollBuddyTitle";
import {useNavigate} from "react-router-dom";


export default function CharacterPage() {
  const history = useNavigate();
  const [races, setRaces] = useState([]);
  const [backgrounds, setBackgrounds] = useState([]);
  const [selectedRace, setSelectedRace] = useState();
  const [selectedBackground, setSelectedBackground] = useState();
  const [selectedLevel, setSelectedLevel] = useState();
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

  useEffect(() => {
    setRaces(getRaces());
    setBackgrounds(getBackground());
  }, []);

  return (
    <div>
      <Nav>
        <h1 className="app-title">ROLL BUDDY</h1>
      </Nav>
      <MainContainer>
        <Input placeholder={"Enter character name"} />
        <DropDownList
          label={"race"}
          isMulti={false}
          maxMenuHeight={150}
          setSelectedOptions={setSelectedRace}
          list={races}
        />
        <DropDownList
          label={"background"}
          isMulti={false}
          maxMenuHeight={150}
          setSelectedOptions={setSelectedBackground}
          list={backgrounds}
        />
        <DropDownList
          label={"levels"}
          isMulti={false}
          maxMenuHeight={150}
          setSelectedOptions={setSelectedLevel}
          list={[...Array(21).keys()].slice(1).map((num) => ({
            value: num,
            label: num,
          }))}
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
