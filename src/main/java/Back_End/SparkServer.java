package Back_End;
import static spark.Spark.*;
//import CORSFilter.java;
//import ExampleDataTransfer.java;


public class SparkServer {


    public static void main (String[] args) {
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

        get("/roll/:numDice/:faces", (req, res) ->
                Dice.roll(Integer.parseInt(req.params(":numDice").trim()),
                          Integer.parseInt(req.params(":faces").trim()))
        );


        get("/background", (req, res) -> "ACOLYTE, CRIMINAL, SOLDIER");

        get("/classes", (req, res) -> "CLERIC, FIGHTER, ROGUE");

        get("/races", (req, res) -> "HUMAN, ELF, DWARF, HALFLING");

    }
}
