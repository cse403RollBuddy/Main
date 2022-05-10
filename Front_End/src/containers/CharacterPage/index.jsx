import { React, useState, useEffect } from "react";
import Button from "../../components/Button";
import { MainContainer } from "../../components/CenteredBox";
import Input from "../../components/Input/index";
import DropDownList from "../../components/DropDownList/index";
import CharacterPageService from "./service";
import { Nav, RollBuddyTitle } from "../../components/RollBuddyTitle";
import { useNavigate } from "react-router-dom";
import Ability from "../../components/Ability";

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
  const [ score, setScore] = useState();

  const onMainClick = (e) => {
    e.preventDefault();
    history("/HomePage");
  };

  useEffect(() => {
    getBackground();
    getRaces();
    getClasses();
  }, []);

  useEffect(() => {
    getAbilityScores();
  }, [selectedRace]);

  async function getRaces() {
    await fetch("http://localhost:4567/races")
      .then((response) => response.json())
      .catch((e) => {
        //   alert("races unavailable");
        throw new Error("server unavailable");
      })
      .then((data) => {
        data = data.replace(/,/g, "");
        setRaces(data.split(" "));
      });
  }

  const getBackground = async () => {
    await fetch("http://localhost:4567/background")
      .then((response) => response.json())
      .catch((e) => {
        //   alert("background unavailable");
        throw new Error("server unavailable");
      })
      .then((data) => {
        data = data.replace(/,/g, "");
        setBackgrounds(data.split(" "));
      });
  };

  async function getClasses() {
    await fetch("http://localhost:4567/classes")
      .then((response) => response.json())
      .catch((e) => {
        //   alert("levels unavailable");
        throw new Error("server unavailable");
      })
      .then((data) => {
        data = data.replace(/,/g, "");
        setClasses(data.split(" "));
      });
  }

  const getAbilityScores = async () => {
    if (selectedRace) {
      await fetch("http://localhost:4567/ability?race=" + selectedRace)
        .then((response) => response.json())
        .catch((e) => {
          throw new Error("server unavailable");
        })
        .then((data) => {
          setCharisma(data.Charisma);
          setWisdom(data.Wisdom);
          setDexterity(data.Dexterity);
          setStrength(data.Strength);
          setIntelligence(data.Intelligence);
          setConstitution(data.Constitution);
        });
    }
  };

  const handleNewName = (event) => {
    setName(event.target.value);
  };

  async function getScore() {
    await fetch("http://localhost:4567/creationroll" )
        .then((response) => response.json())
        .catch((e) => {
          //   alert("races unavailable");
          throw new Error("server unavailable");
        })
        .then((data) => {
          setScore(data);
        });
  }
  const setAbility = (setAb, old) =>{
    setAb(old + score)
  }
  return (
    <div>
      <Nav>
        <h1 className="app-title">ROLLBUDDY</h1>
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
          list={races.map((name) => ({
            value: name,
            label: name,
          }))}
        />
        <DropDownList
          label={"Background"}
          isMulti={false}
          maxMenuHeight={150}
          setSelectedOptions={setSelectedBackground}
          list={backgrounds.map((name) => ({
            value: name,
            label: name,
          }))}
        />
        <DropDownList
          label={"Class"}
          isMulti={false}
          maxMenuHeight={150}
          setSelectedOptions={setSelectedClass}
          list={classes.map((name) => ({
            value: name,
            label: name,
          }))}
        />
        <Ability
          label={"strength score"}
          readonly={true}
          type={"text"}
          placeholder={"score"}
          value={strength}
          onClick={()=>{getScore();setAbility(setStrength,strength)}}
        />
        <Ability
          label={"charisma score"}
          readonly={true}
          type={"text"}
          placeholder={"score"}
          value={charisma}
          onChange={setCharisma}
          onClick={()=>{getScore();setAbility(setCharisma,charisma)}}
        />
        <Ability
          label={"dexterity score"}
          readonly={true}
          type={"text"}
          placeholder={"score"}
          value={dexterity}
          onChange={setDexterity}
          onClick={()=>{getScore();setAbility(setDexterity,dexterity)}}
        />
        <Ability
          label={"intelligence score"}
          readonly={true}
          type={"text"}
          placeholder={"score"}
          value={intelligence}
          onChange={setIntelligence}
          onClick={()=>{getScore();setAbility(setIntelligence,intelligence)}}
        />
        <Ability
          label={"wisdom score"}
          readonly={true}
          type={"text"}
          placeholder={"score"}
          value={wisdom}
          onChange={setWisdom}
          onClick={()=>{getScore();setAbility(setWisdom,wisdom)}}
        />
        <Ability
          label={"constitution score"}
          readonly={true}
          type={"text"}
          placeholder={"score"}
          value={constitution}
          onChange={setConstitution}
          onClick={()=>{getScore();setAbility(setConstitution,1)}}
        />

        <Button
          onClickAction={onMainClick}
          buttonText="Update and Play"
          buttonColor="blue"
        />
      </MainContainer>
    </div>
  );
}
