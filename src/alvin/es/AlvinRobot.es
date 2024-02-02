#include "robot.es"

/* the robot */
A robotic arm.
An ESP32-WROOM-32D chip.

The name of the robotic arm is "this robot".
The ESP32-WROOM-32D chip is the 1st electronic chip of the robotic arm.

The 1st coordinate of the initial position of the robotic arm is 0.0 meters.
The 2nd coordinate of the initial position of the robotic arm is 0.32 meters.
The 3rd coordinate of the initial position of the robotic arm is -0.39 meters.


/* motors */

/* fingers/squeeze/claw */
The servo motor 1 of the robotic arm is an MG90S motor.
The pin 25 of the ESP32-WROOM-32D chip is the pin of the servo motor 1 of the robotic arm.
The pulse cycle of the servo motor 1 of the robotic arm is 0.002 seconds.
The speed of the servo motor 1 of the robotic arm is 10.1 dpses.
The current speed of the servo motor 1 of the robotic arm is 0 dpses.
The acceleration of the servo motor 1 of the robotic arm is 10.0 dpses.
The current acceleration of the servo motor 1 of the robotic arm is 10.0 dpses.
The minimum angle of the servo motor 1 of the robotic arm is 0 degrees.
The initial angle of the servo motor 1 of the robotic arm is 85 degrees.
The target angle of the servo motor 1 of the robotic arm is 85 degrees.
The current angle of the servo motor 1 of the robotic arm is 0 degrees.
The voltage of the servo motor 1 of the robotic arm is measured from the pin 32.
The maximum voltage of the servo motor 1 of the robotic arm is 0.120 volts.

/* wrist rotation */

/* The stepper motor 1 of the robotic arm is an ??? motor. */
The pulse cycle of the stepper motor 1 of the robotic arm is 0.025 seconds.
The speed of the stepper motor 1 of the robotic arm is 40.1 dpses.
The current speed of the stepper motor 1 of the robotic arm is 0 dpses.
The acceleration of the stepper motor 1 of the robotic arm is 10.0 dpses.
The current acceleration of the stepper motor 1 of the robotic arm is 10.0 dpses.
The initial angle of the stepper motor 1 of the robotic arm is 180 degrees.
The target angle of the stepper motor 1 of the robotic arm is 180 degrees.
The current angle of the stepper motor 1 of the robotic arm is 0 degrees.

/* elbow */

/* The stepper motor 2 of the robotic arm is an ??? motor. */
The pulse cycle of the stepper motor 2 of the robotic arm is 0.025 seconds.
The speed of the stepper motor 2 of the robotic arm is 40.1 dpses.
The current speed of the stepper motor 2 of the robotic arm is 0 dpses.
The acceleration of the stepper motor 2 of the robotic arm is 10.0 dpses.
The current acceleration of the stepper motor 2 of the robotic arm is 10.0 dpses.
The initial angle of the stepper motor 2 of the robotic arm is 180 degrees.
The target angle of the stepper motor 2 of the robotic arm is 180 degrees.
The current angle of the stepper motor 2 of the robotic arm is 0 degrees.

/* shoulder up/down */

/* The stepper motor 3 of the robotic arm is an ??? motor. */
The pulse cycle of the stepper motor 3 of the robotic arm is 0.025 seconds.
The speed of the stepper motor 3 of the robotic arm is 40.1 dpses.
The current speed of the stepper motor 3 of the robotic arm is 0 dpses.
The acceleration of the stepper motor 3 of the robotic arm is 10.0 dpses.
The current acceleration of the stepper motor 3 of the robotic arm is 10.0 dpses.
The initial angle of the stepper motor 3 of the robotic arm is 180 degrees.
The target angle of the stepper motor 3 of the robotic arm is 180 degrees.
The current angle of the stepper motor 3 of the robotic arm is 0 degrees.

/* shoulder rotation */

