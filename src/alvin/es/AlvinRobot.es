#include "robot.es"

/* the robot */
A robotic arm.
The robotic arm has /*a name and*/ an ESP32-WROOM-32D chip /*FIXME:, 1 motors, 1 joints, 2 links*/.
The name of the ESP32-WROOM-32D chip is "ESP32".
The ESP32-WROOM-32D chip has 0 retries.

/*"AlvinRobot" is a noun.
The name of the robotic arm is "AlvinRobot".*/

/* motors */
The 1st servo motor of the robotic arm is an MG90S motor.
The 1st servo motor of the robotic arm is connected to the connector pin 25 of the ESP32-WROOM-32D chip.
The pulse cycle of the 1st servo motor of the robotic arm is 0.002 seconds.
The minimum PWM time of the 1st servo motor of the robotic arm is 0.410 seconds.
The maximum PWM time of the 1st servo motor of the robotic arm is 2.450 seconds.
The speed of the 1st servo motor of the robotic arm is 10.1 dpses.
The minimum angle of the servo motor 1 of the robotic arm is 0 degrees.
The initial angle of the servo motor 1 of the robotic arm is 90 degrees.
The target angle of the servo motor 1 of the robotic arm is 120 degrees.
The voltage of the servo motor 1 of the robotic arm is measured from the connector pin 32.
The maximum voltage of the servo motor 1 of the robotic arm is 0.120 volts.

The 2nd servo motor of the robotic arm is an MG996R motor.
The 2nd servo motor of the robotic arm is connected to the connector pin 19 of the ESP32-WROOM-32D chip.
The pulse cycle of the 2nd servo motor of the robotic arm is 0.005 seconds.
The minimum PWM time of the 2nd servo motor of the robotic arm is 0.510 seconds.
The maximum PWM time of the 2nd servo motor of the robotic arm is 2.750 seconds.
The speed of the 2nd servo motor of the robotic arm is 10.1 dpses.
The initial angle of the servo motor 2 of the robotic arm is 90 degrees.
The target angle of the servo motor 2 of the robotic arm is 45 degrees.

The 3rd servo motor of the robotic arm is an MG90S motor.
The 3rd servo motor of the robotic arm is connected to the connector pin 26 of the ESP32-WROOM-32D chip.
The pulse cycle of the 3rd servo motor of the robotic arm is 0.005 seconds.
The minimum PWM time of the 3rd servo motor of the robotic arm is 0.510 seconds.
The maximum PWM time of the 3rd servo motor of the robotic arm is 2.750 seconds.
The speed of the 3rd servo motor of the robotic arm is 10.1 dpses.
The initial angle of the servo motor 3 of the robotic arm is 90 degrees.
The target angle of the servo motor 3 of the robotic arm is 45 degrees.

The 4th servo motor of the robotic arm is an MG90S motor.
The 4th servo motor of the robotic arm is connected to the connector pin 27 of the ESP32-WROOM-32D chip.
The pulse cycle of the 4th servo motor of the robotic arm is 0.005 seconds.
The minimum PWM time of the 4th servo motor of the robotic arm is 0.510 seconds.
The maximum PWM time of the 4th servo motor of the robotic arm is 2.750 seconds.
The speed of the 4th servo motor of the robotic arm is 10.1 dpses.
The initial angle of the servo motor 4 of the robotic arm is 90 degrees.
The target angle of the servo motor 4 of the robotic arm is 45 degrees.
The polarity of the 4th servo motor of the robotic arm is reversed.

The 5th servo motor of the robotic arm is an MG90S motor.
The 5th servo motor of the robotic arm is connected to the connector pin 16 of the ESP32-WROOM-32D chip.
The pulse cycle of the 5th servo motor of the robotic arm is 0.015 seconds.
The minimum PWM time of the 5th servo motor of the robotic arm is 0.410 seconds.
The maximum PWM time of the 5th servo motor of the robotic arm is 6.450 seconds.
The speed of the 5th servo motor of the robotic arm is 10.1 dpses.
The initial angle of the servo motor 5 of the robotic arm is 90 degrees.
The target angle of the servo motor 5 of the robotic arm is 45 degrees.

The 6th servo motor of the robotic arm is an MG90S motor.
The 6th servo motor of the robotic arm is connected to the connector pin 17 of the ESP32-WROOM-32D chip.
The pulse cycle of the 6th servo motor of the robotic arm is 0.025 seconds.
The minimum PWM time of the 6th servo motor of the robotic arm is 0.810 seconds.
The maximum PWM time of the 6th servo motor of the robotic arm is 5.450 seconds.
The speed of the 6th servo motor of the robotic arm is 40.1 dpses.
The initial angle of the servo motor 6 of the robotic arm is 0 degrees.
The target angle of the servo motor 6 of the robotic arm is 180 degrees.

