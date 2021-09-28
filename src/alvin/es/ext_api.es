An image.
The image /*It*/ has a name "this image".

/*A function "__ext_select_image_from_gallery".
A function "__ext_take_picture".
A function "__ext_show_image".
A function "__ext_show_settings".
A function "__ext_get_pointer_coordinates".
A function "__ext_call_phone_number".*/
A function "__ext_change_tts_state".

To select an image from a gallery.
    Ask the device to select the image from the gallery.
    /*Call the function "__ext_select_image_from_gallery" with the image.*/
End.

To take a picture.
    Ask the device to take the picture.
    /* Call the function "__ext_take_picture" with the picture. */
End.

To show an image.
    Ask the device to show the image in the file path of the image.
    /* Call the function "__ext_show_image" with the image. */
End.

To show a picture.
    Ask the device to show the picture in the file path of the picture.
    /* Call the function "__ext_show_image" with the picture. */
End.

To show settings.
    Ask the device to show the settings.
    /* Call the function "__ext_show_settings". */
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

A thing.
The thing has a name "TTS".

To enable TTS.
    Call the function "__ext_change_tts_state" with "on".
End.

To disable TTS.
    Call the function "__ext_change_tts_state" with "off".
End.

A coordinate is units.
/*
A pointer has 3 coordinates.

A pointer.
The 1st coordinate of the pointer is 0 units.
The 2nd coordinate of the pointer is 0 units.
The 3rd coordinate of the pointer is 0 units.

To read a pointer.
    Call the function "__ext_get_pointer_coordinates" with the 1st coordinate of the pointer, 
    the 2nd coordinate of the pointer and the 3rd coordinate of the pointer.
End.
*/

To call a person to a phone number.
    Ask the device to call a person to the phone number.
    /* Call the function "__ext_call_phone_number" with the phone number. */
End.

To call a person.
    If unknown if the person has a phone number then.
        Remember that the person has a phone number.
        Ask the phone number of the person.
    End.
    If the person has a phone number then.
        /*TODO:Tell me that you are calling the person.*/
        /*TODO: different speaker Id for: Tell me that you call the person.*/
        /*A phone number "X".*/
        /*Assign the phone number of the person to the phone number "X".*/
        Call the person to the phone number.
    End.
End.

