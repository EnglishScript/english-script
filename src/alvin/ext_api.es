A picture.
It has a name "this image" and a name "this picture".
                                                                                                                                                                         
A function "__ext_select_image_from_gallery".
A function "__ext_take_picture".
A function "__ext_show_image".
A function "__ext_show_settings".
A function "__ext_change_tts_state".
A function "__ext_get_pointer_coordinates".

To select an image from a gallery.
    Call the function "__ext_select_image_from_gallery" with the image.
End.

To take a picture.
    Call the function "__ext_take_picture" with the picture.
End.

To show an image.
    Call the function "__ext_show_image" with the image.
End.

To show something.
    If something is in an image then.
        Show the image.
    End.
End.

/*To show settings.
    Call the function "__ext_show_settings" with the settings.
End.*/


A thing.
The thing has a name "TTS".

To enable TTS.
    Call the function "__ext_change_tts_state" with "on".
End.

To disable TTS.
    Call the function "__ext_change_tts_state" with "off".
End.

"pointer" and "pointers" are nouns.
The noun "pointers" is the plural form of the noun "pointer".
"coordinate" and "coordinates" are nouns.
The noun "coordinates" is the plural form of the noun "coordinate".
"unit" and "units" are nouns.
The noun "units" is the plural form of the noun "unit".

A coordinate is units.
A pointer has 3 coordinates.

A pointer.
The 1st coordinate of the pointer is 0 units.
The 2nd coordinate of the pointer is 0 units.
The 3rd coordinate of the pointer is 0 units.

To read a pointer.
    Call the function "__ext_get_pointer_coordinates" with the 1st coordinate of the pointer, 
    the 2nd coordinate of the pointer and the 3rd coordinate of the pointer.
End.


