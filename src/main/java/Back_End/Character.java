package Back_End;

import java.io.File;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.nio.file.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;


public class Character {

    private String name = null;
    private Races race = null;
    private Backgrounds background = null;
    private Classes classtype = null;

    private int max_health = 0;
    private int current_health = 0;

    private int gold_coins = 0;

    private int level = 1;

    private int strength = 0;
    private int constitution = 0;
    private int dexterity = 0;
    private int intelligence = 0;
    private int wisdom = 0;
    private int charisma = 0;


    public Character() {
        // default constructor
    }

    // setters
    // assuming we can get enums as arguments from front end, will change if that's not the case
    public void set_name(String name) {
        this.name = name;
    }

    public void set_race(Races race) {
        if (this.race != null) {
            if (this.race == Races.HUMAN) {
                this.strength -= 1;
                this.constitution -= 1;
                this.dexterity -= 1;
                this.intelligence -= 1;
                this.wisdom -= 1;
                this.charisma -= 1;
            } else if (this.race == Races.ELF) {
                this.dexterity -= 2;
                this.wisdom -= 1;
                // proficient in perception
            } else if (this.race == Races.DWARF) {
                this.constitution -= 2;
                this.strength -= 2;
                // double proficient in history, stonework origin
            } else if (this.race == Races.HALFLING) {
                this.dexterity -= 2;
                this.constitution -= 1;
                // saving throw stuff
            }
        }
        this.race = race;
        if (this.race == Races.HUMAN) {
            this.strength += 1;
            this.constitution += 1;
            this.dexterity += 1;
            this.intelligence += 1;
            this.wisdom += 1;
            this.charisma += 1;
        } else if (this.race == Races.ELF) {
            this.dexterity += 2;
            this.wisdom += 1;
            // proficient in perception
        } else if (this.race == Races.DWARF) {
            this.constitution += 2;
            this.strength += 2;
            // double proficient in history, stonework origin
        } else if (this.race == Races.HALFLING) {
            this.dexterity += 2;
            this.constitution += 1;
            // saving throw stuff
        }
    }

    public void set_background(Backgrounds background) {
        if (this.background != null) {
            if (this.background == Backgrounds.ACOLYTE) {
                // proficient in insight, religion
                this.gold_coins -= 15;
            } else if (this.background == Backgrounds.CRIMINAL) {
                // proficient in deception, stealth
                this.gold_coins -= 15;
            } else if (this.background == Backgrounds.SOLDIER) {
                // proficient in athletics, intimidation
                this.gold_coins -= 10;
            }
        }
        this.background = background;
        if (this.background == Backgrounds.ACOLYTE) {
            // proficient in insight, religion
            this.gold_coins += 15;
        } else if (this.background == Backgrounds.CRIMINAL) {
            // proficient in deception, stealth
            this.gold_coins += 15;
        } else if (this.background == Backgrounds.SOLDIER) {
            // proficient in athletics, intimidation
            this.gold_coins += 10;
        }
    }

    public void set_class(Classes c) {
        if (this.classtype != null) {
            if (this.classtype == Classes.CLERIC) {
                // set max health with 1d8 OR:
                this.max_health -= 5;
                this.current_health -= 5;
                // saving throws wisdom, charisma
                // choose 2 skill proficiency: history, insight, medicine, persuasion, religion
            } else if (this.classtype == Classes.FIGHTER) {
                // set max health with 1d10 OR:
                this.max_health -= 6;
                this.current_health -= 6;
                // saving throws strength, constitution
                // choose 2 skill proficiency: acrobatics, animal handling, athletics, history, insight, intimidation, perception, survival
            } else if (this.classtype == Classes.ROGUE) {
                // set max health with 1d8 OR:
                this.max_health -= 5;
                this.current_health -= 6;
                // saving throws dexterity, intelligence
                // choose 4 skill proficiency: Acrobatics, Athletics, Deception, Insight, Intimidation, Investigation, Perception, Performance, Persuasion, Sleight of Hand, Stealth
            }
        }
        this.classtype = c;
        if (this.classtype == Classes.CLERIC) {
            // set max health with 1d8 OR:
            this.max_health += 5;
            this.current_health += 5;
            // saving throws wisdom, charisma
            // choose 2 skill proficiency: history, insight, medicine, persuasion, religion
        } else if (this.classtype == Classes.FIGHTER) {
            // set max health with 1d10 OR:
            this.max_health += 6;
            this.current_health += 6;
            // saving throws strength, constitution
            // choose 2 skill proficiency: acrobatics, animal handling, athletics, history, insight, intimidation, perception, survival
        } else if (this.classtype == Classes.ROGUE) {
            // set max health with 1d8 OR:
            this.max_health += 5;
            this.current_health += 5;
            // saving throws dexterity, intelligence
            // choose 4 skill proficiency: Acrobatics, Athletics, Deception, Insight, Intimidation, Investigation, Perception, Performance, Persuasion, Sleight of Hand, Stealth
        }
    }

