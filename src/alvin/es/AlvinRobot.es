#include "robot.es"

/* the robot */
A robotic arm.
The robotic arm has a name and an ESP32-WROOM-32D chip /*FIXME:, 1 motors, 1 joints, 2 links*/.

/*The name of the robotic arm is "TestRobot".*/

/* motors */
The 1st servo motor of the robotic arm is an SG90 motor.
The 1st servo motor is connected to the connector pin 10 of the ESP32-WROOM-32D chip.
The pulse cycle of the servo motor is 0.002 seconds.
The minimum PWM time of the servo motor is 0.410 seconds.
The maximum PWM time of the servo motor is 2.450 seconds.
The speed of the servo motor is 1.1 dps.
The minimum angle of the servo motor 1 of the robotic arm is 0 degrees.

The 2nd motor of the robotic arm is an SG92R motor.
The motor is connected to the connector pin 11 of the ESP32-WROOM-32D chip.
The pulse cycle of the motor is 0.005 seconds.
The minimum PWM time of the motor is 0.510 seconds.
The maximum PWM time of the motor is 2.750 seconds.
The speed of the motor is 1.2 dps.

The 3rd motor of the robotic arm is an SG92R motor.
The motor is connected to the connector pin 12 of the ESP32-WROOM-32D chip.
The pulse cycle of the motor is 0.002 seconds.
The minimum PWM time of the motor is 0.610 seconds.
The maximum PWM time of the motor is 3.150 seconds.
The speed of the motor is 1.3 dps.

The 4th motor of the robotic arm is an SG90 motor.
The motor is connected to the connector pin 13 of the ESP32-WROOM-32D chip.
The pulse cycle of the motor is 0.003 seconds.
The minimum PWM time of the motor is 0.210 seconds.
The maximum PWM time of the motor is 7.450 seconds.
The speed of the motor is 1.4 dps.

The 5th motor of the robotic arm is an SG90 motor.
The motor is connected to the connector pin 14 of the ESP32-WROOM-32D chip.
The pulse cycle of the motor is 0.015 seconds.
The minimum PWM time of the motor is 0.410 seconds.
The maximum PWM time of the motor is 6.450 seconds.
The speed of the motor is 1.5 dps.

The 6th motor of the robotic arm is an SG90 motor.
The motor is connected to the connector pin 15 of the ESP32-WROOM-32D chip.
The pulse cycle of the motor is 0.025 seconds.
The minimum PWM time of the motor is 0.810 seconds.
The maximum PWM time of the motor is 5.450 seconds.
The speed of the motor is 1.6 dps.

The 7th motor of the robotic arm is an SG90 motor.
The motor is connected to the connector pin 16 of the ESP32-WROOM-32D chip.
The pulse cycle of the motor is 0.008 seconds.
The minimum PWM time of the motor is 1.810 seconds.
The maximum PWM time of the motor is 3.450 seconds.
The speed of the motor is 1.7 dps.

/* links */
The length of the 1st link of the robotic arm is 0.01 meters.
The length of the 2nd link is 0.03 meters.
The length of the 3rd link is 0.10 meters.
The length of the 4th link is 0.10 meters.
The length of the 5th link is 0.05 meters.
The length of the 6th link is 0.05 meters.

/* joints */
The 1st motor of the robotic arm is the 1st motor of the 1st joint of the robotic arm.
/*FIXME: there should now be any need for giving the Nth here */
The minimum angle of the 1st joint is -180 degrees.
The maximum angle of the 1st joint is 180 degrees.
The 1st link of the robotic arm is the 1st link of the 1st joint.
The 2nd link of the robotic arm is the 2nd link of the 1st joint.

The 2nd motor of the robotic arm is the 1st motor of the 2nd joint of the robotic arm.
The 3rd motor of the robotic arm is the 2nd motor of the 2nd joint.
The minimum angle of the 2nd joint is -70 degrees.
The maximum angle of the 2nd joint is 90 degrees.
The 2nd link of the robotic arm is the 1st link of the 2nd joint.
The 3rd link of the robotic arm is the 2nd link of the 2nd joint.

The 4th motor of the robotic arm is the 1st motor of the 3rd joint of the robotic arm.
The 5th motor of the robotic arm is the 2nd motor of the 3rd joint.
The minimum angle of the 3rd joint is -40 degrees.
The maximum angle of the 3rd joint is 120 degrees.
The 3rd link of the robotic arm is the 1st link of the 3rd joint.
The 4th link of the robotic arm is the 2nd link of the 3rd joint.

The 6th motor of the robotic arm is the 1st motor of the 4th joint of the robotic arm.
The minimum angle of the 4th joint is -170 degrees.
The maximum angle of the 4th joint is 170 degrees.
The 4th link of the robotic arm is the 1st link of the 4th joint.
The 5th link of the robotic arm is the 2nd link of the 4th joint.

The 7th motor of the robotic arm is the 1st motor of the 5th joint of the robotic arm.
The minimum angle of the 5th joint is -30 degrees.
The maximum angle of the 5th joint is 30 degrees.
The 5th link of the robotic arm is the 1st link of the 5th joint.
The 6th link of the robotic arm is the 2nd link of the 5th joint.

/* Recognized objects */

A ball is round.

To initialize a robotic arm.
    Tell the ESP32-WROOM-32D chip that the ESP32-WROOM-32D chip controls the robotic arm.
    Tell the ESP32-WROOM-32D chip the number of the servo motors of the robotic arm.
    /*FIXME: Tell the ESP32-WROOM-32D chip that what is the number of servo motors of the robotic arm.*/
    /*FIXME: Tell the ESP32-WROOM-32D chip that the robotic arm has 7 servo motors.*/
    For each of the servo motors of the robotic arm.
        /*FIXME: This tella way too much about the robot: Tell the ESP32-WROOM-32D chip about the servo motor.*/
        /*If the servo motor has a minimum angle then.*/
        If the servo motor is an SG90 motor then.
            Tell the ESP32-WROOM-32D chip that the servo motor is an SG90 motor.
        End.
        If the servo motor is an SG92R motor then.
            Tell the ESP32-WROOM-32D chip that the servo motor is an SG92R motor.
        End.
        If the servo motor is connected to something.
            Tell the ESP32-WROOM-32D chip that the servo motor is connected to something.
        End.
        Tell the ESP32-WROOM-32D chip the pulse cycle of the servo motor.
        Tell the ESP32-WROOM-32D chip the minimum PWM time of the servo motor.
        Tell the ESP32-WROOM-32D chip the maximum PWM time of the servo motor.
        /*End.*/
    End.
End.

To move the robotic arm.
    Tell the ESP32-WROOM-32D chip the speed of the servo motor 1 of the robotic arm.
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

