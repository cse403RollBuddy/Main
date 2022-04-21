Team meetings in CSE2 374 at 2:04 pm Thursdays.


## Team meeting Agenda

(4/21/22)



* Talk with Thomas
    * Ask about web server to handle interactions between the Java backend program and the React frontend program; we are thinking about using a setup similar to what was used for CampusPaths in 331; requires a CORSFilter; is this a reasonable approach or does Thomas know of a better/simpler one?
    * Ask questions about the Architecture and Design assignment
        * For architecture, do you just mean Model View Controller? And saying what we’re doing for each component? Or is it more in-depth than that?
        * Any detriments to just using google style guides? 
            * It would probably be good to look at others, any favorites?
        * What kind of risks should we be considering? It feels like the code will not give us many problems
    * 


## Team Report 



* Goals from Last Week:
    * Make the GitHub Repo more structured (front-end/back-end split, more comprehensive README. 
    * Complete the Git setup assignment for 4/19.
    * Make a mock UI so we all have the same idea of the layout of the application.
    * We all have research to do, the topics of which are discussed below
    * Have discussions about work flow and set up JIRA/sprint tracker
* Report on Progress and Issues: 
    * The main thing completed this week was setting up the GitHub repository and ensuring everyone had access to it. Took a bit more work than expected, but now everyone can push and pull. We all had some research that was completed this week, but more can always be done. While we are all excited about this project, we view it primarily as a learning experience. As such, despite GitHub being a hassle to set up, we all learned how to better troubleshoot Git issues. 
* Goals for the Week:
    * Complete the software architecture and design assignment for 4/26
    * Complete a mock UI so we all have the same idea of the layout of the application.
    * Get everyone’s coding environments set up
    * Make separate branches for back-end and front-end work.
    * Get basic infrastructure setup, be able to send a string between back/front end.


## Contributions of individuals



* Goals from Last Week:
    * Hunter
        * Set up front end environment
        * Start grouping for backlog in front end. 
        * Converse with group to make sure environment is set up in their machines
    * Joan
        * Review frontend tool – React NodeGUI and Git knowledge
        * Set up front end environment – React Electron framework
        * Continue to study guideline and essential rules of the game 
        * Start working on UI design (probably start with character sheet)   
    * Steven
        * Filter game rules down to a set of numbers that influence the outcomes of in-game events, and determine what is necessary and sufficient to track these numbers across the set of in-game events that we plan to handle in the application
        * refine/update my use-case, possibly add more use-cases as they come to mind
        * Review Git knowledge
        * Decide on IDE for back-end programming
        * Give input on UI design where appropriate
        * Plan a schedule for how to approach designing/coding up the back-end with Allie and Jacob
    * Allie
        * Review Git knowledge
        * Discuss back-end work flow and collaboration policies with Steven and Jacob
        * Determine “product backlog” for backend with Steven and Jacob
        * Determine priority queue of product backlog
        * Begin compiling “tables of knowledge” for the different choices users have in creating a character
    * Jacob
        * Learn more about React NodeGUI and what might need to be done to set up my front end environment.
        * Talk with Hunter and Joan about our workflow/collaboration policy for frontend
        * Talk with Allie and Steven about our workflow/collaboration policy for backend
        * Plan out exactly what kind of mix of front/back end I want/need to do (more front end? More backend?) 
        * Review Git knowledge (specifically git merging and branches)
* Report on Progress and Issues: (paragraph, free response, talk about your feelings)
    * Hunter- For this week I decided to change our front end application from React NodeGui to Electron. This allows us to have a lot of documentation and its been used more widely which makes it easier to pick up. I have set up the Electron App and pushed it to github. I had to get the SSH set up for my github which was good. 
    * Joan - For this week, I have worked on the git set up and practiced git common commands. I’ve worked on README.md for our project repository and helped make sure all members can update and push to the right git repository. I have set up the React development environment (for both React NodeGUI and React Electron) on my computer. For the decision to switch from NodeGUI to Electron, I’ve done some research and agreed that Electron will be a better option if we consider building a desktop application as the starting point. I also hand sketched the application layout for the starting page.  \
 
    * Steven - Reading through all the material related to character creation was very helpful in forcing me to think about what kinds of things will be reasonable for the minimum viable product to handle. I think it’s also good to start aggregating the game information that will influence the logic in our application into one single source-of-truth that is on the repo; this way, it will be easier to filter and sort that information further as desired. There is still a lot of game-rules information to process and filter in order to correctly handle Ability Checks, Combat, and Spells – but all of that will flow naturally out of tackling character creation first. Allie merged my use-case into hers, which makes sense. I reviewed my git knowledge and will likely use IntelliJ for development.  \

    * Allie - I spent time this week working on compiling information we will use for character creation and computing the various kinds of rolls. I reviewed the DnD 5th Edition sourcebook to look at what races, classes, backgrounds, and equipment we might want to limit our scope to for the purposes of this class. I spent some time discussing with Steven and Hunter how we want our front-end and back-end to connect, but there is still more work to do here. I designed our GitHub layout and worked with Joan on completing the README.md. I made sure my computer is able to sync up with the git repository. I spent the majority of the time going back through our living document, clarifying use cases, and standardizing the terminology we use throughout the document. I’m hoping that if we are all on the same page about what we want to accomplish with the code, and how we talk about these things, we’ll be less likely to have miscommunications, and be more likely to effectively work together. \

    * Jacob - This week was primarily occupied with my other CSE class, so I did not get as much done as I would have hoped for this project. I did get some good git experience on my own and the in-class exercise was as helpful for learning more about Git, specifically Git bisect. I also brushed up the rules of D&D to make sure I wasn’t misremembering anything. Besides that I did a little research on React NodeGUI, but we are switching to React Electron. We had a lot of trouble getting everyone onto the repo, but we figured it out yesterday during our group meeting. Definitely frustrating, but a good learning experience and we are starting to get our repo structured.  \

* Goals for the week: (bullet points)
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