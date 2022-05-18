package Back_End;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

public class Dice {

    public static List<Integer> Roll (int num, int face) {
        Random rand = new Random();
        List<Integer> values = new ArrayList<>(num);
        for (int i = 0; i < num; i++) {
            values.add(rand.nextInt(face) + 1);
        }
        return values;
    }

    public static int RollAC(int proficiency) {
        Random rand = new Random();
        int roll = rand.nextInt(20) + 1;
        return roll + proficiency;
    }
}
