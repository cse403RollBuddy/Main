package Back_End;
import static spark.Spark.*;
import com.google.gson.Gson;
import com.google.gson.stream.JsonReader;

import java.io.IOException;
import java.io.StringReader;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
//import CORSFilter.java;
//import ExampleDataTransfer.java;
import java.util.Map;


public class SparkServer {


    /**
     * The main serve method that is run by the Spark Server, includes all the GET paths that the front end
     *  uses to communicate to the backend
     * 
     * @param args, nothing needed from user to run in this case
     * @throws IOException, Throws an IOException if the system was unable to read/write to a file
     */
    public static void main (String[] args) throws IOException {

        Gson gson = new Gson();
        Character beingCreated = new Character();
        initExceptionHandler((e) -> System.out.println("Uh-oh"));
        CORSFilter corsFilter = new CORSFilter();
        corsFilter.apply();
        List<Character> charList = Character.createListOfCharacters(Character.getCharNames());

        //An example get path, not used for anything besides testing
        get("/data", (req, res) -> {
            ExampleDataTransfer example = new ExampleDataTransfer();
            return example.getData();
        });

        //An example path used for testing, who doesn't like saying hi the world?
        get("/hello", (req, res) -> "Hello world");

        // matches "GET /hello/foo" and "GET /hello/bar"
        // request.params(":name") is 'foo' or 'bar'
        get("/hello/:name", (request, response) ->
                "Hello: " + request.params(":name")
        );

        // returns the result of rolling numDice dice, each of which is a faces-sided die
        // e.g. /roll/4/6 returns a list which contains 4 random values from 1-6
        get("/roll/:numDice/:faces", (req, res) ->
                Dice.Roll(Integer.parseInt(req.params(":numDice").trim()),
                          Integer.parseInt(req.params(":faces").trim()))
        );

        // rolls 4d6, drops the lowest, sums the result, and returns it
        get("/creationroll", (req, res) -> {
            List<Integer> result = Dice.Roll(4, 6);
            result.sort(Integer::compareTo);
            result.remove(0);
            return result.stream().mapToInt(Integer::intValue).sum();
        });

        // Rolls a d20 and adds the characters profiency to it
        // USES beingCreated AS THE CURRENT CHARACTER, IS THAT CORRECT?
        get("/abilityroll", (req, res) -> {
            String ability = req.queryParams("ability");
            int proficiency;
            switch(ability) {
                case "charisma" : proficiency = beingCreated.get_charisma();
                case "constitution" : proficiency = beingCreated.get_constitution();
                case "dexterity" : proficiency = beingCreated.get_dexterity();
                case "intelligence" : proficiency = beingCreated.get_intelligence();
                case "strength" : proficiency = beingCreated.get_strength();
                case "wisdom" : proficiency = beingCreated.get_wisdom();

                default: proficiency = 0;
            }
            return Dice.RollAC((proficiency / 2) - 5);
        });

        // sets the character's name
        get("/create", (req, res) -> {
                    String param = req.queryParams("name");
                    beingCreated.set_name(param);
                    return 0;
        });

        //Sets the class of the character being made, not used currently by the front end.
        get("/setclass", (req, res) -> {
           String characterClass = req.queryParams("class").toUpperCase();
           switch (characterClass) {
               case "FIGHTER": beingCreated.set_class(Classes.FIGHTER); break;
               case "CLERIC":  beingCreated.set_class(Classes.CLERIC); break;
               case "ROGUE":   beingCreated.set_class(Classes.ROGUE); break;
           }
           return 0;
        });

        //Sets the background of the character being made, not used currently by the front end.
        get("/setbackground", (req, res) -> {
            String background = req.queryParams("background").toUpperCase();
            switch (background) {
                case "ACOLYTE":  beingCreated.set_background(Backgrounds.ACOLYTE); break;
                case "CRIMINAL": beingCreated.set_background(Backgrounds.CRIMINAL); break;
                case "SOLDIER":  beingCreated.set_background(Backgrounds.SOLDIER); break;
            }
            return 0;
        });

        // sets the character's race and returns a useful map to the frontend
        get("/ability", (req, res) -> {
            HashMap<String, Integer> abilities = new HashMap<>();
            String race = req.queryParams("race").toUpperCase();
            abilities.put("Strength", 0);
            abilities.put("Dexterity", 0);
            abilities.put("Constitution", 0);
            abilities.put("Intelligence", 0);
            abilities.put("Wisdom", 0);
            abilities.put("Charisma", 0);
            switch (race) {
                case "HUMAN": abilities.put("Strength", 1);
                              abilities.put("Dexterity", 1);
                              abilities.put("Constitution", 1);
                              abilities.put("Intelligence", 1);
                              abilities.put("Wisdom", 1);
                              abilities.put("Charisma", 1);
                              break;
                case "ELF":   abilities.put("Dexterity", 2);
                              abilities.put("Wisdom", 1);
                              break;
                case "DWARF": abilities.put("Constitution", 2);
                              abilities.put("Strength", 2);
                              break;
                case "HALFLING": abilities.put("Dexterity", 2);
                                 abilities.put("Constitution", 1);
                                 break;
            }
            return gson.toJson(abilities);
        });

        // for the frontend to get the list of possible Backgrounds
        get("/background", (req, res) -> gson.toJson("ACOLYTE CRIMINAL SOLDIER"));

        // for the frontend to get the list of possible Classes
        get("/classes", (req, res) -> gson.toJson("CLERIC FIGHTER ROGUE"));

        // for the frontend to get the list of possible Races
        get("/races", (req, res) -> gson.toJson("HUMAN ELF DWARF HALFLING"));

        // shuts down the server
        get("/shutdown", (req, res) -> {
            stop();
            return "Server successfully shutdown.";
        });

        // returns a list of the character names that live in the CharacterFiles directory
        get("/characters", (req, res) -> {
            List<String> chars = new ArrayList<>();
            for (Character c : charList) {
                chars.add(c.get_name());
            }
            return gson.toJson(chars);
        });

        //Returns the character with the given name, or an empty character if none is made
        get("/select-character", (req, res) -> {
            String name = req.queryParams("name");
            for (Character c : charList) {
                if (c.get_name().equals(name)) { return gson.toJson(c); }
            }
            return gson.toJson(new Character());  // if something went wrong, get an empty character!
        });

        // saves character info to file
        get("/new-character", (req, res) -> {
            Character.verifyDirectoryAndCharacterFiles();
            JsonReader reader = new JsonReader(new StringReader(req.queryParams("character")));
            reader.setLenient(true);
            Map newCharInfo = gson.fromJson(reader, Map.class);

            System.out.println(newCharInfo);

            String name = (String) newCharInfo.get("name");
            String race = (String) newCharInfo.get("race");
            String background = (String) newCharInfo.get("background");
            String char_class = (String) newCharInfo.get("class");
            int strength = (int) (double) newCharInfo.get("strength");
            int dexterity = (int) (double) newCharInfo.get("dexterity");
            int constitution = (int) (double) newCharInfo.get("constitution");
            int intelligence = (int) (double) newCharInfo.get("intelligence");
            int wisdom = (int) (double) newCharInfo.get("wisdom");
            int charisma = (int) (double) newCharInfo.get("charisma");

            Character newChar = new Character();
            newChar.set_name(name);
            newChar.set_strength(strength);
            newChar.set_dexterity(dexterity);
            newChar.set_intelligence(intelligence);
            newChar.set_wisdom(wisdom);
            newChar.set_constitution(constitution);
            newChar.set_charisma(charisma);
            newChar.set_race(Races.valueOf(race));
            newChar.set_class(Classes.valueOf(char_class));
            newChar.set_background(Backgrounds.valueOf(background));

            // write character
            Character.writeCharacterToFile(newChar);
            charList.add(newChar);
            return gson.toJson(newCharInfo);
        });
    }
}