import React, {useEffect, useState} from "react";
import Button from "../../components/Button";
import { MainContainer } from "../../components/CenteredBox";
import { useNavigate } from "react-router-dom";
import {Nav, RollBuddyTitle} from "../../components/RollBuddyTitle";
import CharacterPageService from "../CharacterPage/service";
import Input from "../../components/Input";
import DropDownList from "../../components/DropDownList";
export default function HomePage() {
  const history = useNavigate();
  const [characters, setChars] = useState([]);
  const [selectedChar, setSelectedChar] = useState();

  async function getChars() {
    return CharacterPageService.getChars();
  }

  useEffect(() => {
    setChars(getChars());
  }, []);

  const onPlayClick = (e) => {
    e.preventDefault();
    history("/PlayPage");
  };
  const onCharClick = (e) => {
    e.preventDefault();
    history("/CharacterPage");
  };
  return (
    <div>
      <Nav>
        <h1 className="app-title">ROLL BUDDY</h1>
      </Nav>
      <MainContainer>
        <DropDownList
            label={"Select Character"}
            isMulti={false}
            maxMenuHeight={150}
            setSelectedOptions={setSelectedChar}
            list={characters}
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
