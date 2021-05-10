# :x: Tic-Tac-Toe :o:

This is my project for SEI 04 - Project One. The task was to create a game of Tic Tac Toe using HTML, CSS and JavaScript


# :globe_with_meridians: Link

https://itsjimmy03.github.io/tic-tac-toe-2/


# :hammer: How it was built 

My Project was created using HTML, CSS and JavaScript.


# :video_game: How to play

Welcome to Tic Tac Toe
Player 1 has been assigned X and Player 2 has been assigned O. Player 1 goes first (initially). In order to win the game, a player must place three of their marks in a horizontal, vertical, or diagonal row. The game is draw if the grid is filled and none of the marks are in a horizontal, vertical, or diagonal row.

There is a win count to track how many wins a player has won and draw count as well.

Clicking the 'Reset' button will clear the board of any marks and the person whos turn it was prior to the reset will start..


# :pencil2: Planning

Intially, I started off writing psudeo code and worked off that i.e 

```
//Create Tic Tac Toe game
//9x9 Grid in HTMl using divs


//let user input Xs or Os into the squares
//--make box clickable
//--once clicked make X or O appear in the box
//--if box already has inpput - invalid move

//after 4 inputs check if there are 3 consectutive X or Os (win conditions) & draw
//--create function to check boxes
```

After a bit of coding I had to change the order of things and originally wanted to put everything in 1 function but realised that would be too messy. I eventually made 5 functions for and called them when I needed to i.e win conditions check after every click or fucntion to reset grid.


# :bug: Known Bugs
During Saturday's presentation there was a couple of bugs:

Some win conditions werent working (Fixed)
Draw condition was not working (Fixed)

The reset button wouldnt reset to Player 1's turn but decided to keep this to allow Player 2 to go first (Turned into a feature)


# :star: What I would like to add

- Players can choose which mark they would like
- Set a player name
- Responsive design
- Better visual
- Maybe Computer input using math.random

Note: 

These features were not present during Saturdays presentation:

- Player win and draw count + draw condition


#  :sparkles: My experience developing the game

My experience design this game was quite good. I found it enjoyable and could apply what we have learnt in 6 weeks to it. I did struggle to understand how querySelector/qsAll worked. But Alex exlpained it to me.
