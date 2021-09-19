/*A noun has a plural form.
A verb has 3 forms.
A verb has person forms.*/

/* robotic arm class */

A robotic arm is a robot.

/* servo motor class */

/* FIXME: memory leak if these are defined
A servo motor is a motor.
A servo motor has a name and a grip voltage.
The grip voltage is a voltage.
*/

/* robotic arm class */

"kgcm" and "kgcms" are nouns.
The noun "kgcms" is the plural form of the noun "kgcm".
"dps" and "dpses" are nouns.
The noun "dpses" is the plural form of the noun "dps".

"polarity" and "polarities" are nouns.
The noun "polarities" is the plural form of the noun "polarity".

/* FIXME: this should not be needed */
"reverse", "reverses", "reversed" are verbs.
The verb "reverse" is the 1st form of the verb "reverse".
The verb "reversed" is the 2nd form of the verb "reverse".
The verb "reversed" is the 3rd form of the verb "reverse".
The verb "reverses" is the 3rd person form of the verb "reverse".
/* FIXME: this should not be needed */
"measure", "measures", "measured" are verbs.
The verb "measure" is the 1st form of the verb "measure".
The verb "measured" is the 2nd form of the verb "measure".
The verb "measured" is the 3rd form of the verb "measure".
The verb "measures" is the 3rd person form of the verb "measure".

A robotic arm has a name, servo motors, joints, links, a wrist, a tag and an end effector.
"angle-to-PWM-time" is a noun.
"PWM" is a noun.

An angle is degrees.
A coordinate is meters.
/*Reversed and normal are polarities.*/

The tag of a robotic arm has a position and an orientation.
The position of the tag has coordinates.
/*FIXME: this should be enough: The coordinates of the position of the tag are meters.*/
The orientation of the tag has angles.

/* servo motors sub-class */

The servo motors have a minimum angle, a maximum angle, a lift power, a speed,
a target angle, an initial angle, a pulse cycle, a polarity, a minimum PWM time,
a maximum PWM time, a voltage, a grip voltage and a maximum voltage.
The minimum angle is degrees.
The maximum angle is degrees.
The lift power is kgcms.
The speed is dpses.
The voltage is volts.
The maximum voltage is volts.

/*FIXME: Initialize a robotic arm does not compile with these:
A target angle is an angle.
An initial angle is an angle.
An initial look is an angle.*/

The pulse cycle of the servo motors of a robotic arm is seconds.
The minimum PWM time of the servo motors is seconds.
The maximum PWM time of the servo motors is seconds.
A voltage is volts.

/* joints sub-class */

The joints of a robotic arm have motors, a minimum angle, a maximum angle and 2 links.
The minimum angle is degrees /*an angle*/.
The maximum angle is degrees /*an angle*/.

/* links sub-class */
The links of a robotic arm have a length and a tag.
The length is meters.

An object is a thing.
A robot is an object.

/* classes */
An electronic chip is a machine.
An electronic chip has a name, connector pins and a case.
"system-on-a-chip" is a noun.
A system-on-a-chip chip is an electronic chip.
"ESP32-WROOM-32D" is a noun.
An ESP32-WROOM-32D chip is a system-on-a-chip chip.
An ESP32-WROOM-32D chip has 60 connector pins.

"debug" and "debugging" are adjectives.

"ESP32", "ADC", "TCP", "WIFI", and "EEPROM" are nouns.
An ESP32 software has a ADC driver, a TCP server, a WIFI server, a device handler, an EEPROM driver and a motor driver.
The device handler of an ESP32 software has a debug level.

"MG996R" is a noun.
An MG996R motor is the servo motors of a robotic arm.
The minimum angle of an MG996R motor is 0 degrees.
The maximum angle of an MG996R motor is 360 degrees.
The lift power of an MG996R motor is 1.6 kgcms.
The grip voltage of an MG996R motor is 0.550 volts.
"MG90S" is a noun.
A MG90S motor is the servo motors of a robotic arm.
The minimum angle of an MG90S motor is 0 degrees.
The maximum angle of an MG90S motor is 360 degrees.
The lift power of an MG90S motor is 1.6 kgcms.
The grip voltage of an MG90S motor is 0.550 volts.

/*FIXME: does not compile:
To get a target angle for a servo motor.
    Ask this device the target angle of the servo motor.
End.*/

To register a robotic arm.
    Ask this device to register a mechanical model for the robotic arm.
End.

To move a robotic arm to something.
    /*If unknown if the robotic arm is registered then.
        Register the robotic arm.
    End.*/
    Ask this device to move the robotic arm to something.
    For each of the servo motors of the robotic arm.
        If  the servo motor has a target angle then.
            /*FIXME: there should not be any need for above If-statement to get below line compiled*/
            Ask this device the target angle.
        End.
    End.
    Ask this device to start moving the robotic arm.
End.

