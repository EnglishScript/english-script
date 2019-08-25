import sys
import string
import WordDatParser

debug = False

if len(sys.argv) < 3:
    print("ERROR: too few arguments")
    exit(1)

parser = WordDatParser.WordDatParser()
words = parser.parseFile(sys.argv[1])
parser2 = WordDatParser.WordDatParser()
words2 = parser2.parseFile(sys.argv[2])

for word in words2:
    if word:
        w = words2[word]
        if word in words:
            w2 = words[word]
            if debug:
                print("# combining word " + word + " ...")
            w2["type"] = "%01x" % (int(w2["type"], 16) | int(w["type"], 16))
            w2["form"] = "%01x" % (int(w2["form"], 16) | int(w["form"], 16))
            for ref in w["refs"]:
                if not ref in w2["refs"]:
                    w2["refs"].append(ref)
        else:
            words[word] = { "type": w["type"], "form": w["form"], "refs": w["refs"]}

for word in words:
    if word:
        w = words[word]
        if debug:
            print("# combining word " + word + " ...")
        print(word + " " + w["type"] + " " + w["form"], end = '');
        for ref in w["refs"]:
            print(" " + ref, end = '')
        print("")


