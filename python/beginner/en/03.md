1. Getting the computer to stick your name on the end of *"Hello "* is nice, but why not just write *"Hello [my name]"*? Because with a **variable** you don't have to know what's going into it when you write the program. your can even ask the user of the program to tell you what to put into it. Update your Python program to do that:
    ```python
      name = input("What is your name?")
      print("Hello "+name)
      print("The Code, it's calling to you. Just let it in.")
    ```
    Try running it. You'll need to press the "Enter" key once you've typed in your name.

2. Now, try collecting a number from your user. Notice that you can use the *+* on both sides of a variable.

    Run this program, answer its questions and watch what happens.
    ```python
      name = input("What is your name?")
      my_number = input("Hello "+name+", please pick a number")
      print("Your number is "+my_number)
    ```
3. What if you want to add a number to your variable? Add a line to your program that will add one to the *my_number* variable.
    ```python
      name = input("What is your name?")
      my_number = input("Hello "+name+" please pick a number")
      my_number = int(my_number) + 1
      print("Your number is "+str(my_number))
    ```
    > See that you've taken a value from a variable, changed it and stored it back in the same variable all on the same line!

    Now, why does the code have *int( )* and *str( )* around *my_number*?

    It's because Python thinks of the number '1', which it uses for maths, differently to the number '1' which it writes in a sentence. Putting *int( )* around a variable tells it to treat it as an **integer** (a maths number), and putting *str( )* around it tells it to treat it as a text **string**.  

    **Integers** and **strings** are variable **types** and certain pieces of code (like *+* and *print*) only work if the variables you give them are the right type.

    > ### Maths
    You've seen how to add here, but you can also:
    * Subtract using *-*
    * Multiply using ***
    * Divide using */*