/*
 * You control the robotic arm.
 * The number of the servo motors of the robotic arm is 1.
 * The 1st servo motor of the robotic arm is an mg996r motor.
 * The 1st servo motor is connected to you connector pin 16.
 * A pulse cycle of the 1st servo motor is 0.02 seconds.
 * A minimum pwm time of the 1st servo motor is 0.001 seconds.
 * A maximum pwm time of the 1st servo motor is 0.002 seconds.
 * A speed of the 1st servo motor of the robotic arm is 1.1 dpses.
 * A target angle of the 1st servo motor is 90 degrees.
 */

/* links */

The length of the 1st link of the robotic arm is 0.05 meters.
The length of the 2nd link of the robotic arm is 0.135 meters.
The length of the 3rd link of the robotic arm is 0.13 meters.
The length of the 4th link of the robotic arm is 0.06 meters.
The length of the 5th link of the robotic arm is 0.015 meters.

/* joints */

The 1st motor of the robotic arm is the 1st motor of the 1st joint of the robotic arm.
The 1st motor of the robotic arm is the 2nd motor of the 1st joint of the robotic arm.
/*FIXME: there should now be any need for giving the Nth here */
The minimum angle of the 1st joint is -90 degrees.
The maximum angle of the 1st joint is 90 degrees.
The 1st link of the robotic arm is the 1st link of the 1st joint.
The 2nd link of the robotic arm is the 2nd link of the 1st joint.

The 2nd motor of the robotic arm is the 1st motor of the 2nd joint of the robotic arm.
The 2nd motor of the robotic arm is the 2nd motor of the 2nd joint of the robotic arm.
The minimum angle of the 2nd joint is -90 degrees.
The maximum angle of the 2nd joint is 90 degrees.
The 2nd link of the robotic arm is the 1st link of the 2nd joint.
The 3rd link of the robotic arm is the 2nd link of the 2nd joint.

The 3rd motor of the robotic arm is the 1st motor of the 3rd joint of the robotic arm.
The 4th motor of the robotic arm is the 2nd motor of the 3rd joint.
The minimum angle of the 3rd joint is -90 degrees.
The maximum angle of the 3rd joint is 90 degrees.
The 3rd link of the robotic arm is the 1st link of the 3rd joint.
The 4th link of the robotic arm is the 2nd link of the 3rd joint.

The 5th motor of the robotic arm is the 1st motor of the 4th joint of the robotic arm.
The minimum angle of the 4th joint is -90 degrees.
The maximum angle of the 4th joint is 90 degrees.
The 4th link of the robotic arm is the 1st link of the 4th joint.
The 5th link of the robotic arm is the 2nd link of the 4th joint.

An ESP32 software.
The debug level of the device handler of the ESP32 software is full.

/* To remember if ESP32 was not able to process the sent message or
   the network connection to it was terminated. */
If someone is sorry then.
    Remember that someone was sorry.
End.

An object has a position.
The position of an object has coordinates.
A person has a position.
The position of a person has coordinates.
A ball is round.
A cup is an object.
A mug is an object.

/* Recognized objects */

A cup.
The 1st coordinate of the position of the cup is 0.0 meters.
The 2nd coordinate of the position of the cup is 0.075 meters.
The 3rd coordinate of the position of the cup is -0.2101 meters.

A mug.

The 1st coordinate of my position is -0.205 meters.
The 2nd coordinate of my position is 0.075 meters.
The 3rd coordinate of my position is -0.295 meters.

To initialize a robotic arm.
    Tell the ESP32-WROOM-32D chip to clear the memory of the ESP32-WROOM-32D chip.
    Tell the ESP32-WROOM-32D chip that the level of the device handler of the ESP32 software is full.
    Tell the ESP32-WROOM-32D chip that the ESP32-WROOM-32D chip controls the robotic arm.
    Tell the ESP32-WROOM-32D chip the number of the servo motors of the robotic arm.
    /*FIXME: Tell the ESP32-WROOM-32D chip that what is the number of servo motors of the robotic arm.*/
    /*FIXME: Tell the ESP32-WROOM-32D chip that the robotic arm has 7 servo motors.*/
    For each of the servo motors of the robotic arm.
        /*FIXME: This tella way too much about the robot: Tell the ESP32-WROOM-32D chip about the servo motor.*/
        /*If the servo motor has a minimum angle then.*/
        If the servo motor is an MG996R motor then.
            Tell the ESP32-WROOM-32D chip that the servo motor is an MG996R motor.
        End.
        If the servo motor is an MG90S motor then.
            Tell the ESP32-WROOM-32D chip that the servo motor is an MG90S motor.
        End.
        If the servo motor is connected to something.
            Tell the ESP32-WROOM-32D chip that the servo motor is connected to something.
        End.
        /*Tell the ESP32-WROOM-32D chip the pulse cycle of the servo motor.
        Tell the ESP32-WROOM-32D chip the minimum PWM time of the servo motor.
        Tell the ESP32-WROOM-32D chip the maximum PWM time of the servo motor.*/
        /*End.*/
        /*If the servo motor has an initial angle of then.*/
        Tell the ESP32-WROOM-32D chip the initial angle of the servo motor.
        /*End.*/
        /*If the servo motor has a reversed polarity then.*/
        Tell the ESP32-WROOM-32D chip about the polarity of the servo motor.
        /*End.*/
        /*If the maximum voltage of the servo motor is known then.*/
        Tell the ESP32-WROOM-32D chip about the voltage of the servo motor.
        Tell the ESP32-WROOM-32D chip the maximum voltage of the servo motor.
        /*End.*/
    End.
    /*Ask the ESP32-WROOM-32D chip to initialize.*/
    I am not sorry.
    I was not sorry.
