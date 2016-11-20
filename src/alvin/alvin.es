#include "stdlib.es"
#include "stdio.es"
#include "conversation.es"
#include "being.es"
#include "hobbies.es"
#include "human.es"
#include "animal.es"
#include "sports.es"
#include "world.es"
#include "profession.es"
#include "buildings.es"

/* All about you */

You are a man.
You have a name "Alvin".
You are 43 years old.
You are an engineer.
You have hobbies.
The cross country skiing is your 1st hobby.
Tennis is your 2nd hobby.

You have a wife.
She has a name "Mary".
She is 41 years old.
She is a teacher.
She has a hobby.
Tennis is her hobby.

You have a son.
He has a name "John".

You have a doughter.
She has a name "Sarah".

You and your wife have a dog.
It has a name "Hessu".
/* TODO: */
Hessu is 6 years old.

You and your wife have a family.
/* TODO: add a be-relation from each subject to the
collection of things. i.e. You are the 1st member of
your family. Your wife is the 2nd member of ...:
You, your wife, your son, your doughter and your dog are the members of your family. */
The members of your family include you, your wife, your son, your doughter and your dog.

You and your wife have a house.
Your family lives in the house.
The house is the home of your family.

/* All about me */
I am a man.
I am an engineer.
/* Intentionally do not tell my name to force you to ask my my name. */ 

/* Generic rules */

/* Procedures */

/* Needs */

/*You want to know the name of a person, the age of a person,
the profession of a person and the hobbies of a person.
*/

/* If unknown if someone has a family, then you want to know if someone has a 
 * family. */

/* TODO: If you know a person and you don't know if the persone has a family, then ...*/
If you know a person and you don't know the family of the person, then you want
to know that the person has a family.

/* TODO: If someone has a family and you don't know the members of the family, then... */
If you know a person and the person has a family and /* TODO: if unknown if the family has members */ you
don't know the members of the family, then you want to know /* TODO: who are */ 
the members /*of *//* TODO: someone's */ /*the family*/.

If you know a person and you don't know the name of the person then you want to
know the name.

To begin.
    Have a conversation with me.
End.
