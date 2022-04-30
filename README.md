# Project: RollBuddy

Living Document: https://docs.google.com/document/d/1HkBncd28IhJP_KtGiDg5ODc6LID7TRu02IcbO1d5rKc/edit?usp=sharing

## Idea

Our project proposes to create an application that allows D&D5E players to create or import characters, track changing aspects to the character through multiple play sessions, and view character information in an intuitive UI. Most importantly, it will also tell players what their bonuses are to various kinds of rolls, allow players to actually simulate rolling the dice within the application, and automatically apply the modifiers to display the final result.


## Goals

Major Features:


1. Create a character and populate necessary numeric fields during creation (or import info); character info persists across sessions.
2. Load a previously created character.
3. Update numbers upon certain events (e.g. gaining experience points or gold or taking damage).
4. Level up a character when enough experience points are earned, and then updating stats, abilities, and dice modifiers as appropriate.
5. Perform ability check dice rolls with appropriate dice and modifiers.


Stretch Goals:


1. Perform combat rolls, including saving throws, AC checks, to-hit rolls, and damage rolls, all with appropriate dice and modifiers.
2. Perform spell rolls, including spell checks and spell damage, with appropriate dice and modifiers.
3. Create new characters viea importing data from a properly formatted file.
4. Apply a temporary buff/debuff to a character that temporarily modifies stat values and affects dice rolls.
5. Provide different interfaces for new players (with more tips and background info) vs. experienced players.


## Layout of the repository 



Main
* README.md
    * This file!
* Front End
    * This folder contains the code for the application, testing code for the application, and a bug journal to help us keep track of bugs in the application
* Back End
    * This folder contains the code for the character class, the code for the rolls, the localhost server, testing code for the backend, and a bug journal to help us keep track of bugs in the back end.
* Reports
    * This folder contains the weekly reports submitted to the project manager, and weekly captures of our living document
