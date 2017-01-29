
# Memory Card Game

## Rules

1. Start Game Button

2. User is dealt a grid of cards that are dealt face down.  
    - Grid of 16 cards, 8 matching pairs.

3. Each turn, the user chooses two cards. Each turn is counted as 1 move.

4. If the cards match, then they are taken off the board and the user is awarded a point.

5. If the cards don't match, they are turned face down and the user chooses again.

6. Your score is the number of moves that it takes to clear the board.
    - While user is playing there is a counter for moves.

7. Log the score.

8. Game will start over.

### Wireframe:

![memory game wireframe ](img/wireframe.png?raw=true "Wire Frame")

### User Stories:
* Users should be able to click on cards to flip them over.
* Users should be able to have matched or mismatched cards evaluated.
* Users should be able to be alerted to whether they have a match or to try again.
* Users should be able to see their current score
* Users should be able to reset the game

### Technologies Used:
* HTML - creating cards and game board
* CSS - styling cards
* Javascript - adding game logic and making cards interactive

### Approach
* My first step was to build the game board, and create a grid of 16 cards.
* Next I used Source 1 to create a card animation which would flip each card using a transform css animation.
* After implementing the card animation, I leveraged the Fisher Yates algorithm to dynamically shuffle the cards.
* I then used vanilla javascript to create a click event for a users turn, and store each clicked elements value in a new array.
* Last, I wrote a series of conditionals which evaluates for matches and non-matches from the new Array.


#### Code Sources:
  - 1. CSS card flip : http://www.webascender.com/Blog/ID/651/CSS-3D-Card-Flip-Animation-Tutorial#.WIovZLYrKL9
  - 2. Fisher Yates Shuffle :
  http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array &
  https://bost.ocks.org/mike/shuffle/
