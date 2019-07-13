import sys
import string
import WordDatParser

debug = False

if len(sys.argv) < 3:
    print("ERROR: too few arguments")
    print("Usage: " + sys.argv[0] + " manual_words.dat nouns.csv > words.dat")
    exit(1)

parser = WordDatParser.WordDatParser()
words = parser.parseFile(sys.argv[1])

nouns_csv = open(sys.argv[2],'r')

for line_nr, line in enumerate(nouns_csv):
    line = line.strip()
    line = line.rstrip()
    nouns = line.split(",")
    if len(nouns) > 1 and (nouns[1] == "" or nouns[1].isspace()):
        nouns.pop()

    if nouns[0].isdigit() or nouns[0].find(' ') != -1 or nouns[0] == "i":
        continue

    if nouns[0] in words and (words[nouns[0]]["type"] == "40" or \
            words[nouns[0]]["type"] == "4" or \
            words[nouns[0]]["type"] == "80" or \
            words[nouns[0]]["type"] == "88" or \
            len(nouns[0]) < 3):
        continue

    if debug:
        for noun_nr, noun in enumerate(nouns):
            print("line " + str(line_nr) + ":" + str(noun_nr) + ":" + noun)

    if len(nouns) > 1 and nouns[0] != nouns[1]:
        refs = { nouns[1] }
    else:
        refs = {}

    if len(nouns) > 0:
        word1 = None
        word2 = None
        if nouns[0] in words:
            word1 = words[nouns[0]]
            if debug:
                print("word1 " + nouns[0] + ": " + str(word1))
        if len(nouns) > 1 and nouns[1] in words:
            word2 = words[nouns[1]]
            if debug:
                print("word2 " + nouns[1] + ": " + str(word2))

        if word1 != None:
            if debug:
                print("word1 " + nouns[0] + " is an old word")
            word1["type"] = "%01x" % (int(word1["type"], 16) | 0x2)
            if word2 and not nouns[1] in word1["refs"] and nouns[1] != nouns[0]:
                word1["refs"].append(nouns[1])
        else:
            words[nouns[0]] = {"type": "2", "form": "0", "refs": refs}
            word1 = words[nouns[0]]
            if debug:
                print("word1 " + nouns[0] + " is a new word")


        if len(nouns) > 1:
            if word2 != None:
                if debug:
                    print("word2 " + nouns[1] + " is an old word")
                word2["type"] = "%01x" % (int(word2["type"], 16) | 0x2)
                word2["form"] = "%01x" % (int(word2["form"], 16) | 0x80)
                if not nouns[0] in word2["refs"] and nouns[1] != nouns[0]:
                    word2["refs"].append(nouns[0])
            else:
                words[nouns[1]] = {"type": "2", "form": "80", "refs": {nouns[0]}}
                word2 = words[nouns[1]]
                if debug:
                    print("word2 " + nouns[1] + " is a new word")

nouns_csv.close()

for word in words:
    w = words[word]
    print(word + " " + w["type"] + " " + w["form"], end = '');
    for ref in w["refs"]:
        print(" " + ref, end = '')
    print("")


