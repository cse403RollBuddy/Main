package Back_End;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
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
     * @param currChar the Character object who's stats are beign used for this roll
     * @param ability a String corresponding ability this check is for "strength, charisma, etc"
     * @param type a String that corresponding type of roll "advantag, disadvantage or regular"
     * @return a map with Strings as the keys and Integers as the values 
     *          {high: "the high roll of 2 rolls",
     *           low: "the low roll of 2 rolls",
     *           mod: "the proficiency added to this check",
     *           total: "the final number to use depending on the type of roll"}
     */

    public static Map<String, Integer> RollAC(Character currChar, String ability, String type) {
        
        if (ability == null || type == null) {return null;}

        Map<String, Integer> roll_data = new HashMap<>();

        //Make our rolls
        Random rand = new Random();
        int roll1 = rand.nextInt(20) + 1;
        int roll2 = rand.nextInt(20) + 1;

        roll_data.put("high", Math.max(roll1, roll2));
        roll_data.put("low", Math.min(roll1, roll2));
        
        if (type.equals("Regular")) {
            roll_data.put("low", 0);
        }

        //Calc modifier 
        int proficiency;
      
        switch(ability) {
                case "Charisma" : proficiency = currChar.get_charisma();
                    break;
                case "Constitution" : proficiency = currChar.get_constitution();
                    break;
                case "Dexterity" : proficiency = currChar.get_dexterity();
                    break;
                case "Intelligence" : proficiency = currChar.get_intelligence();
                    break;
                case "Strength" : proficiency = currChar.get_strength();
                    break;
                case "Wisdom" : proficiency = currChar.get_wisdom();
                    break;

                default: proficiency = 0;
                    break;
            } 

        proficiency = (proficiency / 2) - 5;

        roll_data.put("mod", proficiency);

        if (type.equals("Disadvantage")) {
            roll_data.put("total", roll_data.get("low") + proficiency);
        } else {
            roll_data.put("total", roll_data.get("high") + proficiency);
        }

        
        return roll_data;
    }
}
