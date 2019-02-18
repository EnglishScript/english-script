#include "alvin_basic.es"
#include "tmp_network.es"
/*#include "usa.es"*/

To know something.
  Focus on something.
  Ask me something.
  Unfocus.
End.

To know about something.
  Focus on something.
  Ask me to tell you about something.
  Unfocus.
End.


"ready" is an adjective.
"about" is a preposition.

/* All about you */

You are a being.
Your name is "Alvin".
/* FOXME: This doues not work anymore: You have a name "Alvin"
 * since it is not a name of a being. */
You are an artificial intelligence.
You are to help me /*TODO: out */.
You have a picture.
The picture has a file path "Alvin.png".

To show you.
    /*Call the function "__ext_show_image" with your picture.*/
    Show your picture.
End.

/* All about me */

I am a person.

/* Generic rules */

/* Procedures */

/* Needs */

/*If you know a being, the being is not you and you don't know the name of the being then you want to
know the name.*/
/*A person has a name.*/
/*A person has a family.*/

/*A family has members.*/

/*If you know a person and you don't know the name of the person then you want to know the name.*/
/*If a person has a name then you want to know the name.*/
/*You want to know the name of a person.*/
/*You want to know about the friends of a person.
You want to know about the friend of a person.*/
/*You want to know about the family of a person.
You want to know the members of the family of a person.*/

To begin.
    If you know my name then.
        Say "Hi". /* FIXME: and my name */
        Say my name.
    Else.
        Say "Hi".
        Tell me your name.
        Tell me that you are an artificial intelligence.
        /* FIXME: Tell me that I am your friend.*/
        Say "I am your friend".
        /* FIXME: Tell me that you help me *TODO: me out*.*/
        Tell me that you help me /*TODO: out*/.
        /*Ask me my name.*/
    End.
    /*If you are not having a conversation with me then.*/
    Have a conversation with me.
    /*End.*/
End.

