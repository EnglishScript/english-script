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

ESC = es-c
ESTEST = es-test
AI_NAME = alvin
ES_INCS = ${ES_INCLUDE_PATH}
ES_SRC = $(AI_NAME).es
ES_TARGET = $(AI_NAME).eso
TESTS = $(AI_NAME).test intro_video.test select_image.test news_skill.test

INC = \
animal.es \
being.es \
buildings.es \
conversation.es \
hobbies.es \
human.es \
profession.es \
sports.es \
world.es

all: $(ES_TARGET)

$(ES_TARGET):	$(ES_SRC) $(INC)
	$(ESC) -I . -I $(ES_INCS) $< -o $@

test:   $(ES_TARGET)
	@export TESTS_OK="1"; \
	for TEST in $(TESTS); do \
		echo "RUNNING TEST SCRIPT " $${TEST}; \
		$(ESTEST) -r -3 -b -s $${TEST} $(ES_TARGET); \
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

clean:
	rm -f $(ES_TARGET)

