1. What if you want to check if the user's number is big enough, and tell them if it's not? Say if it's bigger than 100. Then, either congratulate the user on giving a number that's big enough, or tell them where they went wrong. Try this:
    ```python
    name = input("What is your name?")
    my_number = input("Hello "+name+" please pick a number that's bigger than 100")
    my_number = int(my_number)
    print("Your number is "+str(my_number))

    if(my_number > 100):
        print("That's a big number!")
    else:
        print("That number is too small!")
    ```
    Here the *else* works like an *if* statement where the condition is "the thing in the if isn't true"
2. What if you want to tell the user if they're close? Say if they've picked a number over 90?
    Then you use an *elif*. That's *else* and *if* stuck together, because it happens only if the thing in the *if* statement isn't true and if the thing in the *elif* statement's brackets is true. So here's what you add to get the program to tell the user they're close:
    ```python
    elif(my_number > 90):
        print("Almost there!")
    ```
    And here's what it looks like with the rest of the program. Notice that the *elif* has to come between the *if* and the *else*.
    ```python
    name = input("What is your name?")
    my_number = input("Hello "+name+" please pick a number that's bigger than 100")
    my_number = int(my_number)
    print("Your number is "+str(my_number))

    if(my_number > 100):
    print("That's a big number!")
    elif(my_number > 90):
        print("Almost there!")
    else:
	    print("That number is too small!")
    ```
