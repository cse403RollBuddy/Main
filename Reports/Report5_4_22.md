## Team Report 



* Goals from Last Week:
    * Set up gradle, ensure the dependencies don’t handicap us
    * Set up some basic file I/O to start storing/reading data
    * Complete the Testing and CI assignment for 5/03
    * Set up some basic testing to continuously test our main branch every time there is a pull request.
* Report on Progress and Issues: 
    * This week was productive! The backend team got  our build system up and running as well as Continuous Integration set up so that every time a pull request occurs, the new code is compiled and checked against the test suite. The test suite is pretty lackluster as well as our code, but with these systems in place coding should be effortless now. We also drafted a UI that really helped us get on the same page as to what this program is doing so the mental model between front and back end is becoming more unified. Frontend also created containers for the 4 user views(pages) and created button components to jump between pages. Unfortunately, the frontend test setup encountered some issues with the Mocha test framework and needed additional time to complete the test setup.    
* Goals for the Week:
    * Set up some basic file I/O to start storing/reading data
    * Create a test suite for the D&D character class java class
    * Create the D&D character class java class
    * Set up UI component layout for create_character page
    * Create form components for character creation
    * Finish unit test setup for testing front end components 


## Contributions of individuals



* Goals from Last Week:
    * Hunter
        * Set up tasks for Joan to complete with components.
        * Work with the backend team in order to get the CORS filter information working so the full stack operations will be possible.
    * Joan
        * Work on UI design the character page and play page
        * Understand the workflow between frontend and backend and start implementing basic UI components such as button and dropdown.  
        * Help to set up build and test
    * Steven
        * Get the build system set up for the whole project (I’m thinking gradle since there was a demo, and I don’t have any other experience with build systems)!
        * Continue filtering information about Ability Checks into the backend notes documents
        * Get test framework set up for backend programming
        * Begin writing backend code
    * Allie
        * Work with Steven to implement gradle for our build system
        * Finish use cases for all main features and stretch goals
        * Finish glossary
        * Finish Character class
        * Begin implementing classes for races, classes, and backgrounds
    * Jacob
        * Create a general spell class for the backend
        * Set up the gradle so everyone can run both the server and the frontend. 
        * Become familiar with table based testing
        * Talk with Allie and Steve to see how I can help them. My frontend skills make me think that I would be more a hindrance than a help to Joan and Hunter.
* Report on Progress and Issues: 
    * Hunter- 
    * Joan -  Created the four user views in sigma and discussed with the team to finalize on the workflow between them. Created title components and containers for play page and character page in the front end branch. Researched for the test set up for the front end UI components.
    * Steven - This week, I helped get Gradle set up for our project with Allie and Jacob, which will build all the backend code and run the tests on it. I got the webserver up and running with the new build system, and it has now been merged into main. In theory, everyone can verify that the backend can talk to the frontend on their own machine at this point; no one has reported problems yet, so that is probably good. We also got JUnit set up to work with gradle and with GitHub Action, so we seem to have the scaffolding for our project set up pretty well right now. We have limited our scope a bit, so it’s probably now time to start writing more actual code. I think everything is going great so far!
    * Allie - I got a ton done this week! The biggest thing was implementing Gradle with Jacob and Steven. That took us a big chunk of time over the weekend because none of us had ever set it up before, so we did some tests with a tiny “hello world” java class so we could see how it all worked, and then we got it working with our back end server, so now we can use the gradle wrapper to build the server! I also did more significant work on the documentation and design work. I finished the use cases and the glossary. In doing so, I also reorganized the biggest and most important use case, creating a character. I wanted it to be clear what the MAIN case is, so we can focus on having that functionality for our beta version. We won’t worry about the extensions or variations for this deliverable.
    * Jacob - I did a decent amount of coding this week! I set up gradle with the help of Steve and Allie, and during our group meeting on Tuesday I set up the continuous testing/integration of our system on GitHub Actions. Setting up gradle presented some problems, but nothing we couldn’t figure out with a little time. Besides the coding, I also helped write more of our Design Doc and worked with Steve to consider the pros and cons of the CI service we chose (GitHub Actions) as well as the pros and cons of two other services. Lastly, I began the specification for a java class that represents the player character in our program, that will be fun to actually write code for. Overall, a productive week and I’m excited to get some nice Java coding!
* Goals for the week: (bullet points)
    * Hunter
        * 
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

Notes from Team meeting: 
