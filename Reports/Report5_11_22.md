Team meetings at 2:04 pm Thursdays.


## Team meeting Agenda

(5/11/22)



    * Idk what to put here the beta release kind of fried us. Probably talking through the reflection points we wrote on Slack?
    * Help with properly testing the server in a single command
    * Help with testing all components working together (as a single command??)


## Team Report 



* Goals from Last Week:
    * Set up some basic file I/O to start storing/reading data
    * Create a test suite for the D&D character class java class
    * Create the D&D character class java class
    * Set up UI component layout for create_character page
    * Create form components for character creation
    * Finish unit test setup for testing front end components 
* Report on Progress and Issues: 
    * We reached the biggest milestone of our project – beta release! It involved a lot of work on everyone's part, but we were able to put something together to demo! We had a fair bit of the coding done on both sides but we spent a lot of time working on integrating the backend to the frontend and vice versa. JavaScript continues to be our least favorite language. Plenty of bugs, but most were resolved in group meetings and we did a lot of pair programming which cut down on the mistakes we made.  
* Goals for the Week:
    * Update test suite
    * Fix functionality of loading from a character
    * Fix homepage to display loadable characters
    * Start work on ability check rolls


## Contributions of individuals



* Goals from Last Week:
    * Hunter
        * Work on setting up use cases and working with the backend.
        * Creating more tests to allow for users styled components to get tested
    * Joan
        * Work on style components needed for the character page
        * Focus on UI components design for the character page ( more than 15 steps in the use case and many components involved) 
        * Add unit test for existing components when the set up is finished 
    * Steven
        * Help with writing any backend code that is needed for the beta release
        * Give input on spec and implementations for backend code
        * Help write unit tests for backend code
        * Try to figure out how to properly test the webserver (i.e., bring it down cleanly)
    * Allie
        * Finish the Player Character java class
        * Finish the Dice Roll player class
        * Ensure that we have Create a Character and Load a Character use cases functional for our beta release
    * Jacob
        * Finish Player Character (PC) java class
        * Write a test suite for the PC class
        * Write the PC class and ensure that it can write to a file and read from a file in order to save the user’s data.
* Report on Progress and Issues: 
    * Hunter - I worked with Joan to complete the UI and make our primary use case functional for the beta. I spent a lot of time working with the back end to understand what form the information should be that we needed to pass back and forth. I did significant work getting the Character Creation and Character Load use cases ready for the Beta video.
    * Joan -  I completed the UI for character creation (for beta release), created Ability components that can be used to display and update ability scores; implemented dice roll and score update functionalities at the frontend level. The biggest issue for me this week was figuring out how to send data to the backend and how to process the received data. But it’s also a great learning experience about working as a team and effective communication. I did not work on frontend unit tests and I would like to confirm with the team whether or not we can focus on visual tests by actually playing the game instead of unit tests.  
    * Steven - There was a lot to do this week to get ready for the beta release; this was a good learning experience. Allie and I spent a few hours over the weekend working on the concrete implementation of a Character object. I spent several hours googling, looking through documentation, and hand-testing the file read/write code step-by-step over the weekend to try to make sure it was doing what it was supposed to for a “general user”, and I still left a major bug in there that we only caught late last night… sweaty. I also wrote a bunch of ‘get’ paths and their respective code in SparkServer.java, some useful, some not. This was also a good lesson in making sure we have solid specifications and communication between the frontend and backend teams. I wish I had written more unit tests for the static methods I wrote in the Character class (not to mention probably factoring them out into a Utilities class so that Character isn’t such a god class…), but I was fairly unfamiliar with Java file i/o stuff, so that probably affected my ability to write clear spec before a fair amount of trial/error, and the clock was ticking.
    * Allie - This week was a TON of work. Steve and I wrote the Character and Roll classes, into which we encoded much of the game rules needed to carry out our character creation use cases. These will also be necessary for our other main use cases, leveling up and performing the game play dice rolls. We also chose to use enums for our classes, races, and backgrounds. This should make it relatively easy to add more in another update. Finally, I did significant work on the beta release. I worked with the whole team getting the create a character use case to function as intended. I  wrote our script for the video, making sure to highlight the aspects of our project that we are most proud of, and ensuring we mentioned everything listed in the assignment requirements. I also made the slides for the reflection portion, talking with the team to get their input and trying to sum up what we’ve learned over the last 6 weeks of work.
    * Jacob - This week was brutal. The beta release proved to be a bit more work than we were expecting. I was away this weekend traveling so I was not as helpful as I would have liked before monday. The hack day was helpful, but I spent most of it helping Allie fix her gradle setup. Sometimes gradle has trouble finding a java installation, which is annoying but this also happened with Hunter and so this made it easier to help him and we put a warning about this issue inside of our README. I helped Steve and Hunter slightly, but most of my work was administrative this week, updating the README and writing the team report as well as helping Allie make the slides for our Beta demonstration.
* Goals for the week: (bullet points)
    * Hunter
        * Work on documentation and testing.
        * Work with Joan to complete the design of the Play page.
        * Begin work on the next use cases, updating character data in the play page and performing an ability roll.
    * Joan
        * Work on style components needed for the play page
        * Continue to work on UI design for character creation and the play page based on the rest of the use cases
    * Steven
        * Write meaningful unit tests for as much of the backend code as possible
        * Work on a bash script that can test the server by bringing it up, executing all the ‘get’ paths that are relevant to the program, logging the output somehow, and shutting the server down.
        * Work on documentation and the upcoming week’s assignment
        * Begin spec/implementation for ability score rolling and modifier tracking
    * Allie
        * Ensure that our documentation is complete: make sure the documentation for our back end code follows javadocs,  make sure the method specifications are clear so that we eliminate miscommunications with the front end about what the methods actually return.
        * Create a more robust testing suite. We focused on getting the functionality finished for the beta release, but we have not done adequate testing of the new code we added.
        * Work on the documentation assignment due next week! We need to get started early to make sure all the required documentation for users is written and collected where the assignment specifies.
    * Jacob
        * Create a specification for rolling ability checks
        * Share said spec with frontend, ensure they understand the inputs/outputs
        * Begin writing the ability checks function
        * Update test suite

Notes from Team meeting: 
