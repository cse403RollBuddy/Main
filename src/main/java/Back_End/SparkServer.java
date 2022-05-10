package Back_End;
import static spark.Spark.*;
import com.google.gson.Gson;
//import CORSFilter.java;
//import ExampleDataTransfer.java;


public class SparkServer {


    public static void main (String[] args) {

        Gson gson = new Gson();

        initExceptionHandler((e) -> System.out.println("Uh-oh"));
        CORSFilter corsFilter = new CORSFilter();
        corsFilter.apply();

        Spark.get("/data", (req, res) -> {
            ExampleDataTransfer example = new ExampleDataTransfer();
            return example.getData();
        });
        get("/hello", (req, res) -> "Hello world");

        // matches "GET /hello/foo" and "GET /hello/bar"
        // request.params(":name") is 'foo' or 'bar'
        get("/hello/:name", (request, response) ->
                "Hello: " + request.params(":name")
        );

        get("/background", (req, res) -> {
            return gson.toJson("ACOLYTE, CRIMINAL, SOLDIER");
        });

        get("/classes", (req, res) -> {
            return "CLERIC, FIGHTER, ROGUE";
        });

        get("/races", (req, res) -> {
            return "HUMAN, ELF, DWARF, HALFLING";
        });

    }
}
