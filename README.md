<!-----

Yay, no errors, warnings, or alerts!

Conversion time: 0.395 seconds.


Using this Markdown file:

1. Paste this output into your source file.
2. See the notes and action items below regarding this conversion run.
3. Check the rendered output (headings, lists, code blocks, tables) for proper
   formatting and use a linkchecker before you publish this page.

Conversion notes:

* Docs to Markdown version 1.0β33
* Tue Apr 19 2022 14:06:42 GMT-0700 (PDT)
* Source doc: RollBuddyREADME

WARNING:
You have 3 H1 headings. You may want to use the "H1 -> H2" option to demote all headings by one level.

----->


<p style="color: red; font-weight: bold">>>>>>  gd2md-html alert:  ERRORs: 0; WARNINGs: 1; ALERTS: 0.</p>
<ul style="color: red; font-weight: bold"><li>See top comment block for details on ERRORs and WARNINGs. <li>In the converted Markdown or HTML, search for inline alerts that start with >>>>>  gd2md-html alert:  for specific instances that need correction.</ul>

<p style="color: red; font-weight: bold">Links to alert messages:</p>
<p style="color: red; font-weight: bold">>>>>> PLEASE check and correct alert issues and delete this message and the inline alerts.<hr></p>



# Project: RollBuddy


# Idea

Our project proposes to create an application that allows D&D5E players to create or import characters, track changing aspects to the character through multiple play sessions, and view character information in an intuitive UI. Most importantly, it will also tell players what their bonuses are to various kinds of rolls, allow players to actually simulate rolling the dice within the application, and automatically apply the modifiers to display the final result.


# Goals

Major Features:



1. Create a character and populate necessary numeric fields during creation (or import info); character info persists across sessions.
2. Level up a character, updating stats, abilities, and dice modifiers as appropriate
3. Perform combat rolls, including saving throws, AC checks, to-hit rolls, and damage rolls, all with appropriate dice and modifiers.
4. Perform ability check dice rolls with appropriate dice and modifiers.
5. Perform spell rolls, including spell checks and spell damage, with appropriate dice and modifiers.

Stretch Goals:



1. Update numbers upon certain events (e.g. - gaining experience or gold, taking damage, receive a buff/debuff)
2. Save multiple characters
3. New to D&D vs Power User interface


# Layout of the repository 



1. Main (Give it a name?)
    1. README.md
    2. Front End
        1. App
        2. Test
        3. BugJournal.md
    3. Back End
        4. Character
        5. Roll
        6. Test
        7. BugJournal.md
    4. Documentation
        8. Weekly Reports
        9. Copy of Living Document
