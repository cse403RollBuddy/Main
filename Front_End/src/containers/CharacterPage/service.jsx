const getRaces = async () => {
  await fetch("http://localhost:4567/races")
    .then((response) => response.json())
    .catch((e) => {
      //   alert("races unavailable");
      throw new Error("server unavailable");
    })
    .then((data) => {
      return data;
    });
};

const getBackground = async () => {
  await fetch("http://localhost:4567/background")
    .then((response) => response.json())
    .catch((e) => {
      //   alert("background unavailable");
      throw new Error("server unavailable");
    })
    .then((data) => {
      return data;
    });
};

const getClasses = async () => {
  await fetch("http://localhost:4567/classes")
    .then((response) => response.json())
    .catch((e) => {
      //   alert("levels unavailable");
      throw new Error("server unavailable");
    })
    .then((data) => {
      return data;
    });
};

const getAbilityScores = async (race) => {
  const ability = {
    strength: "",
    charisma: "",
    dexterity: "",
    intelligence: "",
    wisdom: "",
    constitution: "",
  };
  await fetch(`http://localhost:4567/${race}-strength`)
    .then((response) => response.json())
    .catch((e) => {
      throw new Error("server unavailable");
    })
    .then((data) => {
      ability.strength = data;
    });

  await fetch(`http://localhost:4567/${race}-charisma`)
    .then((response) => response.json())
    .catch((e) => {
      throw new Error("server unavailable");
    })
    .then((data) => {
      ability.charisma = data;
    });

  await fetch(`http://localhost:4567/${race}-dexterity`)
    .then((response) => response.json())
    .catch((e) => {
      throw new Error("server unavailable");
    })
    .then((data) => {
      ability.dexterity = data;
    });

  await fetch(`http://localhost:4567/${race}-intelligence`)
    .then((response) => response.json())
    .catch((e) => {
      throw new Error("server unavailable");
    })
    .then((data) => {
      ability.intelligence = data;
    });

  await fetch(`http://localhost:4567/${race}-wisdom`)
    .then((response) => response.json())
    .catch((e) => {
      throw new Error("server unavailable");
    })
    .then((data) => {
      ability.wisdom = data;
    });

  await fetch(`http://localhost:4567/${race}-constitution`)
    .then((response) => response.json())
    .catch((e) => {
      throw new Error("server unavailable");
    })
    .then((data) => {
      ability.constitution = data;
    });
  return ability;
};

const CharacterPageService = {
  getRaces,
  getBackground,
  getClasses,
  getAbilityScores,
};
export default CharacterPageService;
