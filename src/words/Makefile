ROOT = ../..

TARGET =  $(ROOT)/data/words.dat
PYS = add_nouns.py combine_dats.py
SRCS = manual_words.dat nouns.csv verbs.dat

all: $(TARGET)

$(TARGET): $(PYS) $(SRCS)
	python3 add_nouns.py manual_words.dat nouns.csv > words.dat.tmp
	python3 combine_dats.py words.dat.tmp verbs.dat > $@

clean::
	rm -f $(TARGET) words.dat.tmp

