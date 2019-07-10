EnglishScript word database format
----------------------------------

- a more compact format to store word meanings for Alvin AI than
  by teaching them in English for Alvin AI.

- needed to keep Alvin's memory less complex.

- word database format is ascii text.

- one word is defined in each line.

- for each word a type (as a hexadecimal number), a form (as a hexadecimal number)
  and related words are listed. A space character (' ') is used as a separator.

    <word> <type> <form> <related words>

    E.g.

    car 2 0 cars
    cars 2 80 car

    drive 1 1 drove driven drives
    drove 1 2 drive
    driven 1 4 drive
    drives 1 8 drive

- possible types for words:

    Type:           Value (Hexadecimal):   Example words:
    -------------   ---------------------- -------------------------------------------------
    none            0                      a, the, s
    verb            1                      go, is, sit, walk, drive, driving, walking
    noun            2                      car, boat, cat, driving, walking, water, code, meters
    adjective       4                      big, small, nice, fast, down
    adverb          8                      more, most, no, very, some, much, little, down
    conjunction     10                     then, if, when, why
    preposition     20                     on, at, to, from
    numeral         40                     hundred, ten, one
    pronomine       80                     that, no, I, he, she, him(obj), her (obj), it, them, there
                                           (obj), they, you, me (obj)
    poss. pronomine 100                    my, mine (alone), your, yours (alone), their,
                                           theirs (alone) his, her, hers (alone), its
    interjection    400                    Hi, Hello

- for each verb word type there are different forms:

    Verb form:  Value (Hexadecimal):   Example words:
    ----------- ---------------------- ---------------------------
    1st         1                      go
    2nd         2                      went
    3rd         4                      gone
    3rd person  8                      does, goes, looks, was, has
    noun        10                     driving, eating

  E.g.

    go 1 1 went gone goes going
    went 1 2 go
    gone 1 4 go
    goes 1 8 go
    going 1 10 go

- for each noun word type there are different forms:

    Noun form:  Value (Hexadecimal):   Example words:
    ----------- ---------------------- ---------------------------
    plural      80                     cars
    proper name 100                    "Larry Laffer", "Frank"
    uncountable 200                    water, code

  E.g.

    car 2 0 cars
    cars 2 80 car

    "Larry Laffer" 2 100

    water 2 200

- for each adjective word type there are different forms:

    Adjective form:   Value (Hexadecimal):   Example words:
    ----------------- ---------------------- ---------------------------
    1st               10                     big
    2nd               20                     bigger
    3rd               40                     biggest

  E.g.

    big 4 10 bigger biggest
    bigger 4 20 big
    biggest 4 40 big

- other word types have no forms (set as 0).

  E.g. adverb:

    more 8 0
    very 8 0

  E.g. conjunction:

    then 10 0
    else 10 0

  E.g. preposition:

    on 20 0
    from 20 0

  E.g. numeral:

    hundred 40 0

  E.g. pronomine:

    I 80 0
    you 80 0

  E.g. possessive pronomine:

    my 100 0
    your 100 0

  E.g. interjections:

    Hi 400 0

- comment lines have a "#"-character at the start of the line, e.g.

    # This is a comment.

- comments can be added also at the tail of a line right after the
  word definition, e.g.

    car 2 0 cars # This is a comment

- the final word database ("words.dat" file) is combined from multiple sources
  (manually written word database .dat files and .csv files) by different Python
  scripts (.py). More sources can be added by modifying the Makefile file.

- to build the final word database just run "make all". You need the Make and Python
  command line applications to be installed to your system to build the final
  word database.

- if same word is defined multiple times then those are combined.

    E.g.

      # The noun "look" and its plural form "looks"
      look 2 0 looks
      looks 2 80 look

      # Three time forms for the verb "look"
      look 1 1 looked looks looking
      looked 1 6 look
      looks 1 8 look
      looking 1 10 look

    are combined by bitwise OR of the Hexadecimal values ->

      look 3 1 looked looks looking
      looked 1 6 look
      looks 3 88 look
      looking 1 10 look

- if the word is not irregular e.g. "look" then it is enough to just give the basic forms.
  Alvin will guess the rest of the word forms i.e. "looks", "looked" and "looking"
  automatically.

    E.g.

      look 3 1

    instead of:

      look 3 1 looked looks looking
      looked 1 6 look
      looks 3 88 look
      looking 1 10 look

