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
ES_TEST = $(AI_NAME).test

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
	@echo "RUNNING TEST SCRIPT " $(ES_TEST); \
	$(ESTEST) -r -3 -b $(ES_TEST) $(ES_TARGET); \
	if [ $$? -eq "0" ]; then \
		echo "TESTING $(ES_TEST) OK"; \
	else \
		echo "TESTING $(ES_TEST) FAIL"; \
	fi

clean:
	rm -f $(ES_TARGET)