    // only for stretch goal?
    public void set_max_health(int v) {
        this.max_health = v;
    }

    public void set_current_health(int v) {
        this.current_health = v;
    }

    public void set_gold_coins(int v) {
        this.gold_coins = v;
    }

    public void set_level(int v) {
        // +2 ability points at lvl 4, 8, 12, 16, 19
        this.level = v;
    }

    public void set_strength(int v) {
        this.strength = v;
    }

    public void set_constitution(int v) {
        this.constitution = v;
    }

    public void set_dexterity(int v) {
        this.dexterity = v;
    }

    public void set_intelligence(int v) {
        this.intelligence = v;
    }

    public void set_wisdom(int v) {
        this.wisdom = v;
    }

    public void set_charisma(int v) {
        this.charisma = v;
    }


    // getters
    public String get_name() {
        return this.name;
    }

    public Races get_race() {
        return this.race;
    }

    public Backgrounds get_background() {
        return this.background;
    }

    public Classes get_class() {
        return this.classtype;
    }

    public int get_max_health() {
        return this.max_health;
    }

    public int get_current_health() {
        return this.current_health;
    }

    public int get_gold_coins() {
        return this.gold_coins;
    }

    public int get_strength() {
        return this.strength;
    }

    public int get_constitution() {
        return this.constitution;
    }

    public int get_dexterity() {
        return this.dexterity;
    }

    public int get_intelligence() {
        return this.intelligence;
    }

    public int get_wisdom() {
        return this.wisdom;
    }

    public int get_charisma() {
        return this.charisma;
    }

    /**
     * It's toString, y'all! See the specification for overriding this method in
     * the documentation for the Object class.
     */
    @Override
    public String toString() {
        return
                "Name: " + this.name + ", " +
                "Class: " + this.classtype + ", " +
                "Background: " + this.background + ", " +
                "Level: " + this.level + ", " +
                "Str: " + this.strength + " " +
                "Dex: " + this.dexterity + " " +
                "Con: " + this.constitution + " " +
                "Int: " + this.intelligence + " " +
                "Wis: " + this.wisdom + " " +
                "Cha: " + this.charisma + ", " +
                "Health: " + this.current_health + "/" + this.max_health + ", " +
                "Gold: " + this.gold_coins;
    }

    // static methods

    /**
     * Returns the contents of the character file at Path path as a String
     *
     * @param path - the filepath to the character file as a Path object
     * @return - a String containing the text in the file at filepath path
     * @throws IOException - if the file cannot be read for some reason (e.g., permissions/existence)
     */
    public static String readCharacterFromFile(Path path) throws IOException {
        return Files.readString(path, StandardCharsets.US_ASCII);
    }

    /**
     * Writes character c's data to a new text file at .../Main/src/main/java/Back_End/CharacterFiles/(c.name).txt,
     * unless that file already exists, in which case the data in the file is overwritten.
     *
     * @param c - the Character object whose data will be written to file
     */
    public static void writeCharacterToFile(Character c) {
        String fileName = c.name + ".txt";
        Path newFilePath = Paths.get("./src/main/java/Back_End/CharacterFiles/" + fileName);
        // create the file
        try {
            Files.createFile(newFilePath);
        } catch (FileAlreadyExistsException e) {
            System.out.println("Character file for " + c.name + " already exists! Overwriting...");
        } catch (IOException e) {
            System.err.println("Couldn't create new file for character: " + c.name);
            e.printStackTrace();
            return;
        }
        // write the data
        String name = c.name;
        String character_class = String.valueOf(c.classtype);
        String race = String.valueOf(c.race);
        String background = String.valueOf(c.background);
        String level = "Level: " + c.level;
        String stats = c.strength + " " + c.dexterity + " " + c.constitution + " " + c.intelligence
                       + " " + c.wisdom + " " + c.charisma;
        String health = c.current_health + "/" + c.max_health;
        String cash = "Gold: " + c.gold_coins;
        try {
            Files.writeString(newFilePath, name + "\n");
            Files.writeString(newFilePath, character_class + "\n", StandardOpenOption.APPEND);
            Files.writeString(newFilePath, race + "\n", StandardOpenOption.APPEND);
            Files.writeString(newFilePath, background + "\n", StandardOpenOption.APPEND);
            Files.writeString(newFilePath, level + "\n", StandardOpenOption.APPEND);
            Files.writeString(newFilePath, stats + "\n", StandardOpenOption.APPEND);
            Files.writeString(newFilePath, health + "\n", StandardOpenOption.APPEND);
            Files.writeString(newFilePath, cash + "\n", StandardOpenOption.APPEND);
            // ... and so on
        } catch (IOException e) {
            System.err.println("Failed to write to file: " + newFilePath);
            e.printStackTrace();
        }

    }

