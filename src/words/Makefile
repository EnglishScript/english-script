ROOT = ../..

TARGET =  $(ROOT)/data/words.dat
PYS = add_nouns.py add_adverbs.py add_verbs.py combine_dats.py
SRCS = manual_words.dat nouns.csv verbs.dat nouns_wordnet31.csv adverbs_wordnet31.csv verbs_wordnet31.csv

all: $(TARGET)

$(TARGET): $(PYS) $(SRCS)
	python3 add_nouns.py manual_words.dat nouns.csv > words.dat.tmp
	python3 add_nouns.py words.dat.tmp nouns_wordnet31.csv > words2.dat.tmp
	python3 add_adverbs.py words2.dat.tmp adverbs_wordnet31.csv > words3.dat.tmp
	python3 add_verbs.py words3.dat.tmp verbs_wordnet31.csv > words4.dat.tmp
	python3 combine_dats.py words4.dat.tmp verbs.dat > words5.dat.tmp
	python3 combine_dats.py words5.dat.tmp verbs2.dat > words6.dat.tmp
	python3 combine_dats.py words6.dat.tmp verbs3.dat > $@

clean::
	rm -f $(TARGET) words.dat.tmp words?.dat.tmp