/* The stepper motor 4 of the robotic arm is an ??? motor. */
The pulse cycle of the stepper motor 4 of the robotic arm is 0.025 seconds.
The speed of the stepper motor 4 of the robotic arm is 40.1 dpses.
The current speed of the stepper motor 4 of the robotic arm is 0 dpses.
The acceleration of the stepper motor 4 of the robotic arm is 10.0 dpses.
The current acceleration of the stepper motor 4 of the robotic arm is 10.0 dpses.
The initial angle of the stepper motor 4 of the robotic arm is 180 degrees.
The target angle of the stepper motor 4 of the robotic arm is 180 degrees.
The current angle of the stepper motor 4 of the robotic arm is 0 degrees.

/* links */

The length of the 1st link of the robotic arm is 0.15 meters.
The length of the 2nd link of the robotic arm is 0.3 meters.
The length of the 3rd link of the robotic arm is 0.3 meters.
The length of the 4th link of the robotic arm is 0.1 meters.
The length of the 5th link of the robotic arm is 0.1 meters.
The hand of the robotic arm is the 1st link of the robotic arm.

/* joints */

The 1st stepper motor of the robotic arm is the 1st motor of the 1st joint of the robotic arm.
The 1st stepper motor of the robotic arm is the 2nd motor of the 1st joint of the robotic arm.
/*FIXME: there should now be any need for giving the Nth here */
The minimum angle of the 1st joint is -90 degrees.
The maximum angle of the 1st joint is 90 degrees.
The 1st link of the robotic arm is the 1st link of the 1st joint.
The 2nd link of the robotic arm is the 2nd link of the 1st joint.

The 2nd stepper motor of the robotic arm is the 1st motor of the 2nd joint of the robotic arm.
The 2nd stepper motor of the robotic arm is the 2nd motor of the 2nd joint of the robotic arm.
The minimum angle of the 2nd joint is -90 degrees.
The maximum angle of the 2nd joint is 90 degrees.
The 2nd link of the robotic arm is the 1st link of the 2nd joint.
The 3rd link of the robotic arm is the 2nd link of the 2nd joint.

The 3rd stepper motor of the robotic arm is the 1st motor of the 3rd joint of the robotic arm.
The 4th stepper motor of the robotic arm is the 2nd motor of the 3rd joint.
The minimum angle of the 3rd joint is -90 degrees.
The maximum angle of the 3rd joint is 90 degrees.
The 3rd link of the robotic arm is the 1st link of the 3rd joint.
The 4th link of the robotic arm is the 2nd link of the 3rd joint.

The 5th stepper motor of the robotic arm is the 1st motor of the 4th joint of the robotic arm.
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
An AI model has a name.
An AI model is a machine.
A large language model is an AI model.
An image text model is an AI model.

/* User */

My name is "Mary".
I am a user.

/* Robot Control */
A robot control has a name.
A robot control is a machine.
A robot control.
The name of the robot control is "RobotControl".


/* AI models */

A large language model.
The name of the large language model is "LLM".
An image text model.
The name of the image text model is "ImageToText".

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
    /* FIXME: Tell about... should also wait for a response. */
    Tell RobotControl about an electronic chip.
    Tell RobotControl about an ESP32-WROOM-32D chip.
    Tell RobotControl about the robotic arm.
    Tell RobotControl about the ESP32-WROOM-32D chip.

    For the servo motors of the robotic arm.
        Tell RobotControl about the servo motor.
    End.
    For the stepper motors of the robotic arm.
        Tell RobotControl about the stepper motor.
    End.

    Tell RobotControl that RobotControl controls the robotic arm.
    Ask RobotControl to initialize the robotic arm.
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
        Tell RobotControl the speed of the servo motor.
        Tell RobotControl the acceleration of the servo motor.
        Tell RobotControl the target angle of the servo motor.
    End.

    If RobotControl was sorry then.
        I am not sorry.
        I was not sorry.
        Do not wait for a response.
        Tell the user that the robotic arm has a mechanical problem.
        Ask the user to fix the mechanical problem and retry.
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
    Tell RobotControl to reset.
End.

A function "__hap_calculate_orientation_from_position".

To calculate an orientation for a robotic arm from a position.
    Call the function "__hap_calculate_orientation_from_position" with the robotic arm, the position and the orientation.
    If the function  "__hap_calculate_orientation_from_position" failed then.
        You failed to calculate the orientation for the robotic arm from the position.
    End.
End.

