const getRaces = async () => {
  const fetchedData = await fetch("http://localhost:4567/races")
    .then((response) => response.json())
    .catch((e) => {
      //   alert("races unavailable");
      throw new Error("server unavailable");
    })
    .then((data) => {
      return data;
    });
  return fetchedData;
};

const getBackground = async () => {
  const fetchedData = await fetch("http://localhost:4567/background")
    .then((response) => response.json())
    .catch((e) => {
      //   alert("background unavailable");
      throw new Error("server unavailable");
    })
    .then((data) => {
      return data;
    });
  return fetchedData;
};

const getClasses = async () => {
  const fetchedData = await fetch("http://localhost:4567/classes")
    .then((response) => response.json())
    .catch((e) => {
      //   alert("levels unavailable");
      throw new Error("server unavailable");
    })
    .then((data) => {
      return data;
    });
  return fetchedData;
};

const getSelectedChar = async (selectedChar) => {
  const fetchedData = await fetch(
    "http://localhost:4567/select-character?name=" + selectedChar
  )
    .then((response) => response.json())
    .catch((e) => {
      throw new Error("server unavailable");
    })
    .then((data) => {
      return data;
    });
  return fetchedData;
};

const getAbilityScores = async (selectedRace) => {
  if (selectedRace) {
    const fetchedData = await fetch(
      "http://localhost:4567/ability?race=" + selectedRace
    )
      .then((response) => response.json())
      .catch((e) => {
        throw new Error("server unavailable");
      })
      .then((data) => {
        return data;
      });
    return fetchedData;
  }
  return null;
};

const getScore = async () => {
  const fetchedData = await fetch("http://localhost:4567/creationroll")
    .then((response) => response.json())
    .catch((e) => {
      //   alert("races unavailable");
      throw new Error("server unavailable");
    })
    .then((data) => {
      return data;
    });
  return fetchedData;
};

const submitCharacter = async (char) => {
  await fetch("http://localhost:4567/new-character?character=" + char)
    .then((response) => response.json())
    .catch((e) => {
      throw new Error("server unavailable");
    });
};

const CharacterPageService = {
  getRaces,
  getBackground,
  getClasses,
  getAbilityScores,
  getSelectedChar,
  getScore,
  submitCharacter,
};

export default CharacterPageService;
