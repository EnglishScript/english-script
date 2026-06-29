/*
 * Copyright (C) 2009–2026 Tommi Mänttäri
 *
 * This file is part of EnglishScript.
 *
 * EnglishScript is dual-licensed:
 *   - GNU Lesser General Public License v2.1 only (see LICENSE)
 *   - Commercial license (support@simua.com)
 *
 * See https://www.englishscript.com/licensing for commercial licensing.
 *
 * SPDX-License-Identifier: LGPL-2.1-only
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
        Remember that that someone opened the 1st conversation with
        you.
        Ask that someone to wait.
    Else.
       Start having the 1st conversation with that someone.
    End.
    Forget that that someone opens the 1st conversation with you.
End.
*/
/*
If you are having a conversation with someone and that someone
says "bye." to you, then that someone closes the conversation with you.
 */

To know something.
    Ask that something.
End.

To introduce you.
    /*FIXME: Tell me your name.*/
    Tell me that you are an artificial intelligence.
End.

/*A pizza is a thing.*/

To have a conversation with a user.
    /*Focus on the user.*/
    Until the user close the conversation with you then.
        If the user tells you that somebody does something then.
            /*If the user tells you that this is some thing then.
                If the user point to coordinates on this image then.
                    Remember that the thing is in this image in the coordinates.
                Else.
                    Remember that the thing is in this image.
                End.
                Print "". / * FIXME: this is not needed here. * /
            Else.*/
                Remember that something.
            /*End.*/
            Say "Ok" to the user.
            /*Wait for a response.
            Ask ImageToText to tell you in a short sentence that what objects does ImageToText see.
            Do not wait for a response.
            Print "Step0".
            Until ImageToText tells you that ImageToText sees someone then wait.
            Print "Step1".
            If ImageToText tells you that ImageToText sees a pizza then.
                Print "Step2a".
                Say "Ok" to ImageToText.
                Print "Step2b".
                Tell LLM that LLM sees a pizza.
                Print "Step2c".
                / *Tell LLM that that somebody does something. * /
                Remember shortly the user.
                Print "Step2d".
                Tell LLM that the user is hungry.
                Print "Step2e".
            End.
            Print "Step3".*/
        End.
        If the user tells you that somebody did something then.
            Remember that something.
            Say "Ok" to the user.
        End.
        /*TODO: If the user tells you that somebody does not do something then.
            Say "Ok" to the user.
            Remember that something.
        End.
        */
        If the user asks you something then.
            /*Print "Telling...".*/
            Tell the user that something.
        End.
        If the user asks you that does somebody do something then.
            If the user ask you that what are you then.
                Introduce you.
            Else.
                If the user asks you that how are you then.
                    Tell the user that you are fine.
                Else.
                    If the user asks you that how do you do then.
                        Do not wait for a response.
                        Ask the user that how do the user do.
                        Wait for a response.
                    Else.
                        /*Answer the user whether that somebody does that something.*/
                        Answer the user that something.
                    End.
                End.
            End.
        End.
        If the user asks you that did somebody do something then.
            /*Print "Answering...".*/
            Answer that something.
        End.
        If the user ask you to do something then.
        /*TODO: If you know how to do that something, then do that something,
            else tell the user that you do not know how to do
            that something.*/
            /*Print "Doing...".*/
            Say "Ok" to the user.
            Remember shortly from that something.
            Start to do that something.
        End.
        /*If the user ask you to do something somebody then.
            Say "Ok" to the user.
            Remember shortly from that something.
            Start to do that something.
        End.*/
        If the user ask you that /* TODO: what can you do */ can you do something then.
            Tell the user that you remember things for the user /* FIXME: and you do things for the user*/.
            Tell the user that you do things for the user.
            Tell the user that you /*TODO: can*/ help the user.
        End.
        /* TODO: add evaluation of the verb a check that the "to"-verb is not
           being executed to avoid re-remembering the doing.*/
        /*If you / *TODO: are focused* / focus on the user then.
          If the user have something and you do not know that something and you want to know that something then.
            Remember that you want to know that something.
          Else.
            If the user have something and you want to know about that something then.
              Remember that you want to know about that something.
            End.
          End.
        End.*/
        /*If you want to know something then remember that you want to know that something.*/
        Wait.
    End.
End.

/*
If you need to ask someone something and you are having a
conversation with that someone, then ask that someone that something.

If someone says your name and you are not having a
conversation with that someone, then that someone opens a
conversation with you.

If you are having a conversation with someone and you do 
not know that someone's name, then you need to ask that someone
that someone's name.
*/
/* TODO: move to somewhere else: 
To ask someone about something.
    Ask that someone that how did that someone get that something.
End.
*/

To call someone by a name.
  Say the name.
End.

