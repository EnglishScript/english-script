#include "robot.es"

/* the robot */
A robotic arm.
The robotic arm has a name and an ESP32-WROOM-32D chip /*FIXME:, 1 motors, 1 joints, 2 links*/.
The name of the ESP32-WROOM-32D chip is "ESP32".
The ESP32-WROOM-32D chip has 0 retries.

The name of the robotic arm is "this robot".

The 1st coordinate of the initial position of the robotic arm is 0.0 meters.
The 2nd coordinate of the initial position of the robotic arm is 0.32 meters.
The 3rd coordinate of the initial position of the robotic arm is -0.39 meters.


/* motors */

/* fingers/squeeze */
The 1st servo motor of the robotic arm is an MG90S motor.
The 1st servo motor of the robotic arm is connected to the connector pin 25 of the ESP32-WROOM-32D chip.
The pulse cycle of the 1st servo motor of the robotic arm is 0.002 seconds.
The minimum PWM time of the 1st servo motor of the robotic arm is 0.410 seconds.
The maximum PWM time of the 1st servo motor of the robotic arm is 2.450 seconds.
The speed of the 1st servo motor of the robotic arm is 10.1 dpses.
The status speed of the 1st servo motor of the robotic arm is 0 dpses.
The acceleration of the 1st servo motor of the robotic arm is 10.0 dpses.
The status acceleration of the 1st servo motor of the robotic arm is 10.0 dpses.
The minimum angle of the servo motor 1 of the robotic arm is 0 degrees.
The initial angle of the servo motor 1 of the robotic arm is 85 degrees.
The target angle of the servo motor 1 of the robotic arm is 85 degrees.
The status angle of the servo motor 1 of the robotic arm is 0 degrees.
The voltage of the servo motor 1 of the robotic arm is measured from the connector pin 32.
The maximum voltage of the servo motor 1 of the robotic arm is 0.120 volts.

/* wrist rotation */
The 2nd servo motor of the robotic arm is an MG90S motor.
The 2nd servo motor of the robotic arm is connected to the connector pin 17 of the ESP32-WROOM-32D chip.
The pulse cycle of the 2nd servo motor of the robotic arm is 0.025 seconds.
The minimum PWM time of the 2nd servo motor of the robotic arm is 0.810 seconds.
The maximum PWM time of the 2nd servo motor of the robotic arm is 5.450 seconds.
The speed of the 2nd servo motor of the robotic arm is 40.1 dpses.
The status speed of the 2nd servo motor of the robotic arm is 0 dpses.
The acceleration of the 2nd servo motor of the robotic arm is 10.0 dpses.
The status acceleration of the 2nd servo motor of the robotic arm is 10.0 dpses.
The initial angle of the servo motor 2 of the robotic arm is 180 degrees.
The target angle of the servo motor 2 of the robotic arm is 180 degrees.
The status angle of the servo motor 2 of the robotic arm is 0 degrees.

/* elbow left */
The 3rd servo motor of the robotic arm is an MG90S motor.
The 3rd servo motor of the robotic arm is connected to the connector pin 26 of the ESP32-WROOM-32D chip.
The pulse cycle of the 3rd servo motor of the robotic arm is 0.005 seconds.
The minimum PWM time of the 3rd servo motor of the robotic arm is 0.510 seconds.
The maximum PWM time of the 3rd servo motor of the robotic arm is 2.750 seconds.
The speed of the 3rd servo motor of the robotic arm is 10.1 dpses.
The status speed of the 3rd servo motor of the robotic arm is 0 dpses.
The acceleration of the 3rd servo motor of the robotic arm is 10.0 dpses.
The status acceleration of the 3rd servo motor of the robotic arm is 10.0 dpses.
The initial angle of the servo motor 3 of the robotic arm is 180 degrees.
The target angle of the servo motor 3 of the robotic arm is 180 degrees.
The status angle of the servo motor 3 of the robotic arm is 0 degrees.

