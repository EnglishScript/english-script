A friend is a person.
A pet is a person.
You are a person.

To forget that how to do something.
    Call the function "__hap_forget_something" with something.
End.

Forget that how to show something.

A function "__ext_show_image".

To show an image.
    Call the function "__ext_show_image" with the image.
End.

To show a picture.
    Call the function "__ext_show_image" with the picture.
End.

To show a person.
    If the person has an image then.
        Show the image.
    Else.
        If the person is in an image then.
            Show the image.
        End.
    End.
End.

To have a 1st conversation with someone.
    /*Focus on someone.*/
    Until someone closes the 1st conversation with you then.
        If someone tells you that somebody does something then.
            /*Print "Remembering...".*/
            If someone tells you that this is some thing then.
                /*Tell me about this image.*/
                Coordinates.
                Remember the coordinates.
                Remember that the thing is in this image in the coordinates.
                Remember the 1st coordinate.
                Remember the 2nd coordinate.
                Remember the 3rd coordinate.
                The 1st coordinate is the same as the 1st coordinate of the pointer.
                The 2nd coordinate is the same as the 2nd coordinate of the pointer.
                The 3rd coordinate is the same as the 3rd coordinate of the pointer.
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

