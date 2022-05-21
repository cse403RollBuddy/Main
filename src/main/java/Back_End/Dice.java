package Back_End;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

public class Dice {

    /**
     * A method that rolls num die with the given number of face, and returns each individual roll in a List
     * 
     * @param num the number of die to roll
     * @param face the number of faces the die being rolled have
     * @return a List with each inidividual's die value
     */
    public static List<Integer> Roll (int num, int face) {
        Random rand = new Random();
        List<Integer> values = new ArrayList<>(num);
        for (int i = 0; i < num; i++) {
            values.add(rand.nextInt(face) + 1);
        }
        return values;
    }

    /**
     * A method that rolls the D20 and adds the character's proficiency to indicate their ability to perform a task.
     * 
     * @param proficiency An integer value to add to the roll, indicating the bonus the current character has at the given task
     * @return An integer value that indicates the ability check score for a given task
     */
    public static int RollAC(int proficiency) {
        Random rand = new Random();
        int roll = rand.nextInt(20) + 1;
        return roll + proficiency;
    }
}