/* elbow right */
The 4th servo motor of the robotic arm is an MG90S motor.
The 4th servo motor of the robotic arm is connected to the connector pin 27 of the ESP32-WROOM-32D chip.
The pulse cycle of the 4th servo motor of the robotic arm is 0.005 seconds.
The minimum PWM time of the 4th servo motor of the robotic arm is 0.510 seconds.
The maximum PWM time of the 4th servo motor of the robotic arm is 2.750 seconds.
The speed of the 4th servo motor of the robotic arm is 10.1 dpses.
The status speed of the 4th servo motor of the robotic arm is 0 dpses.
The acceleration of the 4th servo motor of the robotic arm is 10.0 dpses.
The status acceleration of the 4th servo motor of the robotic arm is 10.0 dpses.
The initial angle of the servo motor 4 of the robotic arm is 180 degrees.
The target angle of the servo motor 4 of the robotic arm is 180 degrees.
The polarity of the 4th servo motor of the robotic arm is reversed.
The status angle of the servo motor 4 of the robotic arm is 0 degrees.

/* shoulder up/down */
The 5th servo motor of the robotic arm is an MG996R motor.
The 5th servo motor of the robotic arm is connected to the connector pin 19 of the ESP32-WROOM-32D chip.
The pulse cycle of the 5th servo motor of the robotic arm is 0.005 seconds.
The minimum PWM time of the 5th servo motor of the robotic arm is 0.510 seconds.
The maximum PWM time of the 5th servo motor of the robotic arm is 2.750 seconds.
The speed of the 5th servo motor of the robotic arm is 10.1 dpses.
The status speed of the 5th servo motor of the robotic arm is 0 dpses.
The acceleration of the 5th servo motor of the robotic arm is 10.0 dpses.
The status acceleration of the 5th servo motor of the robotic arm is 10.0 dpses.
The initial angle of the servo motor 5 of the robotic arm is 90 degrees.
The target angle of the servo motor 5 of the robotic arm is 90 degrees.
The status angle of the servo motor 5 of the robotic arm is 0 degrees.

/* shoulder rotation */
The 6th servo motor of the robotic arm is an MG90S motor.
The 6th servo motor of the robotic arm is connected to the connector pin 16 of the ESP32-WROOM-32D chip.
The pulse cycle of the 6th servo motor of the robotic arm is 0.015 seconds.
The minimum PWM time of the 6th servo motor of the robotic arm is 0.410 seconds.
The maximum PWM time of the 6th servo motor of the robotic arm is 6.450 seconds.
The speed of the 6th servo motor of the robotic arm is 10.1 dpses.
The status speed of the 6th servo motor of the robotic arm is 0 dpses.
The acceleration of the 6th servo motor of the robotic arm is 10.0 dpses.
The status acceleration of the 6th servo motor of the robotic arm is 10.0 dpses.
The initial angle of the servo motor 6 of the robotic arm is 90 degrees.
The target angle of the servo motor 6 of the robotic arm is 90 degrees.
The status angle of the servo motor 6 of the robotic arm is 0 degrees.

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
The hand of the robotic arm is the 1st link of the robotic arm.

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
/*If someone does not know then.
    Remember that someone do know.
End.*/

An object has a position.
The position of an object has coordinates.
A person has a position.
The position of a person has coordinates.
A ball is round.
A cup is an object.
A mug is an object.
A bottle is an object.
A ball is an object.
A box is an object.

A table.

/* Recognized objects */

A cup.
The 1st coordinate of the position of the cup is 0.0 meters.
The 2nd coordinate of the position of the cup is 0.075 meters.
The 3rd coordinate of the position of the cup is -0.1101 meters.

A mug.

The 1st coordinate of my position is 0.0 meters.
The 2nd coordinate of my position is 0.32 meters.
The 3rd coordinate of my position is -0.39 meters.

A ball.
/*FIXME: these should not be needed at all:*/
The 1st coordinate of the position of the ball is 0.0 meters.
The 2nd coordinate of the position of the ball is 0.0 meters.
The 3rd coordinate of the position of the ball is 0.0 meters.

