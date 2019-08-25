import sys
import string
import WordDatParser

debug = False

if len(sys.argv) < 3:
    print("ERROR: too few arguments")
    print("Usage: " + sys.argv[0] + " words.dat adverbs.csv > new_words.dat")
    exit(1)

parser = WordDatParser.WordDatParser()
words = parser.parseFile(sys.argv[1])

adverbs_csv = open(sys.argv[2],'r')

for line_nr, line in enumerate(adverbs_csv):
    line = line.strip()
    line = line.rstrip()
    adverbs = line.split(",")
    if len(adverbs) > 1 and (adverbs[1] == "" or adverbs[1].isspace()):
        adverbs.pop()

    if adverbs[0].find(' ') != -1 or \
            adverbs[0].find('/') != -1 or \
            adverbs[0].find('\'') != -1 or \
            adverbs[0] == "on" or \
            adverbs[0] == "then" or \
            adverbs[0] == "home":
        continue

    if debug:
        for adverb_nr, adverb in enumerate(adverbs):
            print("line " + str(line_nr) + ":" + str(adverb_nr) + ":" + adverb)

    if len(adverbs) > 1 and adverbs[0] != adverbs[1]:
        refs = [ adverbs[1] ]
    else:
        refs = []

    if len(adverbs) > 0:
        word1 = None
        if adverbs[0] in words:
            word1 = words[adverbs[0]]
            if debug:
                print("word1 " + adverbs[0] + ": " + str(word1))

        if word1 != None:
            if debug:
                print("word1 " + adverbs[0] + " is an old word")
            word1["type"] = "%01x" % (int(word1["type"], 16) | 0x8)
            if len(adverbs) > 1 and not adverbs[1] in word1["refs"] and adverbs[1] != adverbs[0]:
                word1["refs"].append(adverbs[1])
        else:
            words[adverbs[0]] = {"type": "8", "form": "0", "refs": refs}
            word1 = words[adverbs[0]]
            if debug:
                print("word1 " + adverbs[0] + " is a new word")

adverbs_csv.close()

for word in words:
    w = words[word]
    print(word + " " + w["type"] + " " + w["form"], end = '');
    for ref in w["refs"]:
        print(" " + ref, end = '')
    print("")


