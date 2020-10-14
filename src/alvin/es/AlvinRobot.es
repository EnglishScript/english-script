#include "robot.es"

/* classes */
An electronic chip has connector pins and a case.
"system-on-a-chip" is a noun.
A system-on-a-chip chip is an electronic chip.
"ESP32-WROOM-32D" is a noun.
An ESP32-WROOM-32D chip is a system-on-a-chip chip.
An ESP32-WROOM-32D chip has 60 connector pins.
"SG90" is a noun.
A SG90 motor is a servo motor.
The minimum angle of an SG90 motor is 0 degrees.
The maximum angle of an SG90 motor is 360 degrees.
The lift power of an SG90 motor is 1.6 kgcms.
The grip voltage of an SG90 motor is 0.550 volts.
"SG92R" is a noun.
An SG92R motor is a servo motor.
The minimum angle of an SG92R motor is 0 degrees.
The maximum angle of an SG92R motor is 360 degrees.
The lift power of an SG92R motor is 1.6 kgcms.
The grip voltage of an SG92R motor is 0.550 volts.

/* the robot */
A robotic arm.
The robotic arm has a name and an ESP32-WROOM-32D chip /*FIXME:, 1 motors, 1 joints, 2 links*/.

The name of the robotic arm is "TestRobot".

/* motors */
The 1st motor of the robotic arm is an SG90 motor.
The 1st motor is connected to the connector pin 10 of the ESP32-WROOM-32D chip.
The angle-to-PWM-time ratio of the motor is 0.002 seconds.
The minimum PWM time of the motor is 0.410 seconds.
The maximum PWM time of the motor is 2.450 seconds.

The 2nd motor of the robotic arm is an SG92R motor.
The motor is connected to the connector pin 11 of the ESP32-WROOM-32D chip.
The angle-to-PWM-time ratio of the motor is 0.005 seconds.
The minimum PWM time of the motor is 0.510 seconds.
The maximum PWM time of the motor is 2.750 seconds.

The 3rd motor of the robotic arm is an SG92R motor.
The motor is connected to the connector pin 12 of the ESP32-WROOM-32D chip.
The angle-to-PWM-time ratio of the motor is 0.002 seconds.
The minimum PWM time of the motor is 0.610 seconds.
The maximum PWM time of the motor is 3.150 seconds.

The 4th motor of the robotic arm is an SG90 motor.
The motor is connected to the connector pin 13 of the ESP32-WROOM-32D chip.
The angle-to-PWM-time ratio of the motor is 0.003 seconds.
The minimum PWM time of the motor is 0.210 seconds.
The maximum PWM time of the motor is 7.450 seconds.

The 5th motor of the robotic arm is an SG90 motor.
The motor is connected to the connector pin 14 of the ESP32-WROOM-32D chip.
The angle-to-PWM-time ratio of the motor is 0.015 seconds.
The minimum PWM time of the motor is 0.410 seconds.
The maximum PWM time of the motor is 6.450 seconds.

The 6th motor of the robotic arm is an SG90 motor.
The motor is connected to the connector pin 15 of the ESP32-WROOM-32D chip.
The angle-to-PWM-time ratio of the motor is 0.025 seconds.
The minimum PWM time of the motor is 0.810 seconds.
The maximum PWM time of the motor is 5.450 seconds.

The 7th motor of the robotic arm is an SG90 motor.
The motor is connected to the connector pin 16 of the ESP32-WROOM-32D chip.
The angle-to-PWM-time ratio of the motor is 0.008 seconds.
The minimum PWM time of the motor is 1.810 seconds.
The maximum PWM time of the motor is 3.450 seconds.

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

