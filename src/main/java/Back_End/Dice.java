package Back_End;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
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

    public static Map<String, Integer> RollAC(Character currChar, String ability, String type) {
        
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
                case "charisma" : proficiency = currChar.get_charisma();
                case "constitution" : proficiency = currChar.get_constitution();
                case "dexterity" : proficiency = currChar.get_dexterity();
                case "intelligence" : proficiency = currChar.get_intelligence();
                case "strength" : proficiency = currChar.get_strength();
                case "wisdom" : proficiency = currChar.get_wisdom();

                default: proficiency = 0;
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
