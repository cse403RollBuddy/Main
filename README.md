# Project: RollBuddy

Living Document: https://docs.google.com/document/d/1HkBncd28IhJP_KtGiDg5ODc6LID7TRu02IcbO1d5rKc/edit?usp=sharing

## Idea

Our project proposes to create an application that allows D&D5E players to create or import characters, track changing aspects to the character through multiple play sessions, and view character information in an intuitive UI. Most importantly, it will also tell players what their bonuses are to various kinds of rolls, allow players to actually simulate rolling the dice within the application, and automatically apply the modifiers to display the final result.


## Goals

Major Features:


1. Create a character and populate necessary numeric fields during creation (or import info); character info persists across sessions. OPERATIONAL
2. Load a previously created character. OPERATIONAL
3. Update numbers upon certain events (e.g. gaining experience points or gold or taking damage).
4. Level up a character when enough experience points are earned, and then updating stats, abilities, and dice modifiers as appropriate.
5. Perform ability check dice rolls with appropriate dice and modifiers.


Stretch Goals:


1. Perform combat rolls, including saving throws, AC checks, to-hit rolls, and damage rolls, all with appropriate dice and modifiers.
2. Perform spell rolls, including spell checks and spell damage, with appropriate dice and modifiers.
3. Create new characters via importing data from a properly formatted file. OPERATIONAL
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

## Instruction to build and test the system
### Backend server
* System requirement:
    * Java 11 or higher
* Run the system:
    - In the main directory (~/Main/) run the commands: *./gradlew build* then *./gradlew run*
* Trouble shooting:
    - If the build fails, run *./gradlew build --stacktrace*.
        - If any warnings come up about not being able to find tools.jar or  "org.gradle.api.tasks.TaskExecutionException: Execution failed for task :compileJava" , ensure you have your system PATH varaible pointing to the correct JAVA_HOME
         
### Frontend 
* System requirement: 
   * node.js
   * npm
* Run the System:
  - Under the directory of Front_End, run the command:   *npm start*
* Trouble-shooting: 
  - you might run into react-scripts: command not found Error, then try install react-scripts with command:
  *npm i react-script*

### Testing
* From the main directory, run *./gradlew test* to test the current implementation against the test suite. This automatically builds the system as well if needed.

### Running the system

1. Ensure you have the correct system requirements for both Backend and Frontend
2. From a terminal, clone the GitHub repo and enter the newly created directory
3. In the overall directoy (i.e. ~/Main/), run *./gradlew build* then *./gradlew run*
4. In another terminal, navigate to the Front End directory (i.e. ~/Main/Front_End/) and run *npm start*
5. A webstie should pop up in your default bowser, enjoy Roll Buddy!


