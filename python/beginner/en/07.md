1. So now you've learned about:
     * *print* statements: Talking to our user
     * variables: A way to get our program to remember and update values
     * strings: Pieces of text
     * *input*: How to get information from our user
     * maths: How to do maths with a number
     * integers: Numbers for doing maths with  
     * *if* statements: Do something based on a condition
     * *while* loops: Keep doing something until a condition isn't true

2. Try using these to make this game:
     * There is a number (an integer), between 1 and 9, that the program picks in secret
     * The player has 5 guesses to pick the number
     * The game teaches the player the rules
     * The player is told after each guess whether the number is lower, higher, or right, and how many guesses they have left
     * If the player gets their guess right, they get a special winning message
     * If the player gets their 5th guess wrong, the game is over and they lose  
3. You can play an example of the game at [dojo.soy/py-dice](http://dojo.soy/py-dice).

4. You're missing just one thing to be able to write this game: A way to get a random number between 1 and 9. The code to do this is a little beyond what you've covered, so just treat this next bit as a piece of magic. It will be explained in later Sushi Cards.
Put this as the **first line** in your program:
    ```python
    from random import randint as dice
    ```
Now, anywhere you want to use a random number between 1 and 9, just use *dice(1,9)*. For example:
    ```python
    secret_number = dice(1,9)
    ```
4. Try to make the game now! Remember to use previous cards. If you're stuck, or when you're done,.you can check my answer at [dojo.soy/py-guess](http://dojo.soy/py-guess). Don't worry if yours looks very different, as long as it works. Good luck!

    > # What did you think?
    You've finished this series of Sushi Cards. I'd love to know what you thought of them. If you have a few minutes, please let me know at [dojo.soy/py-beginner](http://dojo.soy/py-beginner)
