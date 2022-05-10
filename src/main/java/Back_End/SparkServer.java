package Back_End;
import static spark.Spark.*;
import com.google.gson.Gson;

import java.util.HashMap;
//import CORSFilter.java;
//import ExampleDataTransfer.java;


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
                case "ACOLYTE":  beingCreated.set_background(Backgrounds.ACOLYTE);
                case "CRIMINAL": beingCreated.set_background(Backgrounds.CRIMINAL);
                case "SOLDIER":  beingCreated.set_background(Backgrounds.SOLDIER);
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
                              beingCreated.set_race(Races.HUMAN);
                              break;
                case "ELF":   abilities.put("Dexterity", 2);
                              abilities.put("Wisdom", 1);
                              beingCreated.set_race(Races.ELF);
                              break;
                case "DWARF": abilities.put("Constitution", 2);
                              abilities.put("Strength", 2);
                              beingCreated.set_race(Races.DWARF);
                              break;
                case "HALFLING": abilities.put("Dexterity", 2);
                                 abilities.put("Constitution", 1);
                                 beingCreated.set_race(Races.HALFLING);
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

    }
}