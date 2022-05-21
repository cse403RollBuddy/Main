Team meetings at 2:04 pm Thursdays.


## Team meeting Agenda

(5/11/22)



    * Discuss the peer review process
        * Is this something that we should all do alone or as a group?
        * Check-in with Thomas: how does he see our progress going (relative to other groups and/or course expectations)? Anything he’s worried about us finishing or doing correctly as we make a push toward the end?


## Team Report 



* Goals from Last Week:
    * Update test suite
    * Fix functionality of loading from a character
    * Fix homepage to display loadable characters
    * Start work on ability check rolls
* Report on Progress and Issues: 
    * This week was another busy one, but not because of this class. We all had significant work loads in our other classes so this project was left to the wayside temporarily. We all updated documentation and tests in our own time, really only talking as a group during our group meeting on 5/17. There is a bit more to do in order to have our final product, but we are in a good spot in terms of this class. Motivation continues to dwindle as the weather improves and summer break tempts us further.
* Goals for the Week:
    * Complete the Peer review assignment
    * Finish ability check roll logic
    * Implement ability checks in the front end


## Contributions of individuals



* Goals from Last Week:
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
* Report on Progress and Issues: 
    * Hunter - I have written and sent out the integration testing to make the fetch calls more portable and testable. I would also like to allow the UI to run the backend instance when the test get run with one button rather than just having to run them separately. Next week we are going to implement more functionality for the final product which I am excited for. 
    * Joan -  After a productive discussion with Allie, I have a much better understanding of the UI and I have updated the UI design in figma for the play page and character page. Since we use react function components instead of react classes, I find generating react documentation doesn’t work well with our program. So instead, I wrote the documentation with descriptions for all the react components over the weekend. 
    * Steven - Looking back at my goals from last week, I didn’t get as much done this week on the project as I would have liked. Echoing others here, this past week has been a busy time of the quarter in multiple other classes for me. That said, I updated some logic shortly after the beta release that eventually made its way to the main branch, I added some javadoc to the static methods in Character.java, and I helped review and merge some pull requests this week. I should have a tiny bit of daylight in the coming days to add some tests to the backend suite and possibly work on whatever automated testing can be done for the server. I’d also like to contribute to the ability check code/spec if time permits.
    * Allie - I took a step back from this project after the hyperfocus of getting the beta release out. Also I had a lot of work to do in my other class! But, I worked on getting our GitHub documentation prepared for the assignment this week. I wrote the User Manual and Developer Guidelines with input from the rest of the team. I also worked on doing the “correct” git project flow, so I worked on checking pull requests, looked at code documentation that other developers wrote, and read through tests.
    * Jacob - This week I primarily focus on my other classes, but I managed to put in some good progress for this project. I implemented the ability check logic and added the GET path to access it on the Spark server. Aside from that I added some documentation and helped others make pull requests. Pull requests were kind of the name of the game this week as we merged a lot of things into our main branch. I definitely learned a lot about pull requests, how to review them, add to them, comment on them, etc. which has been very helpful. 
* Goals for the week: (bullet points)
    * Hunter
        * Finish design for the play page with Joan and the backend team.
        * Finish porting over the fetch calls into the service page
        * Get the service tests to run with the backend with one function call. 
    * Joan
        * Finish HomePage with a form component that lists all saved characters
        * Work on PlayPage to display saved characters, and when user picks a character, display data for the selected character
        * Work on Dice Roll function 
    * Steven
        * Write meaningful unit tests for as much of the backend code as possible (including the server)
        * Contribute to the new functionality that we need to implement in the backend
    * Allie
        * Get the Ability Check roll use case working! 
        * Start working on Update Value use cases (update current health, experience, and gold coins)
    * Jacob
        * Peer review other group’s project
        * Help Hunter with implementing Ability check roll on the front end. 
        * Add more Javadoc comments
        * Not lose motivation before the end of the quarter

Notes from Team meeting: 
