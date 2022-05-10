package Back_End;

import java.util.ArrayList;
import java.util.Random;

public class Dice {

    public static ArrayList<Integer> Roll (int num, int face) {
        Random rand = new Random();
        ArrayList<Integer> values = new ArrayList<>(num);
        for (int i = 0; i < num; i++) {
            values.set(i, rand.nextInt(face) + 1);
        }
        return values;
    }
}
