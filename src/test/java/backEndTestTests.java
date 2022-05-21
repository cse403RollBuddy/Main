import org.junit.jupiter.api.Test;

import Back_End.Character;
import Back_End.Dice;

import static org.junit.jupiter.api.Assertions.*;

import java.io.File;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.nio.file.*;
import java.util.*;
 
class JUnit5ExampleTest {
 
    @Test
    void justAnExample() {
        System.out.println("This test method should be run");
    }

    //Load a character and get the correct scores, basically the test in character.java
    @Test
    void StevetheSneaky() throws IOException {
        int fileCount = Objects.requireNonNull(new File("./src/main/java/Back_End/CharacterFiles/").list()).length;
        System.out.println("Files in CharacterFiles directory: " + fileCount);
        
        Path charPath = Paths.get("./src/main/java/Back_End/CharacterFiles/Steve The Sneaky.txt");
        Character test = Character.createCharacterFromString(Character.readCharacterFromFile(charPath));
        assertEquals(10, test.get_strength());
        assertEquals(16, test.get_dexterity());
        assertEquals(13, test.get_constitution());
        assertEquals(5, test.get_intelligence());
        assertEquals(6, test.get_wisdom());
        assertEquals(3, test.get_charisma());
    }

    //Roll six six-sided die, ensure their numbers are in the correct range
    @Test
    void testRoll () {
        int num = 6;
        int face = 6;
        List<Integer> rolls = Dice.Roll(num, face);
        for (int i = 0; i < rolls.size(); i++) {
            int roll = rolls.get(i);
            assertTrue((0 < roll && roll <= face));
        }
    }

    //Test that proficiency establishes a "lower bound"
    @Test
    void testRollAC () {
        int proficiency = 0;
        int tests = 10;
        for (int i = 0; i < tests; i++) {
            int roll = Dice.RollAC(proficiency);
            assertTrue((proficiency < roll && roll <= (20 + proficiency)));
        }
    }
}