    /**
     * Takes a String of character data and returns a Character object if the String is
     * well-formed according to a specified file-format (see Steve The Sneaky.txt for an example).
     * NOTE: this method currently has no error-checking whatsoever, so make sure the data in
     * the String follows the specified format or else suffer...
     * @param s - the String of character data
     * @return - a newly created Character object
     */
    public static Character createCharacterFromString(String s) {
        Character newChar = new Character();
        List<String> charInfo = new ArrayList<>(List.of(s.split("\\R")));
        // do character creation things
        System.out.println("Attempting to create character: " + charInfo.get(0));
        System.out.println("Here's their character info list: \n" + charInfo);
        newChar.set_name(charInfo.get(0));
        String char_class = charInfo.get(1);
        switch(char_class) {
            case "FIGHTER": newChar.set_class(Classes.FIGHTER); break;
            case "ROGUE"  : newChar.set_class(Classes.ROGUE); break;
            case "CLERIC" : newChar.set_class(Classes.CLERIC); break;
        }
        String race = charInfo.get(2);
        switch (race) {
            case "HUMAN"   : newChar.set_race(Races.HUMAN); break;
            case "ELF"     : newChar.set_race(Races.ELF); break;
            case "DWARF"   : newChar.set_race(Races.DWARF); break;
            case "HALFLING": newChar.set_race(Races.HALFLING); break;
        }
        String background = charInfo.get(3);
        switch (background) {
            case "ACOLYTE":  newChar.set_background(Backgrounds.ACOLYTE); break;
            case "CRIMINAL": newChar.set_background(Backgrounds.CRIMINAL); break;
            case "SOLDIER":  newChar.set_background(Backgrounds.SOLDIER); break;
        }
        int level = Integer.parseInt(charInfo.get(4).substring(charInfo.get(4).lastIndexOf(' ') + 1).trim());
        newChar.set_level(level);
        List<String> stats = new ArrayList<>(List.of(charInfo.get(5).split(" ")));
        newChar.set_strength(Integer.parseInt(stats.get(0)));
        newChar.set_dexterity(Integer.parseInt(stats.get(1)));
        newChar.set_constitution(Integer.parseInt(stats.get(2)));
        newChar.set_intelligence(Integer.parseInt(stats.get(3)));
        newChar.set_wisdom(Integer.parseInt(stats.get(4)));
        newChar.set_charisma(Integer.parseInt(stats.get(5)));
        newChar.set_current_health(Integer.parseInt(charInfo.get(6).substring(0, 1)));
        newChar.set_max_health(Integer.parseInt(charInfo.get(6).substring(charInfo.get(6).lastIndexOf('/') + 1)));
        newChar.set_gold_coins(Integer.parseInt(charInfo.get(7).substring(charInfo.get(7).lastIndexOf(' ') + 1)));
        System.out.println("Finished building new character: " + newChar);
        return newChar;
    }

    /**
     * Takes a list of Strings -- where each String should correspond to the name
     * of a character file in .../Main/src/main/java/Back_End/CharacterFiles -- and
     * returns a List of Characters corresponding to the data in the files.
     *
     * @param characterStrings - the List of Strings where each represents a file stored
     *                         in the specified location (e.g., "Steve The Sneaky"
     *                         represents the file "Steve The Sneaky.txt"
     * @return - a List of Characters corresponding to the files in the input list
     * @throws IOException - if there is any problem reading the files corresponding
     * to the Strings in the input list
     */
    public static List<Character> createListOfCharacters(List<String> characterStrings) throws IOException {
        List<Character> characters = new ArrayList<>();
        for (String characterFile : characterStrings) {
            String charInfo = readCharacterFromFile(Paths.get("./src/main/java/Back_End/CharacterFiles/"
                    + characterFile + ".txt"));
            Character c = createCharacterFromString(charInfo);
            characters.add(c);
        }
        return characters;
    }