/* FIXME: this should not be needed.*/
A box.
The 1st coordinate of the position of the box is -0.1 meters.
The 2nd coordinate of the position of the box is 0.1 meters.
The 3rd coordinate of the position of the box is -0.2 meters.

A hand.
The hand of the robotic arm is the hand.

A device is a machine.

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
        /*If the speed of the servo motor is not equal to the status speed of the servo motor then.*/
            Tell the ESP32-WROOM-32D chip the speed of the servo motor.
            /*Assign the speed of the servo motor to the status speed of the servo motor.*/
        /*End.*/
        /*If the acceleration of the servo motor is not equal to the status acceleration of the servo motor then.*/
            /*Tell the ESP32-WROOM-32D chip the acceleration of the servo motor.*/
            /*Assign the acceleration of the servo motor to the status acceleration of the servo motor.*/
        /*End.*/
        /*If the target angle of the servo motor is not equal to the status angle of the servo motor then.*/
            /*Tell the ESP32-WROOM-32D chip the target angle of the servo motor.*/
            /*Assign the target angle of the servo motor to the status angle of the servo motor.*/
        /*End.*/
    End.

    Tell the ESP32-WROOM-32D chip the acceleration of the servo motor 1 of the robotic arm.
    Tell the ESP32-WROOM-32D chip the acceleration of the servo motor 2 of the robotic arm.
    Tell the ESP32-WROOM-32D chip the acceleration of the servo motor 3 of the robotic arm.
    Tell the ESP32-WROOM-32D chip the acceleration of the servo motor 4 of the robotic arm.
    Tell the ESP32-WROOM-32D chip the acceleration of the servo motor 5 of the robotic arm.
    Tell the ESP32-WROOM-32D chip the acceleration of the servo motor 6 of the robotic arm.

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

To move to an initial position.
    Assign the initial angle of the 1st servo motor of the robotic arm to the target angle of the 1st servo motor of the robotic arm.
    Assign the initial angle of the 2nd servo motor of the robotic arm to the target angle of the 2nd servo motor of the robotic arm.
    Assign the initial angle of the 3rd servo motor of the robotic arm to the target angle of the 3rd servo motor of the robotic arm.
    Assign the initial angle of the 4th servo motor of the robotic arm to the target angle of the 4th servo motor of the robotic arm.
    Assign the initial angle of the 5th servo motor of the robotic arm to the target angle of the 5th servo motor of the robotic arm.
    Assign the initial angle of the 6th servo motor of the robotic arm to the target angle of the 6th servo motor of the robotic arm.
    Move the robotic arm.
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

To check an orientation for a robotic arm from a position.
    /*Tell me that you call the function "__hap_calculate_orientation_from_position" with the robotic arm, the position and the orientation.*/
    Call the function "__hap_calculate_orientation_from_position" with the robotic arm, the position, the orientation and a check option "check".
    If the function  "__hap_calculate_orientation_from_position" failed then.
        You failed to check the orientation for the robotic arm from the position.
    End.
End.

To make a robotic arm to open a hand.
    /*Tell me that you make the robotic arm to open the hand.*/
    /*FIXME: why remembering needed, why stating is not enough?*/
    /*FIXME: why remembering second time fails the test.*/
    /*Remember that*/ Assign 170 degrees to the target angle of the 1st servo motor of the robotic arm /*is 140 degrees*/.
    Move the robotic arm.
End.

To make a robotic arm to close a hand.
    /*Tell me that you make the robotic arm to close the hand.*/
    /*Remember that*/ Assign 85 degrees to the target angle of the 1st servo motor of the robotic arm /*is 85 degrees*/.
    Move the robotic arm.
End.

To move a robotic arm to a position /*FIXME:*/with a hack.
    /*Tell me that you move the robotic arm to the position.*/
    Calculate an orientation for the robotic arm from the position.
    If you failed to calculate the orientation for the robotic arm from the position.
        Do not wait for a response.
        Tell me that the robotic arm does not reach.
        Forget that you failed to calculate the orientation for the robotic arm from the position.
        Wait for a response.
    Else.
        Move the robotic arm.
    End.
