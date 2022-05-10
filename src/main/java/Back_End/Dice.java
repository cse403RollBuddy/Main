package Back_End;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

public class Dice {

    public static List<Integer> roll (int num, int face) {
        Random rand = new Random();
        List<Integer> values = new ArrayList<>();
        for (int i = 0; i < num; i++) {
            values.add(rand.nextInt(face) + 1);
        }
        return values;
    }
}
