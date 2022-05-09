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

const CharacterPageService = { getRaces, getBackground, getClasses };
export default CharacterPageService;
