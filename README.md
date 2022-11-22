# PDX Blackjack 

This web application is a game of Blackjack played between a user 
and the computer. The goal of the game is to get a score of 21 
by adding all the values of your cards. If the player, or computer,
get a 21 with their first two cards then they win, unless the other
has a two card 21, which in that case would be a draw. If anyone 
goes over 21 then they lose the hand. Any score below a 21 but higher
than their opponent will be declared a winner. And lastly, if both
scores are equivalent then the hand will be declared a "push" a.k.a
a draw or tie.

## Project Overview

Major feature of this web application will be the ability of the
user to play the game Blackjack against the computer. Also, the 
user will be able to keep a running score of their hands and 
sessions. Their user profile wille hold their stats as well. This 
application uses Django framework, Vue, HTML, CSS, and API calls.

## Functionality

When the user starts this application they are first going to have
to sign into their profile or sign up for a new one. Once in they 
will be able to place a wager on their first hand. After that they 
can then press the 'Deal' button which will begin the hand. The user
will receive two cards face up and the deal will receive two cards, 
one face up and the second face down. Next, a Player score and Dealer
score will be displayed, seperately, on the screen. Now, if the user
does not have a score of 21 on their first two cards they will have
the option of pressing the 'Hit' button to receive another card, or 
'Stand' to end their action and let the dealer start their turn. If
the user receives a card and their score is above a 21 they will 
automatically lose the hand. Once both the user and dealer have 
finished acting their scores will be compared and the higher score, 
at 21 or below, will be the winner. The deck will be reshuffled, 
the scores reset and the user will be able to make another wager 
and play the next hand. 


## Data Model

The user will be able to log into their individual profile, which 
will store all their hand histories and scores, for all hands and 
sessions played. This will be accomplished by...

- Creating a user database inside of Django

- Creating a database of stats for:

   Total Hands Played   intField

   Highest Total Score  intField

   Lowest Total Score   intField

   Average Win Rate     intField

   Average Bet Size     intField

   User Expected Value  intField

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