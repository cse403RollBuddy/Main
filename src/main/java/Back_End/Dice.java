package Back_End;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

public class Dice {

<<<<<<< HEAD
    public static List<Integer> roll (int num, int face) {
        Random rand = new Random();
        List<Integer> values = new ArrayList<>();
=======
    public static List<Integer> Roll (int num, int face) {
        Random rand = new Random();
        List<Integer> values = new ArrayList<>(num);
>>>>>>> main
        for (int i = 0; i < num; i++) {
            values.add(rand.nextInt(face) + 1);
        }
        return values;
    }
}
