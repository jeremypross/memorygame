
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

### Design Notes

* use CSS flip / toggle flips for cards

* randomize card order
* Math.floor(Math.random() * 16) + 1

* think about how to append an array that will change order to a grid
    - or do you want to cards to be set?

* page elements:
    - grid of cards
    - new game Button
    - counter

* SOURCES:
  - 1. CSS CARD FLIP ANIMATION:
        * http://www.webascender.com/Blog/ID/651/CSS-3D-Card-Flip-Animation-Tutorial#.WIovZLYrKL9
  - 2. 
