#Developer Guidelines


##Obtain Source Code:

Clone the repository with ‘git clone [https://github.com/cse403RollBuddy/Main.git](https://github.com/cse403RollBuddy/Main.git)’


##Layout of Directory Structure:

* Front_End: This is where the front end code lives. The react application code is here, as well as integration test code.
* Reports: This is for weekly reports on the progress of the application.
* .github/workflows: This workflow allows for the CI environment on GitHub to use gradle to test the application.
* gradle/wrapper: This provides the gradle wrapper that allows building and testing of the Spark server to build and run the backend.
* Src: this is where the back end code lives.
    * test/java: This is where the back end test code can be found.
    * main/java/backend: This is where the back end code can be found, including the character files, SparkServer code, CORSFilter, Character class, Dice class, and relevant enums for Race, Background, and Class can be found.


##Instructions to Build and Test the System:

Backend server:

* System requirement:
    * Java 11 or higher
* Run the system:
    * In the main directory (~/Main/) run the commands: ./gradlew build then ./gradlew run
* Trouble shooting:
    * If the build fails, run ./gradlew build --stacktrace.
        * If any warnings come up about not being able to find tools.jar or "org.gradle.api.tasks.TaskExecutionException: Execution failed for task :compileJava" , ensure you have your system PATH varaible pointing to the correct JAVA_HOME

Frontend

* System requirement:
    * Node.js
    * npm
* Run the System:
    * Under the directory of Front_End, run the command: npm start
* Trouble-shooting:
    * you might run into react-scripts: command not found Error, then try install react-scripts with command: npm i react-script

Testing

* From the main directory, run ./gradlew test to test the current implementation against the test suite. This automatically builds the system as well if needed.


##Running the system

1. Ensure you have the correct system requirements for both Backend and Frontend
2. From a terminal, clone the GitHub repo and enter the newly created directory
3. In the overall directory (i.e. ~/Main/), run ./gradlew build then ./gradlew run
4. In another terminal, navigate to the Front End directory (i.e. ~/Main/Front_End/) and run npm start
5. A website should pop up in your default browser, enjoy Roll Buddy!

##Adding New Tests:

To add new tests for the front end, add the tests to some file. To add new tests to the back end, edit the file backEndTestTests.java in ~/Main/src/test/java. Follow the format of existing tests: use @Test before the test method, provide a comment describing what the test is testing for, and provide a descriptive name for the method that starts with ‘test’, e.g. ‘testRollAC()’.

##To Build a Release of the Software:

Update the version number in a pull request. All testing should be automated. After building a release, a developer should follow the build instructions to ensure that the application loads and opens correctly.
