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

    public static int RollAC(Character currChar, String ability) {
        int proficiency;
        switch(ability) {
                case "charisma" : proficiency = currChar.get_charisma();
                case "constitution" : proficiency = currChar.get_constitution();
                case "dexterity" : proficiency = currChar.get_dexterity();
                case "intelligence" : proficiency = currChar.get_intelligence();
                case "strength" : proficiency = currChar.get_strength();
                case "wisdom" : proficiency = currChar.get_wisdom();

                default: proficiency = 0;
            }
        proficiency = (proficiency / 2) - 5;
        Random rand = new Random();
        int roll = rand.nextInt(20) + 1;
        return roll + proficiency;
    }
}