End.

To move to a position.
    Move the robotic arm to the position with a hack.
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
    If the object has a position then.
        If the position has coordinates then.
            Ask this device that what is the 1st coordinate.
            Ask this device that what is the 2nd coordinate.
            Ask this device that what is the 3rd coordinate.
            If I /*FIXME: this device */ was sorry then.
                I am not sorry.
                I was not sorry.
                Do not wait for a response.
                Tell me that you don't know the position of the object.
                Wait for a response.
                Return.
            End.
        Else.
            Do not wait for a response.
            Tell me that you don't know the position of the object.
            Wait for a response.
            Return.
        End.
        Check an orientation for the robotic arm from the position.
        If you failed to check the orientation for the robotic arm from the position.
            Do not wait for a response.
            Tell me that you do not reach the object.
            Forget that you failed to check the orientation for the robotic arm from the position.
            Wait for a response.
        Else.
            If the person has a position then.
                Check an orientation for the robotic arm from the position.
                If you failed to check the orientation for the robotic arm from the position.
                    Do not wait for a response.
                    Tell me that you do not reach the person.
                    Forget that you failed to check the orientation for the robotic arm from the position.
                    Wait for a response.
                Else.
                    Make the robotic arm to take the object.
                    /*Tell me that the robotic arm took the object.*/
                    Move the robotic arm to the person.
                    Make the robotic arm to open a hand.
                End.
            Else.
                Do not wait for a response.
                Tell me that you do not know a position for the person.
                Wait for a response.
            End.
        End.
    Else.
        Do not wait for a response.
        Tell me that you do not know a position for the object.
        Wait for a response.
    End.
End.

To look nice.
End.

To move a 1st object to a 2nd object.
    /*Tell me that you move the object to the person.*/
    If the 1st object has a position then.
        If the position has coordinates then.
            Ask this device that what is the 1st coordinate.
            Ask this device that what is the 2nd coordinate.
            Ask this device that what is the 3rd coordinate.
            If I /*FIXME: this device */ was sorry then.
                I am not sorry.
                I was not sorry.
                Do not wait for a response.
                Tell me that you don't know the position of the 1st object.
                Wait for a response.
                Return.
            End.
        Else.
            Do not wait for a response.
            Tell me that you don't know the position of the 1st object.
            Wait for a response.
            Return.
        End.
        Check an orientation for the robotic arm from the position.
        If you failed to check the orientation for the robotic arm from the position.
            Do not wait for a response.
            Tell me that you do not reach the 1st object.
            Forget that you failed to check the orientation for the robotic arm from the position.
            Wait for a response.
        Else.
            If the 2nd object has a position then.
                If the position has coordinates then.
                    Ask this device that what is the 1st coordinate.
                    Ask this device that what is the 2nd coordinate.
                    Ask this device that what is the 3rd coordinate.
                    If I /*FIXME: this device */ was sorry then.
                        I am not sorry.
                        I was not sorry.
                        /* Just ignore and use the current value. */
                        /*Tell me that you check the 2nd object.*/
                    End.
                    Look nice. /*FIXME: this should not be needed here*/
                Else.
                    Do not wait for a response.
                    Tell me that you don't know the position of the 2nd object.
                    Wait for a response.
                    Return.
                End.
                Check an orientation for the robotic arm from the position.
                If you failed to check the orientation for the robotic arm from the position.
                    Do not wait for a response.
                    Tell me that you do not reach the 2nd object.
                    Forget that you failed to check the orientation for the robotic arm from the position.
                    Wait for a response.
                Else.
                    Make the robotic arm to take the 1st object.
                    /*Tell me that the robotic arm took the object.*/
                    Move the robotic arm to the 2nd object.
                    Make the robotic arm to open a hand.
                End.
            Else.
                Do not wait for a response.
                Tell me that you do not know a position for the 2nd object.
                Wait for a response.
            End.
        End.
    Else.
        Do not wait for a response.
        Tell me that you do not know a position for the 1st object.
        Wait for a response.
    End.
