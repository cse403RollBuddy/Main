package Back_End;

public class Character {

    private String n = null;
    private Races r = null;
    private Backgrounds b = null;
    private Classes c = null;

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
        this.n = name;
    }

    public void set_race(Races race) {
        if (this.r != null) {
            if (this.r == Races.HUMAN) {
                this.strength -= 1;
                this.constitution -= 1;
                this.dexterity -= 1;
                this.intelligence -= 1;
                this.wisdom -= 1;
                this.charisma -= 1;
            } else if (this.r == Races.ELF) {
                this.dexterity -= 2;
                this.wisdom -= 1;
                // proficient in perception
            } else if (this.r == Races.DWARF) {
                this.constitution -= 2;
                this.strength -= 2;
                // double proficient in history, stonework origin
            } else if (this.r == Races.HALFLING) {
                this.dexterity -= 2;
                this.constitution -= 1;
                // saving throw stuff
            }
        }
        this.r = race;
        if (this.r == Races.HUMAN) {
            this.strength += 1;
            this.constitution += 1;
            this.dexterity += 1;
            this.intelligence += 1;
            this.wisdom += 1;
            this.charisma += 1;
        } else if (this.r == Races.ELF) {
            this.dexterity += 2;
            this.wisdom += 1;
            // proficient in perception
        } else if (this.r == Races.DWARF) {
            this.constitution += 2;
            this.strength += 2;
            // double proficient in history, stonework origin
        } else if (this.r == Races.HALFLING) {
            this.dexterity += 2;
            this.constitution += 1;
            // saving throw stuff
        }
    }

    public void set_background(Backgrounds background) {
        if (this.b != null) {
            if (this.b == Backgrounds.ACOLYTE) {
                // proficient in insight, religion
                this.gold_coins -= 15;
            } else if (this.b == Backgrounds.CRIMINAL) {
                // proficient in deception, stealth
                this.gold_coins -= 15;
            } else if (this.b == Backgrounds.SOLDIER) {
                // proficient in athletics, intimidation
                this.gold_coins -= 10;
            }
        }
        this.b = background;
        if (this.b == Backgrounds.ACOLYTE) {
            // proficient in insight, religion
            this.gold_coins += 15;
        } else if (this.b == Backgrounds.CRIMINAL) {
            // proficient in deception, stealth
            this.gold_coins += 15;
        } else if (this.b == Backgrounds.SOLDIER) {
            // proficient in athletics, intimidation
            this.gold_coins += 10;
        }
    }

    public void set_class(Classes c) {
        if (this.c != null) {
            if (this.c == Classes.CLERIC) {
                // set max health with 1d8 OR:
                this.max_health -= 5;
                // saving throws wisdom, charisma
                // choose 2 skill proficiency: history, insight, medicine, persuasion, religion
            } else if (this.c == Classes.FIGHTER) {
                // set max health with 1d10 OR:
                this.max_health -= 6;
                // saving throws strength, constitution
                // choose 2 skill proficiency: acrobatics, animal handling, athletics, history, insight, intimidation, perception, survival
            } else if (this.c == Classes.ROGUE) {
                // set max health with 1d8 OR:
                this.max_health -= 5;
                // saving throws dexterity, intelligence
                // choose 4 skill proficiency: Acrobatics, Athletics, Deception, Insight, Intimidation, Investigation, Perception, Performance, Persuasion, Sleight of Hand, Stealth
            }
        }
        this.c = c;
        if (this.c == Classes.CLERIC) {
            // set max health with 1d8 OR:
            this.max_health += 5;
            // saving throws wisdom, charisma
            // choose 2 skill proficiency: history, insight, medicine, persuasion, religion
        } else if (this.c == Classes.FIGHTER) {
            // set max health with 1d10 OR:
            this.max_health += 6;
            // saving throws strength, constitution
            // choose 2 skill proficiency: acrobatics, animal handling, athletics, history, insight, intimidation, perception, survival
        } else if (this.c == Classes.ROGUE) {
            // set max health with 1d8 OR:
            this.max_health += 5;
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
        return this.n;
    }

    public Races get_race() {
        return this.r;
    }

    public Backgrounds get_background() {
        return this.b;
    }

    public Classes get_class() {
        return this.c;
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

    public int set_wisdom() {
        return this.wisdom;
    }

    public int set_charisma() {
        return this.charisma;
    }

}