To check an orientation for a robotic arm from a position.
    Call the function "__hap_calculate_orientation_from_position" with the robotic arm, the position, the orientation and a check option "check".
    If the function  "__hap_calculate_orientation_from_position" failed then.
        You failed to check the orientation for the robotic arm from the position.
    End.
End.

To make a robotic arm to open a hand.
    Assign 170 degrees to the target angle of the 1st servo motor of the robotic arm /*is 140 degrees*/.
    Move the robotic arm.
End.

To make a robotic arm to close a hand.
    Assign 85 degrees to the target angle of the 1st servo motor of the robotic arm /*is 85 degrees*/.
    Move the robotic arm.
End.

To move a robotic arm to a position /*FIXME:*/with a hack.
    Calculate an orientation for the robotic arm from the position.
    If you failed to calculate the orientation for the robotic arm from the position.
        Do not wait for a response.
        Tell the user that the robotic arm does not reach.
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
    If the person has a position then.
        Move the robotic arm to the position with a hack.
    End.
End.

To move a robotic arm to an object.
    If the object has a position then.
        Move the robotic arm to the position with a hack.
    End.
End.

To make a robotic arm to take an object.
    If the object has a position /* FIXME: and the position has coordinates*/ then.
        Make the robotic arm to open a hand.
        Move the robotic arm to the object.
        Make the robotic arm to close the hand.
    Else.
        Do not wait for a response.
        Tell the user that you do not know a position for the object.
        Wait for a response.
    End.
End.

To move an object to a position.
    Make the robotic arm to take the object.
    Move the robotic arm to the position with a hack.
    Make the robotic arm to open a hand.
End.

To move an object to a person.
    If the object has a position then.
        If the position has coordinates then.
            Ask this device that what is the 1st coordinate.
            Ask this device that what is the 2nd coordinate.
            Ask this device that what is the 3rd coordinate.
            If I /*FIXME: this device */ was sorry then.
                I am not sorry.
                I was not sorry.
                Do not wait for a response.
                Tell the user that you don't know the position of the object.
                Wait for a response.
                Return.
            End.
        Else.
            Do not wait for a response.
            Tell the user that you don't know the position of the object.
            Wait for a response.
            Return.
        End.
        Check an orientation for the robotic arm from the position.
        If you failed to check the orientation for the robotic arm from the position.
            Do not wait for a response.
            Tell the user that you do not reach the object.
            Forget that you failed to check the orientation for the robotic arm from the position.
            Wait for a response.
        Else.
            If the person has a position then.
                Check an orientation for the robotic arm from the position.
                If you failed to check the orientation for the robotic arm from the position.
                    Do not wait for a response.
                    Tell the user that you do not reach the person.
                    Forget that you failed to check the orientation for the robotic arm from the position.
                    Wait for a response.
                Else.
                    Make the robotic arm to take the object.
                    Move the robotic arm to the person.
                    Make the robotic arm to open a hand.
                End.
            Else.
                Do not wait for a response.
                Tell the user that you do not know a position for the person.
                Wait for a response.
            End.
        End.
    Else.
        Do not wait for a response.
        Tell the user that you do not know a position for the object.
        Wait for a response.
    End.
End.

To look nice.
End.

To move a 1st object to a 2nd object.
    If the 1st object has a position then.
        If the position has coordinates then.
            Ask this device that what is the 1st coordinate.
            Ask this device that what is the 2nd coordinate.
            Ask this device that what is the 3rd coordinate.
            If I /*FIXME: this device */ was sorry then.
                I am not sorry.
                I was not sorry.
                Do not wait for a response.
                Tell the user that you don't know the position of the 1st object.
                Wait for a response.
                Return.
            End.
        Else.
            Do not wait for a response.
            Tell the user that you don't know the position of the 1st object.
            Wait for a response.
            Return.
        End.
        Check an orientation for the robotic arm from the position.
        If you failed to check the orientation for the robotic arm from the position.
            Do not wait for a response.
            Tell the user that you do not reach the 1st object.
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
                    End.
                    Look nice. /*FIXME: this should not be needed here*/
                Else.
                    Do not wait for a response.
                    Tell the user that you don't know the position of the 2nd object.
                    Wait for a response.
                    Return.
                End.
                Check an orientation for the robotic arm from the position.
                If you failed to check the orientation for the robotic arm from the position.
                    Do not wait for a response.
                    Tell the user that you do not reach the 2nd object.
                    Forget that you failed to check the orientation for the robotic arm from the position.
                    Wait for a response.
                Else.
                    Make the robotic arm to take the 1st object.
                    Move the robotic arm to the 2nd object.
                    Make the robotic arm to open a hand.
                End.
            Else.
                Do not wait for a response.
                Tell the user that you do not know a position for the 2nd object.
                Wait for a response.
            End.
        End.
    Else.
        Do not wait for a response.
        Tell the user that you do not know a position for the 1st object.
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
    Move the object to the person.
