import { React, useState, useEffect } from "react";
import Button from "../../components/Button";
import { MainContainer } from "../../components/CenteredBox";
import Input from "../../components/Input/index";
import DropDownList from "../../components/DropDownList/index";
import { Nav } from "../../components/RollBuddyTitle";
import { useNavigate } from "react-router-dom";
import Ability from "../../components/Ability";

/**
 * This is the Character Page where user can crate a character
 * after filling out character name, race, class, background
 * and roll dice for all six Abilities:
 * strength
 * dexterity
 * constitution
 * intelligence
 * wisdom
 * charisma
 */
export default function CharacterPage() {
  const history = useNavigate();
  /**
   * Set the character name field that a user creates
   */
  const [name, setName] = useState("");

  /**
   * Provide character race options for the user to select
   */
  const [races, setRaces] = useState([]);

  /**
   * Provide character background options for the user to select
   */
  const [backgrounds, setBackgrounds] = useState([]);

  /**
   * Provide character class options for the user to select
   * */
  const [classes, setClasses] = useState([]);

  /**
   * Set the character race field based on user's selection
   * */
  const [selectedRace, setSelectedRace] = useState();

  /**
   * Set the character background field based on user's selection
   * */
  const [selectedBackground, setSelectedBackground] = useState();

  /**
   * Set the character class field based on user's selection
   * */
  const [selectedClass, setSelectedClass] = useState();

  /**
   * Set the strength ability score
   * */
  const [strength, setStrength] = useState();

  /**
   * Set the dexterity ability score
   * */
  const [dexterity, setDexterity] = useState();

  /**
   * Set the constitution ability score
   * */
  const [constitution, setConstitution] = useState();

  /**
   * Set the intelligence ability score
   * */
  const [intelligence, setIntelligence] = useState();

  /**
   * Set the wisdom ability score
   * */
  const [wisdom, setWisdom] = useState();

  /**
   * Set the charisma ability score
   * */
  const [charisma, setCharisma] = useState();

  /**
   * Set the score returned from dice rolling
   * */
  const [score, setScore] = useState(0);

  /**
   * Save the new character data and Navigate to PlayPage
   */
  const onMainClick = (e) => {
    e.preventDefault();
    const character = {
      name: name,
      race: selectedRace.value,
      background: selectedBackground.value,
      class: selectedClass.value,
      strength: strength,
      dexterity: dexterity,
      constitution: constitution,
      intelligence: intelligence,
      wisdom: wisdom,
      charisma: charisma,
    };
    submitCharacter(JSON.stringify(character));
    history("/PlayPage");
  };

  useEffect(() => {
    getBackground();
    getRaces();
    getClasses();
  }, []);

  useEffect(() => {
    getAbilityScores();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedRace]);

  /**
   * Send character data to the server
   * */
  async function submitCharacter(char) {
    await fetch("http://localhost:4567/new-character?character=" + char)
      .then((response) => response.json())
      .catch((e) => {
        throw new Error("server unavailable");
      });
  }

  /**
   * retrieve race options from the server
   * */
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

  /**
   * retrieve background options from the server
   * */
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

  /**
   * retrieve class options from the server
   * */
  async function getClasses() {
    await fetch("http://localhost:4567/classes")
      .then((response) => response.json())
      .catch((e) => {
        //   alert("levels unavailable");
        throw new Error("server unavailable");
      })
      .then((data) => {
        return setClasses(data.split(" "));
      });
  }
  /**
   * Obtain ability scores based on selected race
   * */
  const getAbilityScores = async () => {
    if (selectedRace) {
      await fetch("http://localhost:4567/ability?race=" + selectedRace.value)
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

  /**
   * Set character name using user input
   * */
  const handleNewName = (event) => {
    setName(event.target.value);
  };

  /**
   * Obtain dice roll score from the server
   * */
  async function getScore() {
    await fetch("http://localhost:4567/creationroll")
      .then((response) => response.json())
      .catch((e) => {
        //   alert("races unavailable");
        throw new Error("server unavailable");
      })
      .then((data) => {
        setScore(data);
      });
  }

  /**
   * Update an ability score after rolling a dice
   * */
  const setAbility = (setAb, old) => {
    if (old + score < 21) {
      setAb(old + score);
    }
  };

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
          onChange={setStrength}
          onClick={() => {
            getScore();
            setAbility(setStrength, strength);
          }}
        />
        <Ability
          label={"charisma score"}
          readonly={true}
          type={"text"}
          placeholder={"score"}
          value={charisma}
          onChange={setCharisma}
          onClick={() => {
            getScore();
            setAbility(setCharisma, charisma);
          }}
        />
        <Ability
          label={"dexterity score"}
          readonly={true}
          type={"text"}
          placeholder={"score"}
          value={dexterity}
          onChange={setDexterity}
          onClick={() => {
            getScore();
            setAbility(setDexterity, dexterity);
          }}
        />
        <Ability
          label={"intelligence score"}
          readonly={true}
          type={"text"}
          placeholder={"score"}
          value={intelligence}
          onChange={setIntelligence}
          onClick={() => {
            getScore();
            setAbility(setIntelligence, intelligence);
          }}
        />
        <Ability
          label={"wisdom score"}
          readonly={true}
          type={"text"}
          placeholder={"score"}
          value={wisdom}
          onChange={setWisdom}
          onClick={() => {
            getScore();
            setAbility(setWisdom, wisdom);
          }}
        />
        <Ability
          label={"constitution score"}
          readonly={true}
          type={"text"}
          placeholder={"score"}
          value={constitution}
          onChange={setConstitution}
          onClick={() => {
            getScore();
            setAbility(setConstitution, constitution);
          }}
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
