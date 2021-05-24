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

To know something.
    Ask something.
End.

To introduce you.
    /*FIXME: Tell me your name.*/
    Tell me that you are an artificial intelligence.
End.

To have a 1st conversation with someone.
    /*Focus on someone.*/
    Until someone closes the 1st conversation with you then.
        If someone tells you that somebody does something then.
            If someone tells you that this is some thing then.
                If I point to coordinates on this image then.
                    Remember that the thing is in this image in the coordinates.
                Else.
                    Remember that the thing is in this image.
                End.
                Print "". /* FIXME: this is not needed here. */
            Else.
                Remember something.
            End.
            Say "Ok" to someone.
        End.
        If someone tells you that somebody did something then.
            Remember something.
            Say "Ok" to someone.
        End.
        /*TODO: If someone tells you that somebody does not do something then.
            Say "Ok" to someone.
            Remember something.
        End.
        */
        If someone asks you something then.
            /*Print "Telling...".*/
            Tell someone something.
        End.
        If someone asks you that does somebody do something then.
            If someone asks you that what are you then.
                Introduce you.
            Else.
                If someone asks you that how are you then.
                    Tell someone that you are fine.
                Else.
                    If someone asks you that how do you do then.
                        Do not wait for a response.
                        Ask someone that how does someone do.
                        Wait for a response.
                    Else.
                        /*Answer someone whether somebody does something.*/
                        Answer something.
                    End.
                End.
            End.
        End.
        If someone asks you that did somebody do something then.
            /*Print "Answering...".*/
            Answer something.
        End.
        If someone asks you to do something then.
        /*TODO: If you know how to do something, then do something,
            else tell someone that you do not know how to do
            something.*/
            /*Print "Doing...".*/
            Say "Ok" to someone.
            Remember shortly from something.
            Start to do something.
        End.
        If someone asks you that /* TODO: what can you do */ can you do something then.
            Tell someone that you remember things for someone /* FIXME: and you do things for someone*/.
            Tell someone that you do things for someone.
            Tell someone that you /*TODO: can*/ help someone.
        End.
        /* TODO: add evaluation of the verb a check that the "to"-verb is not
           being executed to avoid re-remembering the doing.*/
        /*If you / *TODO: are focused* / focus on someone then.
          If someone has something and you do not know something and you want to know something then.
            Remember that you want to know something.
          Else.
            If someone has something and you want to know about something then.
              Remember that you want to know about something.
            End.
          End.
        End.*/
        /*If you want to know something then remember that you want to know something.*/
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

To call someone by a name.
  Say the name.
End.

