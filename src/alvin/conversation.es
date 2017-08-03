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

"register", "registers" and "registered" are verbs.
The verb "register" is the 1st form of the verb "register".
The verb "registered" is the 2nd form of the verb "register".
The verb "registered" is the 3rd form of the verb "register".
The verb "registers" is the 3rd person form of the verb "register".

"unregister", "unregisters" and "unregistered" are verbs.
The verb "unregister" is the 1st form of the verb "unregister".
The verb "unregistered" is the 2nd form of the verb "unregister".
The verb "unregistered" is the 3rd form of the verb "unregister".
The verb "unregisters" is the 3rd person form of the verb "unregister".

"open", "opens" and "opened" are verbs.
The verb "open" is the 1st form of the verb "open".
The verb "opened" is the 2nd form of the verb "open".
The verb "opened" is the 3rd form of the verb "open".
The verb "opens" is the 3rd person form of the verb "open".

"close", "closes" and "closed" are verbs.
The verb "close" is the 1st form of the verb "close".
The verb "closed" is the 2nd form of the verb "close".
The verb "closed" is the 3rd form of the verb "close".
The verb "closes" is the 3rd person form of the verb "close".

"conversation" and "conversations" are nouns.
The noun "conversations" is the plural form of the noun "conversation".

/*
A function "__hap_register_conversation".
A function "__hap_unregister_conversation".

To register a conversation.
    Call the function "__hap_register_conversation" with the
    conversation.
End.

To unregister a conversation.
    Call the function "__hap_unregister_conversation" with the
    conversation.
End.

If someone opens a 1st conversation with you, then.
    If you are having a 2nd conversation with somebody, then.
        Remember that someone opened the 1st conversation with
        you.
        Ask someone to wait.
    Else.
       Start having the 1st conversation with someone.
    End.
    Forget that someone opens the 1st conversation with you.
End.
*/
/*
If you are having a conversation with someone and someone
says "bye." to you, then someone closes the conversation with you.
 */

To have a 1st conversation with someone.
    Until someone closes the 1st conversation with you then.
        If someone tells you that somebody does something then.
            /*Print "Remembering...".*/
            Remember something.
        End.
        If someone asks you something then.
            /*Print "Telling...".*/
            Tell someone something.
        End.
        If someone asks you that does somebody do something,
        then.
            /*Print "Answering...".*/
            Answer something.
        End.
        If someone asks you to do something then.
        /*TODO: If you know how to do something, then do something,
            else tell someone that you do not know how to do 
            something.*/
            /*Print "Doing...".*/
            Start to do something.
        End.
        If you want to know something /* TODO: and you don't know something */
        then ask someone something.
        /*
        If you want to know something about someone then
        ask someone about something.
        */
        If you want to know /*TODO: if */that somebody does something then 
        ask me /*TODO: if*/whether somebody does something.
        Wait.
    End.
    /*
    If somebody opened a 2nd conversation with you, then.
        Start having the 2nd conversation with somebody.
        Forget that somebody opened the 2nd conversation
        with you.
    End.*/
End.
/*
If you need to ask someone something and you are having a
conversation with someone, then ask someone something.

If someone says your name and you are not having a
conversation with someone, then someone opens a
conversation with you.

If you are having a conversation with someone and you do 
not know someone's name, then you need to ask someone
someone's name.
*/
/* TODO: move to somewhere else: 
To ask someone about something.
    Ask someone that how did someone get something.
End.
*/

