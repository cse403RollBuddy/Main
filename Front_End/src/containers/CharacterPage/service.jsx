const getRaces = async () => {
  await fetch("htt[://localhost:4567/races")
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
  await fetch("htt[://localhost:4567/background")
    .then((response) => response.json())
    .catch((e) => {
      //   alert("background unavailable");
      throw new Error("server unavailable");
    })
    .then((data) => {
      return data;
    });
};

const getLevels = async () => {
  await fetch("htt[://localhost:4567/levels")
    .then((response) => response.json())
    .catch((e) => {
      //   alert("levels unavailable");
      throw new Error("server unavailable");
    })
    .then((data) => {
      return data;
    });
};

const CharacterPageService = { getRaces, getBackground, getLevels };
export default CharacterPageService;
