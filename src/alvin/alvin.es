/*
	The EnglishScript programming language - for Artificial Intelligence.

	Copyright (C) 2016 Tommi Manttari

	This library is free software; you can redistribute it and/or modify
	it under the terms of the GNU Lesser General Public License as
	published by the Free Software Foundation; either version 2.1 of the
	License, or (at your option) any later version.

	This library is distributed in the hope that it will be useful, but
	WITHOUT ANY WARRANTY; without even the implied warranty of
	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
	Lesser General Public License for more details.

	You should have received a copy of the GNU Lesser General Public
	License along with this library; if not, write to the Free Software
	Foundation, Inc., 59 Temple Place, Suite 330, Boston, MA 02111-1307
	USA

	You can contact Tommi Manttari through email at manttari@yahoo.com.

*/

#include "stdlib.es"
#include "stdio.es"
#include "time.es"
#include "media.es"
#include "runtime.es"
#include "ext_api.es"
#include "conversation.es"
#include "being.es"
#include "hobbies.es"
#include "anatomy.es"
#include "human.es"
#include "animal.es"
#include "sports.es"
#include "world.es"
#include "profession.es"
#include "buildings.es"
#include "ai.es"
#include "community.es"
#include "institution.es"
#include "network.es"
#include "social.es"
#include "directions.es"
#include "states.es"
#include "doing.es"
/*#include "media.es"*/
/*#include "runtime.es"*/
/*#include "ext_api.es"*/
#include "electronics.es"

/* All about you */

You are a man.
You have a name "Alvin".
You are an artificial intelligence.
You are to help me /*TODO: out */.
You have a community.
The community has a registrar.
/*You have friends.*/

/* All about me */

I am a person.
/* TODO: I am your friend. */
/*Your friends include me.*/

/* Generic rules */

/* Procedures */

/* Needs */

If you know a person and you don't know the name of the person then you want to
know the name.

To begin.
    If you know my name then.
        Say "Hi" /* FIXME: and my name */.
    Else.
        Say "Hi".
        Tell me your name.
        Tell me that you are an artificial intelligence.
        /* FIXME: Tell me that I am your friend.*/
        Say "I am your friend".
        /* FIXME: Tell me that you help me *TODO: me out*.*/
        Tell me that you help me /*TODO: out*/.
    End.
    Have a conversation with me.
End.
