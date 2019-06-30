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

VERSION = 2

SHELL:= /bin/bash

ROOT = ../..
ESC = es-c
ESTEST = es-test
AI_NAME = alvin
ES_INCS = ${ES_INCLUDE_PATH} -I es
ES_SRC = es/main.es
ES_TARGET = $(ROOT)/bin/$(AI_NAME).eso
TESTS = \
  test/main.test \
  test/intro_video.test \
  test/select_image.test \
  test/news_skill.test \
  test/take_picture.test \
  test/reminder_skill.test \
  test/time_skill.test \
  test/call_skill.test \
  test/usa_presidents.test

ifdef DEBUG
DEBUG_TARGET = /dev/stdout
else
DEBUG_TARGET = /dev/null
endif

ifdef MEMCHECK
MEMCHECKER = valgrind --error-exitcode=1 --leak-check=full --show-leak-kinds=all --num-callers=50 --suppressions=valgrind.supp
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

test:   $(ES_TARGET)
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

release: $(ES_TARGET)
	cp $(ES_TARGET) releases/alvin.$(VERSION).eso
	@export TESTS_OK="1"; \
	REL=1; \
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

