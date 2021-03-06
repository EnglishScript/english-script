#	The EnglishScript programming language - for Artificial Intelligence.
#
#	Copyright (C) 2016 Tommi Manttari
#
#	This library is free software; you can redistribute it and/or modify
#	it under the terms of the GNU Lesser General Public License as
#	published by the Free Software Foundation; either version 2.1 of the
#	License, or (at your option) any later version.
#
#	This library is distributed in the hope that it will be useful, but
#	WITHOUT ANY WARRANTY; without even the implied warranty of
#	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
#	Lesser General Public License for more details.
#
#	You should have received a copy of the GNU Lesser General Public
#	License along with this library; if not, write to the Free Software
#	Foundation, Inc., 59 Temple Place, Suite 330, Boston, MA 02111-1307
#	USA
#
#	You can contact Tommi Manttari through email at manttari@yahoo.com.
#

VERSION = 3

SHELL:= /bin/bash

ROOT = ../..
ifndef ES_INCLUDE_PATH
ES_INCLUDE_PATH = $(ROOT)/../es/src/es/include
endif
ifndef ES_LIBRARY_PATH
ES_LIBRARY_PATH = $(ROOT)/../es/lib
endif
ifndef ES_DATA_PATH
ES_DATA_PATH = $(ROOT)/../english-script/data
endif
ifndef ES_PATH
ES_PATH = $(ROOT)/../es/bin
endif
ESC = PATH=$(ES_PATH) LD_LIBRARY_PATH=$(ES_LIBRARY_PATH) ES_DATA_PATH=$(ES_DATA_PATH) es-c
ESTEST = PATH=$(ES_PATH) LD_LIBRARY_PATH=$(ES_LIBRARY_PATH) ES_DATA_PATH=$(ES_DATA_PATH) es-test
AI_NAME = alvin
ES_INCS = $(ES_INCLUDE_PATH) -I es
ES_SRC = es/main.es
ES_TARGET = $(ROOT)/bin/$(AI_NAME).eso
TESTS = \
  tests/main.test \
  tests/intro_video.test \
  tests/select_image.test \
  tests/news_skill.test \
  tests/take_picture.test \
  tests/reminder_skill.test \
  tests/time_skill.test \
  tests/call_skill.test \
  tests/usa_presidents.test

TESTS2 = \
  tests/words.test

ifdef DEBUG
DEBUG_TARGET = /dev/stdout
else
DEBUG_TARGET = /dev/null
endif

ifdef MEMCHECK
#MEMCHECKER = valgrind --error-exitcode=1 --leak-check=full --show-leak-kinds=all --num-callers=50 --suppressions=valgrind.supp
MEMCHECKER = valgrind --error-exitcode=1 --leak-check=full --show-leak-kinds=all --num-callers=50
else
MEMCHECKER =
endif

INC = \
  es/alvin_basic.es \
  es/animal.es \
  es/being.es \
  es/buildings.es \
  es/conversation.es \
  es/hobbies.es \
  es/human.es \
  es/profession.es \
  es/sports.es \
  es/world.es

all: $(ES_TARGET)

$(ES_TARGET):	$(ES_SRC) $(INC)
	$(ESC) --app-version=$(VERSION) -I . -I $(ES_INCS) $< -o $@

test::   $(ES_TARGET)
	@export TESTS_OK="1"; \
	for TEST in $(TESTS); do \
		echo "RUNNING TEST SCRIPT " $${TEST}; \
		echo $(MEMCHECKER) $(ESTEST) -r -3 -b -s $${TEST} $(ES_TARGET); \
		$(MEMCHECKER) $(ESTEST) -r -3 -b -s $${TEST} $(ES_TARGET) > $(DEBUG_TARGET); \
		if [ $$? -eq "0" ]; then \
			echo "TESTING $${TEST} OK"; \
		else \
			echo "TESTING $${TEST} FAIL"; \
			export TESTS_OK="0"; \
		fi; \
	done; \
	if [ "$${TESTS_OK}" -eq "1" ]; then \
		echo "TESTS OK"; \
	else \
		echo "TESTS FAILED"; \
	fi;

test::
	@export TESTS_OK="1"; \
	for TEST in $(TESTS2); do \
		echo "RUNNING TEST SCRIPT " $${TEST}; \
		echo $(MEMCHECKER) $(ESTEST) $${TEST}; \
		$(MEMCHECKER) $(ESTEST) $${TEST} > $(DEBUG_TARGET); \
		if [ $$? -eq "0" ]; then \
			echo "TESTING $${TEST} OK"; \
		else \
			echo "TESTING $${TEST} FAIL"; \
			export TESTS_OK="0"; \
		fi; \
	done; \
	if [ "$${TESTS_OK}" -eq "1" ]; then \
		echo "TESTS OK"; \
	else \
		echo "TESTS FAILED"; \
	fi;

release:: $(ES_TARGET)
	cp $(ES_TARGET) releases/alvin.$(VERSION).eso
	@export TESTS_OK="1"; \
	REL=2; \
	while [ $${REL} -lt $(VERSION) ]; do \
		echo "TESTING UPDATE FOR REL $${REL}"; \
		INPUTS=""; \
		let NREL=$${REL}+1; \
		while [ $${NREL} -le $(VERSION) ]; do \
		    INPUTS="$${INPUTS} -i updates/$${NREL}.es "; \
			let NREL=$${NREL}+1; \
		done; \
		for TEST in $(TESTS); do \
			echo "RUNNING TEST SCRIPT " $${TEST}; \
			echo $(MEMCHECKER) $(ESTEST) -r -3 -b -s $${INPUTS} $${TEST} releases/alvin.$${REL}.eso; \
			$(MEMCHECKER) $(ESTEST) -r -3 -b -s $${INPUTS} $${TEST} releases/alvin.$${REL}.eso > $(DEBUG_TARGET); \
			if [ $$? -eq "0" ]; then \
				echo "TESTING $${TEST} OK"; \
			else \
				echo "TESTING $${TEST} FAIL"; \
				export TESTS_OK="0"; \
			fi; \
		done; \
		let REL=$${REL}+1; \
	done; \
	if [ "$${TESTS_OK}" -eq "1" ]; then \
		echo "TESTS OK"; \
	else \
		echo "TESTS FAILED"; \
	fi;

clean:
	rm -f $(ES_TARGET)