End.

To wait for a robotic arm to stop.
    Do not wait for a response.
    Ask the ESP32-WROOM-32D chip to tell you if the robotic arm has stopped.
    Wait for a response.
    Until the robotic arm has stopped then wait.
    Forget that the robotic arm has stopped.
End.

To move a robotic arm.
    For each of the servo motors of the robotic arm.
        Tell the ESP32-WROOM-32D chip the speed of the servo motor.
    End.
    Tell the ESP32-WROOM-32D chip the target angle of the servo motor 1 of the robotic arm.
    Tell the ESP32-WROOM-32D chip the target angle of the servo motor 2 of the robotic arm.
    Tell the ESP32-WROOM-32D chip the target angle of the servo motor 3 of the robotic arm.
    Tell the ESP32-WROOM-32D chip the target angle of the servo motor 4 of the robotic arm.
    Tell the ESP32-WROOM-32D chip the target angle of the servo motor 5 of the robotic arm.
    Tell the ESP32-WROOM-32D chip the target angle of the servo motor 6 of the robotic arm.
    If I /*FIXME: the ESP32-WROOM-32D chip was*/ was sorry then.
        I am not sorry.
        I was not sorry.
        Do not wait for a response.
        Tell me that the robotic arm has a mechanical problem.
        Ask me to fix the mechanical problem and retry.
        Wait for a response.
        Initialize the robotic arm.
        Return.
    End.
    Wait for the robotic arm to stop.
End.

To /*FIXME: soft*/ reset a robotic arm.
    Tell the ESP32-WROOM-32D chip to reset.
End.

A function "__hap_calculate_orientation_from_position".

To calculate an orientation for a robotic arm from a position.
    /*Tell me that you call the function "__hap_calculate_orientation_from_position" with the robotic arm, the position and the orientation.*/
    Call the function "__hap_calculate_orientation_from_position" with the robotic arm, the position and the orientation.
    If the function  "__hap_calculate_orientation_from_position" failed then.
        You failed to calculate the orientation for the robotic arm from the position.
    End.
End.

To make a robotic arm to open a hand.
    /*Tell me that you make the robotic arm to open the hand.*/
    The target angle of the 1st servo motor of the robotic arm is 140 degrees.
    Move the robotic arm.
End.

To make a robotic arm to close a hand.
    /*Tell me that you make the robotic arm to close the hand.*/
    The target angle of the 1th servo motor of the robotic arm is 85 degrees.
    Move the robotic arm.
End.

To move a robotic arm to a position /*FIXME:*/with a hack.
    /*Tell me that you move the robotic arm to the position.*/
    Calculate an orientation for the robotic arm from the position.
    If you failed to calculate the orientation for the robotic arm from the position.
        Do not wait for a response.
        Tell me that the robotic arm does not reach.
        Wait for a response.
    Else.
        Move the robotic arm.
    End.
End.

To move a robotic arm to a person.
    /*Tell me that you move the robotic arm to the person.*/
    If the person has a position then.
        /*Tell me about the position.*/
        Move the robotic arm to the position with a hack.
    End.
End.

To move a robotic arm to an object.
    /*Tell me that you move the robotic arm to the object.*/
    If the object has a position then.
        /*Tell me that the object has the position.*/
        Move the robotic arm to the position with a hack.
    End.
End.

To make a robotic arm to take an object.
    /*Tell me that you make the robotic arm to take the object.*/
    If the object has a position /* FIXME: and the position has coordinates*/ then.
        /*Tell me about the position.*/
        Make the robotic arm to open a hand.
        /*Tell me that you opened the hand.*/
        Move the robotic arm to the object.
        Make the robotic arm to close the hand.
        /*Tell me that you took the object.*/
    Else.
        Do not wait for a response.
        Tell me that you do not know a position for the object.
        Wait for a response.
    End.
End.

To move an object to a position.
    Make the robotic arm to take the object.
    Move the robotic arm to the position with a hack.
    Make the robotic arm to open a hand.
End.

To move an object to a person.
    /*Tell me that you move the object to the person.*/
    If the object has a position and the person has a position then.
        Make the robotic arm to take the object.
        /*Tell me that the robotic arm took the object.*/
        Move the robotic arm to the person.
        Make the robotic arm to open a hand.
    Else.
        Do not wait for a response.
        Tell me that you do not know a position for the object or the person.
        Wait for a response.
    End.
End.

To give a person an object.
    /*Tell me that you give the object to the person.*/
    Move the object to a person.
End.

To give an object.
    /*Tell me that you give the object to me.*/
    Move the object to me.
End.

To take an object.
    /*Tell me that you take the object.*/
    Make the robotic arm to take the object.
End.