End.

To turn degrees.
    Sum the degrees to the target angle of the 6th servo motor of the robotic arm.
    Move the robotic arm.
End.

To bow degrees.
    Sum the degrees to the target angle of the 5th servo motor of the robotic arm.
    Move the robotic arm.
End.

To bend degrees.
    Sum the degrees to the target angle of the 3th servo motor of the robotic arm.
    Sum the degrees to the target angle of the 4th servo motor of the robotic arm.
    Move the robotic arm.
End.

To straighten out.
    Move to the initial position of the robotic arm.
End.

To get up.
    Move to the initial position of the robotic arm.
End.

To speed up a servo motor.
    If the servo motor has a speed then.
        Sum 500 dpses to the speed /*of the servo motor*/.
    End.
    If the servo motor has a acceleration then.
        Sum 100 dpses to the acceleration.
    End.
End.

To slow down a servo motor.
    If the servo motor has a speed then.
        Sum -500 dpses to the speed /*of the servo motor*/.
    End.
    If the servo motor has a acceleration then.
        Sum -100 dpses to the acceleration.
    End.
End.

To give a person an object.
    /*Tell me that you give the object to the person.*/
    Move the object to the person.
End.

To give an object.
    /*Tell me that you give the object to me.*/
    Move the object to me.
End.

To take an object.
    /*Tell me that you take the object.*/
    If the object has a position then.
        If the position has coordinates then.
            Ask this device that what is the 1st coordinate.
            Ask this device that what is the 2nd coordinate.
            Ask this device that what is the 3rd coordinate.
            If I /*FIXME: this device */ was sorry then.
                I am not sorry.
                I was not sorry.
                Do not wait for a response.
                Tell me that you don't know the position of the object.
                Wait for a response.
                Return.
            End.
            If I /*FIXME: this device */ did not know then.
                Forget that I do not know.
                Do not wait for a response.
                Tell me that you don't know the position of the object.
                Wait for a response.
                Return.
            End.
        Else.
            Do not wait for a response.
            Tell me that you don't know the position of the object.
            Wait for a response.
            Return.
        End.
        Check an orientation for the robotic arm from the position.
        If you failed to check the orientation for the robotic arm from the position.
            Do not wait for a response.
            Tell me that you do not reach the object.
            Wait for a response.
        Else.
            Make the robotic arm to take the object.
        End.
    Else.
        Do not wait for a response.
        Tell me that you do not know a position for the object.
        Wait for a response.
    End.
End.

To open a hand.
    Make the robotic arm to open a hand.
End.

To close a hand.
    Make the robotic arm to close a hand.
End.

To calculate the position of an object for a robotic arm from an orientation.
    The 1st coordinate of the position is 0.1 meters.
    The 2nd coordinate of the position is 0.2 meters.
    The 3rd coordinate of the position is 0.3 meters.
End.


/*
To go meters to down.
    A position of an object.
    The 1st coordinate of the position is 0 meters.
    The 2nd coordinate of the position is 0 meters.
    The 3rd coordinate of the position is 0 meters.
    Calculate the position for the robotic arm from an orientation.
    Substract the meters from the 2nd coordinate of the position.
    Calculate an orientation for the robotic arm from the position.
    Move the robotic arm.
End.

To go meters to up.
    The position of an object.
    The 1st coordinate of the position is 0 meters.
    The 2nd coordinate of the position is 0 meters.
    The 3rd coordinate of the position is 0 meters.
    Calculate the position for the robotic arm from an orientation.
    Sum the meters to the 2nd coordinate of the position.
    Calculate an orientation for the robotic arm from the position.
    Move the robotic arm.
End.

To go a length left and a length back.
End.

To go a length right and a length back.
End.

To go a length right and a length forward.
End.

To go a length left and a length forward.
End.
*/