End.

To give an object.
    Move the object to the user.
End.

To take an object.
    If the object has a position then.
        If the position has coordinates then.
            Ask this device that what is the 1st coordinate.
            Ask this device that what is the 2nd coordinate.
            Ask this device that what is the 3rd coordinate.
            If I /*FIXME: this device */ was sorry then.
                I am not sorry.
                I was not sorry.
                Do not wait for a response.
                Tell the user that you don't know the position of the object.
                Wait for a response.
                Return.
            End.
            If I /*FIXME: this device */ did not know then.
                Forget that I do not know.
                Do not wait for a response.
                Tell the user that you don't know the position of the object.
                Wait for a response.
                Return.
            End.
        Else.
            Do not wait for a response.
            Tell the user that you don't know the position of the object.
            Wait for a response.
            Return.
        End.
        Check an orientation for the robotic arm from the position.
        If you failed to check the orientation for the robotic arm from the position.
            Do not wait for a response.
            Tell the user that you do not reach the object.
            Wait for a response.
        Else.
            Make the robotic arm to take the object.
        End.
    Else.
        Do not wait for a response.
        Tell the user that you do not know a position for the object.
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

An image has positions and areas.
The positions of an image have coordinates.
The areas of an image have corners.
The corners of the areas have a position.

/*
 *  (0.0,0.2)   (0.1,0.2)  (0.2,0.2)   (0.3,0.2)
 *      +-----------+----------+-----------+
 *      |1          |2         |3          |
 *      |  Building | Candle   | Building  |
 *      |  Alvin    | used as  | the robot |
 *      |  robot    | a lubri- | base box  |
 *      |           | cant     |           |
 *      +-----------+----------+-----------+ (0.3,0.1)
 *      |4          |5         |6          |
 *      | Building  | Building | Integrat- |
 *      | the robot | the      | ing ready |
 *      | hands     | gripper  | parts     |
 *      |           |          | together  |
 *      +-----------+----------+-----------+
 *  (0.0,0.0)   (0.1,0.0)   (0.2,0.0)   (0.3,0.0)
 *
 */


An image.
The coordinates of the position 1 of the image /*FIXME:are*/include 0.0 meters and 0.2 meters.
The coordinates of the position 2 of the image /*FIXME:are*/include 0.1 meters and 0.2 meters.
The coordinates of the position 3 of the image /*FIXME:are*/include 0.2 meters and 0.2 meters.
The coordinates of the position 4 of the image /*FIXME:are*/include 0.3 meters and 0.2 meters.
The coordinates of the position 5 of the image /*FIXME:are*/include 0.0 meters and 0.1 meters.
The coordinates of the position 6 of the image /*FIXME:are*/include 0.1 meters and 0.1 meters.
The coordinates of the position 7 of the image /*FIXME:are*/include 0.2 meters and 0.1 meters.
The coordinates of the position 8 of the image /*FIXME:are*/include 0.3 meters and 0.1 meters.
The coordinates of the position 9 of the image /*FIXME:are*/include 0.0 meters and 0.0 meters.
The coordinates of the position 10 of the image /*FIXME:are*/include 0.1 meters and 0.0 meters.
The coordinates of the position 11 of the image /*FIXME:are*/include 0.2 meters and 0.0 meters.
The coordinates of the position 12 of the image /*FIXME:are*/include 0.3 meters and 0.0 meters.

