import React from "react";
import HomePage from "../index";
import CharacterPageService from "../service";

describe("Testing fetch", () => {
  it("Tests getBackgrounds", async () => {
    const backgrounds = await CharacterPageService.getBackground();
    expect(backgrounds).toEqual("ACOLYTE CRIMINAL SOLDIER");
  });
  it("Tests getClasses", async () => {
    const classes = await CharacterPageService.getClasses();
    expect(classes).toEqual("CLERIC FIGHTER ROGUE");
  });
  it("Tests getRaces", async () => {
    const races = await CharacterPageService.getRaces();
    expect(races).toEqual("HUMAN ELF DWARF HALFLING");
  });
  it("Tests getScore", async () => {
    const score = await CharacterPageService.getScore();
    expect(score).toBeLessThan(20);
    expect(score).toBeGreaterThan(3);
  });

  // it("Tests getAbilityScore", async () => {
  //   const raceScore = await CharacterPageService.getAbilityScores("HUMAN");
  //   expect(raceScore.charisma).toEqual(1);
  // });
  // TODO: GET PASSING STRINGS TO BACKEND TO WORK

  it("Tests getSelectedCharacter", async () => {
    const stats = {
      background: "CRIMINAL",
      classtype: "ROGUE",
      charisma: 3,
      constitution: 13,
      current_health: 5,
      dexterity: 16,
      gold_coins: 15,
      intelligence: 5,
      level: 1,
      max_health: 5,
      name: "Steve The Sneaky",
      race: "HALFLING",
      strength: 10,
      wisdom: 6,
    };
    const selectedCharScore = await CharacterPageService.getSelectedChar(
      "Steve The Sneaky"
    );
    expect(selectedCharScore).toEqual(stats);
  });
});
