#include "robot.es"

/* the robot */
A robotic arm.
The robotic arm has a name and an ESP32-WROOM-32D chip /*FIXME:, 1 motors, 1 joints, 2 links*/.
The name of the ESP32-WROOM-32D chip is "ESP32".

/*The name of the robotic arm is "TestRobot".*/

/* motors */
The 1st servo motor of the robotic arm is an MG90S motor.
The 1st servo motor is connected to the connector pin 16 of the ESP32-WROOM-32D chip.
The pulse cycle of the servo motor is 0.002 seconds.
The minimum PWM time of the servo motor is 0.410 seconds.
The maximum PWM time of the servo motor is 2.450 seconds.
The speed of the servo motor is 1.1 dps.
The minimum angle of the servo motor 1 of the robotic arm is 0 degrees.

The 2nd servo motor of the robotic arm is an MG996R motor.
The 2nd servo motor is connected to the connector pin 17 of the ESP32-WROOM-32D chip.
The pulse cycle of the 2nd servo motor is 0.005 seconds.
The minimum PWM time of the 2nd servo motor is 0.510 seconds.
The maximum PWM time of the 2nd servo motor is 2.750 seconds.
The speed of the 2nd servo motor is 1.2 dps.

The 3rd servo motor of the robotic arm is an MG90S motor.
The 3rd servo motor is connected to the connector pin 19 of the ESP32-WROOM-32D chip.
The pulse cycle of the 3rd servo motor is 0.005 seconds.
The minimum PWM time of the 3rd servo motor is 0.510 seconds.
The maximum PWM time of the 3rd servo motor is 2.750 seconds.
The speed of the 3rd servo motor is 1.2 dps.

The 4th servo motor of the robotic arm is an MG90S motor.
The 4th servo motor is connected to the connector pin 23 of the ESP32-WROOM-32D chip.
The pulse cycle of the 4th servo motor is 0.005 seconds.
The minimum PWM time of the 4th servo motor is 0.510 seconds.
The maximum PWM time of the 4th servo motor is 2.750 seconds.
The speed of the 4th servo motor is 1.2 dps.

The 5th servo motor of the robotic arm is an MG90S motor.
The 5th servo motor is connected to the connector pin 13 of the ESP32-WROOM-32D chip.
The pulse cycle of the 5th servo motor is 0.015 seconds.
The minimum PWM time of the 5th servo motor is 0.410 seconds.
The maximum PWM time of the 5th servo motor is 6.450 seconds.
The speed of the 5th servo motor is 1.5 dps.

The 6th servo motor of the robotic arm is an MG90S motor.
The 6th servo motor is connected to the connector pin 25 of the ESP32-WROOM-32D chip.
The pulse cycle of the 6th servo motor is 0.025 seconds.
The minimum PWM time of the 6th servo motor is 0.810 seconds.
The maximum PWM time of the 6th servo motor is 5.450 seconds.
The speed of the 6th servo motor is 1.6 dps.

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
The length of the 1st link of the robotic arm is 0.015 meters.
The length of the 2nd link is 0.06 meters.
The length of the 3rd link is 0.13 meters.
The tag of the robotic arm is the tag of the 3rd link.
The 1st coordinate of the position of the tag of the robotic arm is 0.0 meters.
The 2nd coordinate of the position of the tag of the robotic arm is 0.05 meters.
The 3rd coordinate of the position of the tag of the robotic arm is 0.01 meters.
The 1st angle of the orientation of the tag of the robotic arm is 0.0 degrees.
The 2nd angle of the orientation of the tag of the robotic arm is 180.0 degrees.
The 3rd angle of the orientation of the tag of the robotic arm is 0.0 degrees.
The length of the 4th link is 0.135 meters.
The length of the 5th link is 0.05 meters.

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

/* Recognized objects */

A ball is round.
A cup.

To initialize a robotic arm.
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
    End.
End.

To move the robotic arm.
    For each of the servo motors of the robotic arm.
        Tell the ESP32-WROOM-32D chip the speed of the servo motor.
        /*FIXME: there should not be any need for above If-statement to get below line compiled*/
        If the servo motor has a target angle then.
            Tell the ESP32-WROOM-32D chip the target angle.
        End.
    End.
    Ask the ESP32-WROOM-32D chip to move the servo motors of the robotic arm.
End.

To /*FIXME: soft*/ reset the robotic arm.
    Tell the ESP32-WROOM-32D chip to reset.
End.

