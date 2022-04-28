Team meetings in ZOOM THIS WEEK at 2:04 pm Thursdays.


## Team meeting Agenda

(4/28/22)



    * Help with gradle setup! We’ve never done this before and we don’t know what we’re doing! :)
    * Is gradle wrapper able to run by itself (i.e. would someone need to install gradle in order to run it)?


## Team Report 



* Goals from Last Week:
    * Complete the software architecture and design assignment for 4/26
    * Complete a mock UI so we all have the same idea of the layout of the application.
    * Get everyone’s coding environments set up
    * Make separate branches for back-end and front-end work.
    * Get basic infrastructure setup, be able to send a string between back/front end.
* Report on Progress and Issues: 
    * This week was decently productive! We still have not coded much, but managed to get a basic pipeline up and running. Our program can now communicate between back and front end. We also took some time to set up a Figma to have a shared workspace to create the UI, this will help massively with making sure everyone is on the same page. Besides that, it was a lot of discussion about the new sections to the design document and of course writing up said document.
* Goals for the Week:
    * Set up gradle, ensure the dependencies don’t handicap us
    * Set up some basic file I/O to start storing/reading data
    * Complete the Testing and CI assignment for 5/03
    * Set up some basic testing to continuously test our main branch every time there is a pull request.


## Contributions of individuals



* Goals from Last Week:
    * Hunter
        * Set up the structure for the components for the frontend.
        * Work on CORS with the backend to send data back and forth
        * Set up figma for the team and learn how to use it
        * 
    * Joan
        * Get input/comments from the team on the initial application layout  
        * Continue to modify and complete the user application layout based on the feedback
        * Work on the mockup interface 
        * write a simple instruction about how to run the React application
    * Steven
        * Write a simple Java web-server to handle GET and POST HTML requests; this will allow information flow between the frontend program and the backend program; use 331 Java web server as a model?
        * Continue D&D research for the application – next up is ability checks; add a notes document to the backend folder with information related to Ability Checks
        * Work on some kind of Class or ER diagram to aid with system design and architecture decisions
        * Begin programming backend systems related to character creation as appropriate
    * Allie
        * Finish updating the requirements/living doc use cases and glossary
        * Work with Steven on ER diagram for how our data interacts, decide if database is best way to go or if we can store data in csv or something else reasonable
        * Create backend branch (still not 100% confident on my git skills, but I know we want a branch for front end and back end so we can each work on things without interfering unduly with the work that the other team is doing)
        * Begin working on “character” class
        * Begin working on “roll” class (?)
    * Jacob
        * Read and follow the quick start guide for React Electron Hunter linked. 
        * Ensure my development tools are up to date (primarily NodeJS and JDK)
        * Ask Allie and Steven if they expect they’ll need any help in these early stages (front end seems like it will take more effort, so I am thinking I should focus on that.)
        * Help Hunter set up git branches.
* Report on Progress and Issues: 
    * Hunter- 
        * Set up figma
        * Set up the configuration for the components/containers for the front end

            I would like to build more components so I can start to delineate more tasks. I would also like to get the CORS information so I can start to build a full stack operation so we know that its configuration is working properly. I think we will need to have a meeting with the backend team to set this up properly. 

    * Joan - 

            Worked with Hunter on the initial UI layout in sigma and shared the link of the file with the team. Worked on the front-end architecture and software design assignment. Revised risk assessment about management of UI layout. Wrote a simple instruction to run React, which would require modification later when build and test are put in place. 

    * Steven - I wrote the local web server in the style of the CSE331 Spark server in Java, and Hunter and I have confirmed that we can get simple data transfers from the Backend to the Frontend via the server on my machine. It was simple to write the actual server, but I went through a few hours of dependency hell trying to figure out how to properly import Spark, and I’m pretty sure no one else wants to go through that. I think getting our shared build-system set up properly should be priority #1. When everyone can pull, compile, test, and run the entirety of the “working app” (i.e., frontend, web server, backend) at any time and without having to worry about dependencies, then I think we will be mostly free to begin programming in earnest. Until we are at that point, though, I think progress will be slow and unpredictable because not everyone will have the same toolchains, libraries, IDEs, etc. \

    * Allie - I spent a ton of time working on overall information for the team. In particular, I spent the bulk of my effort improving and editing the design doc this week. I did more research working through what information we will need to incorporate to implement all of our planned features and our stretch goals. I worked to rewrite our use cases to make them more consistent, make them more applicable to our actual goals, and make them better follow the expected format. I also worked on understanding the relationships of our various kinds of data that will be pulled together to create each character by creating an ER diagram. I also took lead on finalizing and synthesizing our various parts for the assignment on architecture and design of our project. \

    * Jacob - Another week where my contributions have not been stellar. I plan on taking on the gradle implementation and helping others get it working as a way to make up for these past two weeks. The more I research about the front end, the more I feel like I should just focus on working on the backend and supporting everyone. I did feel good with my contribution to the design document. I suppose I feel behind on the coding contributions just because there is not a lot of coding to go around. After the gradle is set up, our ability to start writing cohesive code should skyrocket and I will be able to start making significant contributions. Getting on the same page as Allie and Steven will be paramount, the little time I spent on the frontend wasn’t really productive as I was not nearly caught up as I should have been. \

* Goals for the week: (bullet points)
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
