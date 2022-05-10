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
  const [selectedCharacter, setSelectedCharacter] = useState();

  async function getCharaters() {
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
    getCharaters();
  });

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
          onChange={setSelectedCharacter}
          options={characters}
          isMulti={false}
        />
        <Ability label={"Strength"} placeholder={"score"} />
        <Ability label={"Charisma"} placeholder={"score"} />
        <Ability label={"Dexterity"} placeholder={"score"} />
        <Ability label={"Constitution"} placeholder={"score"} />
        <Ability label={"Intelligence"} placeholder={"score"} />
        <Ability label={"Wisdom"} placeholder={"score"} />

        <Button
          onClickAction={onMainClick}
          buttonText="Update"
          buttonColor="blue"
        />
      </MainContainer>
    </div>
  );
}
