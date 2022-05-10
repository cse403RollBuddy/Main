import React, {useEffect, useState} from "react";
import Button from "../../components/Button";
import {MainContainer} from "../../components/CenteredBox";
import { useNavigate } from "react-router-dom";
import {Nav} from "../../components/RollBuddyTitle";
import DropDownList from "../../components/DropDownList";
import CharacterPageService from "../CharacterPage/service";
import Input from "../../components/Input";
import Ability from "../../components/Ability";

export default function PlayPage() {
  const history = useNavigate();
  const onMainClick = (e) => {
    e.preventDefault();
    history("/HomePage");
  };
  const onDiceClick = (e) => {
    e.preventDefault();
  };


  return (
    <div>
      <Nav>
        <h1 className="app-title">ROLL BUDDY</h1>
      </Nav>
      <MainContainer>
        <Ability label={"Strength"} placeholder={"new score"} />
        <Ability label={"Dexterity"} placeholder={"new score"} />
        <Ability label={"Constitution"} placeholder={"new score"} />
        <Ability label={"Intelligence"} placeholder={"new score"} />
        <Ability label={"Wisdom"} placeholder={"new score"} />

        <Button
          onClickAction={onMainClick}
          buttonText="Update"
          buttonColor="red"
        />
        <Button
          onClickAction={onDiceClick}
          buttonText="Roll Dice"
          buttonColor="dice"
        />
      </MainContainer>
    </div>
  );
}
