# PDX Blackjack 

A game of Blackjack between the user and the computer. Basic 
Blackjack rules apply, i.e. Blackjack of 21 for the dealer on
the first two cards is a loss for the user, unless user has 
the same. Blackjack will be played with only one deck, and
score will be kept between hands and session. The user will 
play the game within a web browser and most of the logic will 
on the front end using the Django framework.

## Project Overview

###### What are the major features of your web application? What problem
###### is it attempting to solve? What libraries or frameworks will you 
###### use?

Major feature of this web application will be the ability of the
user to play the game Blackjack against the computer. Also, the 
user will be able to keep a running score of their hands and 
sessions. Their user profile wille hold their stats as well. This 
application uses Django framework, Vue, HTML, CSS, and API calls.

## Functionality

###### Walk through the application from the user's perspective. What 
###### will they see on each page? What can they input and click and see? 
###### How will their actions correspond to events on the back-end?

The user will log into their profile, which will save their stats
and overall points. The user will be able to wager their points
on each hand, choose between a Hit, Stand, or Double Down. 

## Data Model

###### What data will you need to store as part of your application? 
###### In this section list out all the models you'll have and the fields 
###### on each of them.

Will have only one model within this application which will focus 
on the player and the data stored will be for the user. 
The data will be Score, Win/Loss stat, games played stat, highest
played stat, highest score stat, etc. 

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