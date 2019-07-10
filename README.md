# english-script
Open source SW development for EnglishScript related products, mainly now
the Alvin A.I. (an Artificial Intelligence).

## Android app for Alvin A.I.

To use Alvin A.I. you can install the Alvin A.I. Assistant Android app from Google Play:

    https://play.google.com/store/apps/details?id=com.simua.alvinai

The app comes with a preinstalled version of the Alvin A.I.

## Sources for Alvin A.I.

In case you want to build Alvin A.I. from sources you can get them from GitHub:

    $ git clone https://github.com/EnglishScript/english-script.git

All sources for Alvin A.I. can be found from 'src/alvin'.

## To compile Alvin A.I.

You need first the latest ES SDK from the http://www.englishscript.com/packages.
After installing it, clone the english-script repo to your local
computer, go to 'src/alvin' and run "make all".

## To run all tests for Alvin A.I.

Go to 'src/alvin' and run "make test".

## To run and interact with Alvin A.I.

Go to 'src/alvin' and run:

    $ es-sh -r -3 alvin.eso
    EnglishScript Shell v0.1.2
    Copyright (c) Tommi Manttari

    > Begin.
    < Ok. What is your name? 
    > "Tommi".
    < Do you have a family? 
    > Yes.
    < What are members of your family? 
    > I.
    < Does John have a family? 
    > Yes.
    < What are members of John's family? 
    > You and I.
    < Does Sarah have a family? 
    > I don't know.
    < Ok. 
    > Tell me about me.
    < Ok. You are a man. You have the family. You have the name "Tommi". You are an engineer.
    > Tell me about John's family.
    < Ok. John's family has the members. John has the family. 
    > Tell me about the members.
    < Ok. John's family has the members. The members of John's family include me and you. 

