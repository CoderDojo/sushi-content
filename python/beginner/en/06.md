1. You can ask the user to pick a number now, check if it's the right size and, if it isn't, tell them it's not. What if you wanted it to keep going until you got an answer that was the right size? You could write *if* statements inside *if* statements, but what if the user still doesn't give you the right size of number?

	You need a way to ask the question over and over until you get the right kind of answer. The way to do this in computer programming is called a **loop**. You're going to use one called the *while* loop.
2. A *while* loop is a bit like an *if* statement: it has code inside it that only runs if the condition in brackets is true. The difference is that a *while* loop runs over and over, until its condition is false. You have to make sure that there is always a way out of your *while* loops, or they'll run forever! It looks like this:
	```python
	while(my_number < 100):
	    my_number = input("Hello "+name+" please pick a number that's bigger than 100")
		my_number = int(my_number)
	```
3. Now add a *while* loop to your program.

	```python
	name = input("What is your name?")
	my_number = 0

	# Loop as long as "my_number" is less than 100
	while(my_number < 100):
		# Ask the user for a number
		my_number = input("Hello "+name+" please pick a number that's bigger than 100")
		# Convert the user's answer from a string to an integer
		my_number = int(my_number)
		print("Your number is "+str(my_number))
		# Check if the number is bigger than 100
		if(my_number > 100):
			print("That's a big number!").
		elif(my_number > 90):
			print("Almost there! Try again!")
		else:
			print("That number is too small! Please try again!")
		# If my_number is smaller than 100 at this point, loop again
	```

	> ### Comments
	These are notes for programmers (or you later) that the computer will ignore. In Python, they start with *#* and last to the end of the line.   
