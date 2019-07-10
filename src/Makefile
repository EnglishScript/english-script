#
#	The Human Application Protocol (HAP) - 
#	a communication protocol for human interaction and simulation.
#
#	Copyright (C) 2009 Tommi Manttari
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

ROOT = ..

SUBDIRS = words alvin

all:
	@echo Building all...;
	@for s in $(SUBDIRS); do \
		echo "Building $$s..."; \
		(cd $$s; make -j10 all); \
	done;

clean:
	@echo Cleaning...
	@for s in $(SUBDIRS); do \
		echo "Cleaning $$s..."; \
		(cd $$s; make -j10 clean); \
	done;

test:
	@echo Testing...
	@for s in $(SUBDIRS); do \
		echo "Testing $$s..."; \
		(cd $$s; make test); \
	done;

