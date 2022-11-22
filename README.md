# PDX Blackjack 

This web application is a game of Blackjack played between a user 
and the computer. The goal of the game is to get a score of 21 
by adding all the values of your cards. Basic rules apply in this
game. The backend data storage will be with the Django framework
and SQLite. CSS, HTML, and Vue.js will be used for all front end
aspects of this application. 

## Project Overview

Major feature of this web application will be the ability of the
user to play the game Blackjack against the computer. Also, the 
user will be able to keep a running score of their hands and 
sessions. Their user profile wille hold their stats as well. This 
application uses Django framework, Vue, HTML, CSS, and API calls.

## Functionality

When the user starts this application they are first going to have
to sign into their profile or sign up for a new one. Once in the 
game they will be able to play hands of Blackjack using API calls 
with Vue.js. Over time the user will be able to look at their profile
for all the stats that are collected in the game. 


## Data Model

The user will be able to log into their individual profile, which 
will store all their hand histories and scores, for all hands and 
sessions played. This will be accomplished by...

- Creating a user database inside of Django

- Creating the user database of stats for:

   Total Hands Played - intField

   Highest Total Score - intField

   Lowest Total Score - intField

   Average Win Rate - intField

   Average Bet Size - intField

   User Expected Value - intField

## Schedule

- Nov. 17 - Nov. 18: First Milestone
- Create .MD and GitHub repo
##
- Nov. 21 - Nov. 25: Second Milestone
- Create Django, create users, start Vue
##
- Nov. 28 - Dec. 02: Third Milestone
- Begin building Vue and API calls
##
- Dec. 05 - Dec. 09: Fourth Milestone
- Wrap up any left over Vue and begin styling