The file path of the image is "robot_assembly.png".
The position 1 of the image is the position of the corner 1 of the area 1 of the image.
The position 2 of the image is the position of the corner 2 of the area 1 of the image.
The position 5 of the image is the position of the corner 3 of the area 1 of the image.
The position 6 of the image is the position of the corner 4 of the area 1 of the image.
The position 2 of the image is the position of the corner 1 of the area 2 of the image.
The position 3 of the image is the position of the corner 2 of the area 2 of the image.
The position 6 of the image is the position of the corner 3 of the area 2 of the image.
The position 7 of the image is the position of the corner 4 of the area 2 of the image.
The position 3 of the image is the position of the corner 1 of the area 3 of the image.
The position 4 of the image is the position of the corner 2 of the area 3 of the image.
The position 7 of the image is the position of the corner 3 of the area 3 of the image.
The position 8 of the image is the position of the corner 4 of the area 3 of the image.
The position 5 of the image is the position of the corner 1 of the area 4 of the image.
The position 6 of the image is the position of the corner 2 of the area 4 of the image.
The position 9 of the image is the position of the corner 3 of the area 4 of the image.
The position 10 of the image is the position of the corner 4 of the area 4 of the image.
The position 6 of the image is the position of the corner 1 of the area 5 of the image.
The position 7 of the image is the position of the corner 2 of the area 5 of the image.
The position 10 of the image is the position of the corner 3 of the area 5 of the image.
The position 11 of the image is the position of the corner 4 of the area 5 of the image.
The position 7 of the image is the position of the corner 1 of the area 6 of the image.
The position 8 of the image is the position of the corner 2 of the area 6 of the image.
The position 11 of the image is the position of the corner 3 of the area 6 of the image.
The position 12 of the image is the position of the corner 4 of the area 6 of the image.

/*
If the 1st coordinate of a position is greater than the 1st coordinate of the 1st corner of an area, and
   the 1st coordinate is greater than the 1st coordinate of the 3rd corner of the area then
   the position is inside the area.
*/

A movie.
The file path of the movie is "robot.avi".

A length is meters.
A width is meters.

A function "__hap_is_position_inside_area".
To know that 1st meters and 2nd meters are inside something /*FIXME: an area*/.
    Call the function "__hap_is_position_inside_area" with the 1st meters, the 2nd meters and something.
    If the function "__hap_is_position_inside_area" did not fail then.
        Tell the user that the 1st meters and the 2nd meters are inside something.
        The 1st meters and the 2nd meters are inside something.
    End.
End.

To guide someone to assemble the robotic arm.
    Show the image.
    Until someone asks you to stop guiding you then.
        If someone tells you that somebody touches the image at 1st meters and 2nd meters.
            Know that the 1st meters and the 2nd meters are inside the 1st area of the image.
            If the 1st meters and the 2nd meters are inside the 1st area of the image.
                Play the movie from 0 seconds to 20 seconds.
            End.
            Know that the 1st meters and the 2nd meters are inside the 2nd area of the image.
            If the 1st meters and the 2nd meters are inside the 2nd area of the image.
                Play the movie from 21 seconds to 108 seconds.
            End.
            Know that the 1st meters and the 2nd meters are inside the 3rd area of the image.
            If the 1st meters and the 2nd meters are inside the 3rd area of the image.
                Play the movie from 109 seconds to 313 seconds.
            End.
            Know that the 1st meters and the 2nd meters are inside the 4th area of the image.
            If the 1st meters and the 2nd meters are inside the 4th area of the image.
                Play the movie from 314 seconds to 396 seconds.
            End.
            Know that the 1st meters and the 2nd meters are inside the 5th area of the image.
            If the 1st meters and the 2nd meters are inside the 5th area of the image.
                Play the movie from 397 seconds to 480 seconds.
            End.
            Know that the 1st meters and the 2nd meters are inside the 6th area of the image.
            If the 1st meters and the 2nd meters are inside the 6th area of the image.
                Play the movie from 481 seconds to 738 seconds.
            End.
        End.
        Wait.
    End.
End.

To detect something.
End.

To move the hand toward something.
End.

To give something to someone.
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
