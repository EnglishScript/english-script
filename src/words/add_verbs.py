import sys
import string
import WordDatParser

debug = False

if len(sys.argv) < 3:
    print("ERROR: too few arguments")
    print("Usage: " + sys.argv[0] + " words.dat verbs.csv > new_words.dat")
    exit(1)

parser = WordDatParser.WordDatParser()
words = parser.parseFile(sys.argv[1])

verbs_csv = open(sys.argv[2],'r')

for line_nr, line in enumerate(verbs_csv):
    line = line.strip()
    line = line.rstrip()
    verbs = line.split(" ")
    if len(verbs) > 1 and (verbs[1] == "" or verbs[1].isspace()):
        verbs.pop()

    if verbs[0].find(' ') != -1 or \
            verbs[0].find('/') != -1 or \
            verbs[0].find('\'') != -1 or \
            verbs[0] == "saw" or \
            verbs[0] == "frank":
        continue

    #verbs[0] == "line" or \
    #verbs[0] == "list" or \
    #verbs[0] == "meter" or \
    #verbs[0] == "vacation":

    if debug:
        for verb_nr, verb in enumerate(verbs):
            print("# line " + str(line_nr) + ":" + str(verb_nr) + ":" + verb)

    refs = []
    for word_nr, word in enumerate(verbs):
        if word_nr > 0 and word_nr < 2 and verbs[0] != word:
            if word in words:
                if (int(words[word]["type"], 16) & 0x8) == 0x8 or (int(words[word]["type"], 16) & 0x20) == 0x20:
                    refs.append( word )
                else:
                    print("# WARNING:: Word " + word + " not an adverb/prep")
            else:
                print("# WARNING:: Word " + word + " not known")

    if len(verbs) > 0:
        word1 = None
        if verbs[0] in words:
            word1 = words[verbs[0]]
            if debug:
                print("# word1 " + verbs[0] + ": " + str(word1))

        if word1 != None:
            if debug:
                print("# word1 " + verbs[0] + " is an old word")
            word1["type"] = "%01x" % (int(word1["type"], 16) | 0x1)
            word1["form"] = "%01x" % (int(word1["form"], 16) | 0x1)
            for word in refs:
                if not word in word1["refs"] and word != verbs[0]:
                    word1["refs"].append(word)
                    if debug:
                        print("# word " + verbs[0] + ": " + str(word1))
                else:
                    print("# WARNING: word " + word + " already in refs of " + verbs[0])
        else:
            words[verbs[0]] = {"type": "1", "form": "1", "refs": refs}
            word1 = words[verbs[0]]
            if debug:
                print("# word1 " + verbs[0] + " is a new word")

verbs_csv.close()

for word in words:
    w = words[word]
    print(word + " " + w["type"] + " " + w["form"], end = '');
    for ref in w["refs"]:
        print(" " + ref, end = '')
    print("")