    /**
     * Verifies that the directory where character files should live (currently
     * .../Main/src/main/java/Back_End/CharacterFiles/) actually exists; if it
     * doesn't exist, this method creates it. This method is run immediately
     * upon server initialization in SparkServer.java.
     *
     */
    public static void verifyDirectoryAndCharacterFiles() {
        Path p = Paths.get("./src/main/java/Back_End/CharacterFiles/");
        System.out.println("Verifying that directory for character files exists...");
        if ( !(Files.exists(p) && Files.isDirectory(p)) ) {
            System.out.println("...directory for Character files does not exist. Creating...");
            try {
                Path newDirectory = Files.createDirectory(p);
            } catch (FileAlreadyExistsException e) {
                System.out.println("... tried to create directory but... ");
            } catch (IOException e) {
                System.err.println("Couldn't create the directory for Character files!");
                e.printStackTrace();
                return;
            }
        }
        if (Files.exists(p) && Files.isDirectory(p)) {
            System.out.println("... directory exists. \n");
        }
    }

    /**
     * Returns a list of Strings where each entry represents the name of a file
     * corresponding to a character whose data is stored on disk at
     * .../Main/src/java/Back_End/CharacterFiles/
     *
     * @return - a list of Strings extracted from the filenames in the
     * directory
     */
    public static List<String> getCharNames() {
        verifyDirectoryAndCharacterFiles();
        List<String> charNames = new ArrayList<>();
        for (final File charFile : Objects.requireNonNull(new File("./src/main/java/Back_End/CharacterFiles/").listFiles())) {
            String fileName = charFile.toString().substring(charFile.toString().lastIndexOf(System.getProperty("file.separator")) + 1);
            fileName = fileName.substring(0, fileName.length()-4);  //assumes every file in the directory ends in .txt
            charNames.add(fileName);
            // System.out.println(fileName);
        }
        return charNames;
    }

    public static void main (String[] args) {
        // for light testing purposes; for now, just change the target of the build.gradle file to
        // 'Back_End.Character' in order to run this method

        System.out.println("BEGIN MAIN METHOD TESTING OF STATIC METHODS IN CHARACTER CLASS: \n");
        // test that verifyDirectoryAndCharacterFiles() works
        System.out.println("Make sure creating the directory if it doesn't already exist works...");
        verifyDirectoryAndCharacterFiles();
        int fileCount = Objects.requireNonNull(new File("./src/main/java/Back_End/CharacterFiles/")
                        .list()).length;
        System.out.println("Files in CharacterFiles directory: " + fileCount);
        System.out.println();

        // verify that we can create a Character...
        Character testChar = new Character();
        testChar.set_name("Steve The Sneaky");
        testChar.set_strength(10);
        testChar.set_dexterity(14);
        testChar.set_constitution(12);
        testChar.set_intelligence(5);
        testChar.set_wisdom(6);
        testChar.set_charisma(3);
        testChar.set_background(Backgrounds.CRIMINAL);
        testChar.set_race(Races.HALFLING);
        testChar.set_class(Classes.ROGUE);

        // ... and then write a character file to disk...
        System.out.println("Attempting to write a character to a new file...");
        writeCharacterToFile(testChar);
        System.out.println("Character: " + testChar.name + " successfully written to disk.");
        System.out.println();

        // ... and then read the data back out into one big long string...
        Path charPath = Paths.get("./src/main/java/Back_End/CharacterFiles/" + testChar.name + ".txt");
        System.out.println("Attempting to read in character data from: " + charPath + " ...\n");
        try {
            System.out.println("Data read from file: \n" + readCharacterFromFile(charPath));
        } catch (IOException e) {
            e.printStackTrace();
        }
        System.out.println();

        // ...now verify that we can create a new character from just the big long string...
        Character c = null;
        try {
            c = createCharacterFromString(readCharacterFromFile(charPath));
        } catch (IOException e) {
            e.printStackTrace();
        }
        // verify that our testChar and the character that we just created via reading the file
        // that was associated with testChar report the same data
        System.out.println("Character created via file read: ");
        System.out.println(c);
        System.out.println("Character created via hand-coding (these should be the same):");
        System.out.println(testChar);
        System.out.println();

        // verify that we can create a list of characters by getting the names of the .txt files stored
        // in the CharacterFiles directory
        System.out.println("Testing composition of methods to create in-memory representations of characters" +
                " from a call that returns the files in the CharacterFiles directory...");
        List<Character> chars = new ArrayList<>();
        try {
            chars = createListOfCharacters(getCharNames());
        } catch (IOException e) {
            e.printStackTrace();
        }
        System.out.println(chars);
        for (Character character : chars) {
            System.out.println(character);
        }
        System.out.println();
        System.out.println(Dice.Roll(1, 20));

    }
}