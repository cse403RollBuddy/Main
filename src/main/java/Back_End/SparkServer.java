package Back_End;
import static spark.Spark.*;
import com.google.gson.Gson;

import java.util.HashMap;
import java.util.List;
//import CORSFilter.java;
//import ExampleDataTransfer.java;
import java.util.Map;


public class SparkServer {


    public static void main (String[] args) {

        Gson gson = new Gson();
        Character beingCreated = new Character();

        initExceptionHandler((e) -> System.out.println("Uh-oh"));
        CORSFilter corsFilter = new CORSFilter();
        corsFilter.apply();

        get("/data", (req, res) -> {
            ExampleDataTransfer example = new ExampleDataTransfer();
            return example.getData();
        });
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

        // sets the character's name
        get("/create", (req, res) -> {
                    String param = req.queryParams("name");
                    beingCreated.set_name(param);
                    return 0;
        });

        get("/setclass", (req, res) -> {
           String characterClass = req.queryParams("class").toUpperCase();
           switch (characterClass) {
               case "FIGHTER": beingCreated.set_class(Classes.FIGHTER); break;
               case "CLERIC":  beingCreated.set_class(Classes.CLERIC); break;
               case "ROGUE":   beingCreated.set_class(Classes.ROGUE); break;
           }
           return 0;
        });

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

        // saves character info to file
        post("/save", (req, res) -> {
            Character.verifyDirectoryAndCharacterFiles();
            String character = req.queryParams("character").toUpperCase();
            Map map = gson.fromJson(character, Map.class);

            //Set Ability Scores
            beingCreated.set_strength((Integer) map.get("strength"));
            beingCreated.set_charisma((Integer) map.get("charisma"));
            beingCreated.set_dexterity((Integer) map.get("dexterity"));
            beingCreated.set_intelligence((Integer) map.get("intelligence"));
            beingCreated.set_wisdom((Integer) map.get("wisdom"));
            beingCreated.set_constitution((Integer) map.get("constitution"));

            //Set info
            beingCreated.set_name((String) map.get("name"));
            beingCreated.set_race(Races.valueOf((String) map.get("race")));
            beingCreated.set_background(Backgrounds.valueOf((String) map.get("background")));
            beingCreated.set_class(Classes.valueOf((String) map.get("class")));

            // write character
            Character.writeCharacterToFile(beingCreated);
            return "Successfully written to file";
        });
    }
}