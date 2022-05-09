import { React, useState, useEffect } from "react";
import Button from "../../components/Button";
import { MainContainer } from "../../components/CenteredBox";
import Input from "../../components/Input/index";
import DropDownList from "../../components/DropDownList/index";
import CharacterPageService from "./service";
import {RollBuddyTitle} from "../../components/RollBuddyTitle";

export default function CharacterPage() {
  const [races, setRaces] = useState([]);
  const [backgrounds, setBackgrounds] = useState([]);
  const [selectedRace, setSelectedRace] = useState();
  const [selectedBackground, setSelectedBackground] = useState();
  const [selectedLevel, setSelectedLevel] = useState();

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
    <>
      <RollBuddyTitle> RollBudy </RollBuddyTitle>
      <hr />
    <div>
      <MainContainer>
        <Input placeholder={"Character name"} />
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
      </MainContainer>
    </div>
    </>
  );
}
