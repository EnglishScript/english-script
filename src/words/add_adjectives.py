#
# Comparative and superlative adjectives – article
#   http://www.onestopenglish.com/grammar/grammar-reference/adjectives/comparative-and-superlative-adjectives-article/144846.article
#
import sys
import string
import WordDatParser

debug = False

if len(sys.argv) < 3:
    print("ERROR: too few arguments")
    print("Usage: " + sys.argv[0] + " manual_words.dat adjectives.csv > words.dat")
    exit(1)

parser = WordDatParser.WordDatParser()
words = parser.parseFile(sys.argv[1])

adjectives_csv = open(sys.argv[2],'r')

for line_nr, line in enumerate(adjectives_csv):
    line = line.strip()
    line = line.rstrip()
    adjectives = line.split(",")
    if len(adjectives) > 1 and (adjectives[1] == "" or adjectives[1].isspace()):
        adjectives.pop()

    if adjectives[0].isdigit() or \
            len(adjectives[0]) < 3 or \
            adjectives[0].find(' ') != -1 or \
            adjectives[0].find('/') != -1 or \
            adjectives[0].find('\'') != -1 or \
            adjectives[0] == "i" or \
            adjectives[0] == "are" or \
            adjectives[0] == "can" or \
            adjectives[0] == "have" or \
            adjectives[0] == "wait" or \
            adjectives[0] == "see" or \
            adjectives[0] == "ha" or \
            adjectives[0] == "then" or \
            adjectives[0] == "mass" or \
            adjectives[0] == "about" or \
            adjectives[0] == "after" or \
            adjectives[0] == "ain" or \
            adjectives[0] == "all" or \
            adjectives[0] == "any" or \
            adjectives[0] == "back" or \
            adjectives[0] == "plane" or \
            adjectives[0] == "here" or \
            adjectives[0] == "i" or \
            adjectives[0] == "in" or \
            adjectives[0] == "key" or \
            adjectives[0] == "ok" or \
            adjectives[0] == "some" or \
            adjectives[0] == "sometime" or \
            adjectives[0] == "very" or \
            adjectives[0] == "gold" or \
            adjectives[0] == "model" or \
            adjectives[0] == "no" or \
            adjectives[0] == "saw":
        print("# WARNING: " + adjectives[0] + " not added to adjectives")
        continue

    #if adjectives[0] in words and (words[adjectives[0]]["type"] == "40" or \
    #        words[adjectives[0]]["type"] == "4" or \
    #        words[adjectives[0]]["type"] == "80" or \
    #        words[adjectives[0]]["type"] == "88" or \
    #        words[adjectives[0]]["type"] == "10" or \
    #        len(adjectives[0]) < 3):
    #    continue

    if debug:
        for adjective_nr, adjective in enumerate(adjectives):
            print("line " + str(line_nr) + ":" + str(adjective_nr) + ":" + adjective)

    refs = []
    for word_nr, word in enumerate(adjectives):
        if word_nr > 0:
            if word_nr < 3 and adjectives[0] != word:
                refs.append( word )
            else:
                print("# WARNING: " + word + " not added to refs of " + adjectives[0])

    if len(adjectives) > 0:
        word1 = None
        if adjectives[0] in words:
            word1 = words[adjectives[0]]
            if debug:
                print("# word1 " + adjectives[0] + ": " + str(word1))

        if word1 != None:
            if debug:
                print("# word1 " + adjectives[0] + " is an old word")
            word1["type"] = "%01x" % (int(word1["type"], 16) | 0x4)
            word1["form"] = "%01x" % (int(word1["form"], 16) | 0x10)
            for word in refs:
                if not word in word1["refs"] and word != adjectives[0]:
                    word1["refs"].append(word)
                    if debug:
                        print("# word " + adjectives[0] + ": " + str(word1))
                else:
                    print("# WARNING: word " + word + " already in refs of " + adjectives[0])
        else:
            words[adjectives[0]] = {"type": "4", "form": "10", "refs": refs}
            word1 = words[adjectives[0]]
            if debug:
                print("# word1 " + adjectives[0] + " is a new word")

        form = 0x10
        for word in refs:
            form = form * 2
            if word in words:
                word1 = words[word]
                word1["type"] = "%01x" % (int(word1["type"], 16) | 0x4)
                word1["form"] = "%01x" % (int(word1["form"], 16) | form)
                word1["refs"].append(adjectives[0])
            else:
                words[word] = {"type": "4", "form": ("%01x" % form), "refs": [adjectives[0]]}

adjectives_csv.close()

for word in words:
    w = words[word]
    print(word + " " + w["type"] + " " + w["form"], end = '');
    for ref in w["refs"]:
        print(" " + ref, end = '')
    print("")


