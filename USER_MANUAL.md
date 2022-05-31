# User Manual

RollBuddy is a D&D Character Sheet Companion. It is an application that replaces the traditional character sheet used by players of the tabletop role playing game Dungeons & Dragons (or D&D), and allows D&D5E players level up their D&D playing experience. This application provides a digital version of the traditional D&D character sheet, with some modern upgrades. With RollBuddy, players can create or import characters, track changing aspects to the character through multiple play sessions, and view character information in an intuitive UI. Most importantly, it will also tell players what their bonuses are to various kinds of rolls, allow players to actually simulate rolling the dice within the application, and automatically apply the modifiers to display the final result.


## Installation Guide

1. Install JDK 11, instructions and download found here ([https://www.oracle.com/in/java/technologies/javase/jdk11-archive-downloads.html](https://www.oracle.com/in/java/technologies/javase/jdk11-archive-downloads.html))
2. Install node.js, instructions and download found here ([https://nodejs.org/en/download/](https://nodejs.org/en/download/))
3. Install npm, instructions and download found here ([https://docs.npmjs.com/downloading-and-installing-node-js-and-npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm))
4. From a terminal (e.g. Windows Powershell, Command Prompt,etc), navigate to the directory where you want to install RollBuddy
5. Input the command ‘git clone [https://github.com/cse403RollBuddy/Main.git](https://github.com/cse403RollBuddy/Main.git)’, this will install the application
6. Navigate into the directory, this is the overall RollBuddy directory
7. From here,navigate into the directory Front_End (~/Main/Front_End)
8. Run ‘npm i react-script’
9. Run ‘npm i styled-components’


## Start Guide:

1. Open a terminal window
2. Navigate to the overall RollBuddy directory
3. Run ‘./gradlew build’
4. Run ‘./gradlew run’
5. Open another terminal window
6. Navigate to the overall RollBuddy directory
7. Navigate into the Front_End directory (~/Main/Front_End)
8. Run ‘npm start’
9. A webpage will open in your browser, this is the RollBuddy application!


## Use Guide:

1. Follow the start guide to open the application. This takes you to the front page of the application
2. Click ‘Enter Homepage’ to begin.
3. Click ‘Create a Character’ to create a character.
4. Enter a name, and choose the Race, Class, and Background. Then click ‘ROLL DICE’ next to each Ability Score to roll for that score.
5. Once you have created the character, click ‘Update and Play’ to use this character
6. Work in Progress: to update character information during play, use buttons to change the current health points, gold coins, or experience of the character.
7. Work in Progress: to roll the dice during play, use dropdown menus to select what kind of roll, then press the button to simulate the roll and see the result


## Report a Bug:

If you encounter a bug with the software, please let us know! You can report bugs here ([https://github.com/cse403RollBuddy/Main/issues](https://github.com/cse403RollBuddy/Main/issues)) by clicking “New Issue” on the right side of the browser.

In your bug report, please follow this template.

```
Title: short, descriptive name
Component: what part of the application does it effect?
Version: what version of the software has the bug?
OS: which operating system are you using?
Browser: which browser are you using?
Detailed Description: go into the details of the problem you encountered
Steps to Reproduce: describe the steps to encounter this bug
Actual Results: what the application did after you encountered the bug
Expected Results: what the application should have done instead
```

For more information about how to write a helpful bug report, refer to this page here ([https://bugzilla.mozilla.org/page.cgi?id=bug-writing.html](https://bugzilla.mozilla.org/page.cgi?id=bug-writing.html))
