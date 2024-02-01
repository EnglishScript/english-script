#include "alvin_basic.es"
#include "alvin.es"
#include "tmp_network.es"
#include "AlvinRobot.es"
#include "conversation.es"

A User.
The user is me.

To have a conversation with LLM.
    Until LLM closes the conversation with you then.
        If LLM tells you that somebody does something then.
            Remember something.
            /*End.*/
            Say "Ok" to LLM.
        End.
        If LLM tells you that somebody did something then.
            Remember something.
            Say "Ok" to LLM.
        End.
        /*TODO: If LLM tells you that somebody does not do something then.
            Say "Ok" to LLM.
            Remember something.
        End.
        */
        If LLM asks you something then.
            /*Print "Telling...".*/
            Tell LLM something.
        End.
        If LLM asks you that does somebody do something then.
            If LLM asks you that what are you then.
                Introduce you.
            Else.
                If LLM asks you that how are you then.
                    Tell LLM that you are fine.
                Else.
                    If LLM asks you that how do you do then.
                        Do not wait for a response.
                        Ask LLM that how does LLM do.
                        Wait for a response.
                    Else.
                        /*Answer LLM whether somebody does something.*/
                        Answer something.
                    End.
                End.
            End.
        End.
        If LLM asks you that did somebody do something then.
            /*Print "Answering...".*/
            Answer something.
        End.
        If LLM asks you to do something then.
        /*TODO: If you know how to do something, then do something,
            else tell LLM that you do not know how to do
            something.*/
            /*Print "Doing...".*/
            Print "Ask1".
            /*FIXME:If LLM asks you to ask the user whether the user does something then.*/
            If LLM asks you to ask the user whether the user eats a pizza then.
                Print "Ask2".
                Say "Ok" to LLM.
                /*FIXME: Ask the user whether the user does something. */
                Ask the user that does the user eat a pizza.
                Print "Ask3".
            Else.
                Print "Ask4".
                Say "Ok" to LLM.
                Remember shortly from something.
                Start to do something.
                Print "Ask5".
            End.
        End.
        /*If LLM asks you to do something somebody then.
            Say "Ok" to LLM.
            Remember shortly from something.
            Start to do something.
        End.*/
        If LLM asks you that /* TODO: what can you do */ can you do something then.
            Tell LLM that you remember things for LLM /* FIXME: and you do things for LLM*/.
            Tell LLM that you do things for LLM.
            Tell LLM that you /*TODO: can*/ help LLM.
        End.
        /* TODO: add evaluation of the verb a check that the "to"-verb is not
           being executed to avoid re-remembering the doing.*/
        /*If you / *TODO: are focused* / focus on LLM then.
          If LLM has something and you do not know something and you want to know something then.
            Remember that you want to know something.
          Else.
            If LLM has something and you want to know about something then.
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
    Tell LLM that LLM is nice.
End.

To have a conversation with this device.
End.


To have a conversation with ImageToText.
    /*
    Until ImageToText closes the conversation with you then.
        Print "Jiihaa!".
        If ImageToText tells you that ImageToText sees something then.
            Print "Joooo!".
            Remember something.
            Say "Ok" to ImageToText.
            Tell LLM that LLM sees something.
        End.
        Wait.
    End.
    */
End.

To have a conversation with ESP32.
End.

To begin.
    Start having a conversation with the user.
    Start having a conversation with LLM.
    Start having a conversation with this device.
    Start having a conversation with ImageToText.
End.


