import string

debug = False

class WordDatParser():
    inputd = ""

    def __init__(self):
        return

    def getChar(self):
        if not self.inputd or len(self.inputd) <= 0:
            return ""
        ch = self.inputd[0]
        self.inputd = self.inputd[1:]
        return ch

    def getToken(self):
        token = ""
        if len(self.inputd) <= 0:
            return None

        ch = self.getChar()
        while ch != "" and ch in string.whitespace:
            ch = self.getChar()

        if ch == '#':
            return None

        if ch == '\"':
            token += ch
            ch = self.getChar()
            token += ch
            while ch != "" and ch != "\"":
                ch = self.getChar()
                token += ch
                if ch == '\"':
                    return token
        else:
            while ch != "" and not ch in string.whitespace:
                token += ch
                ch = self.getChar()

        return token

    def parseFile(self, file_name):
        words = {}
        words_dat = open(file_name,'r')

        for line_nr, line in enumerate(words_dat):
            line.strip()
            if line[0] == "#":
                continue
            self.inputd = line
            word = self.getToken()
            if word == "":
                continue
            wtype = self.getToken()
            wform = self.getToken()
            refs = []
            ref = self.getToken()
            while ref:
                refs.append(ref)
                ref = self.getToken()

            if debug:
                print("# \'" + word + "\': type:" + wtype + ", form:" + wform + ", refs:" + str(refs));

            if word in words:
                w = words[word]
                if debug:
                    print("# parsing word \'" + word + "\' ...")
                w["type"] = "%01x" % (int(w["type"], 16) | int(wtype, 16))
                w["form"] = "%01x" % (int(w["form"], 16) | int(wform, 16))
                for ref in refs:
                    if not ref in w["refs"]:
                        w["refs"].append(ref)
                print("# warning: word \'" + word + "\' is already defined")
            else:
                words[word] = {"type": wtype, "form": wform, "refs": refs}

        words_dat.close()
        return words

