// JavaScript Looping Exercise

// 1. Output each item in the following Array to your console:

 var livingRoom = ['couch', 'lamp', 'rug', 'shelf'];

	 for(i=0; i<livingRoom.length; i++) {
		console.log(livingRoom[i]);
	 }

	//or

	 var livingRoom = ['couch', 'lamp', 'rug', 'shelf']; 

	 while(livingRoom < livingroom.length) {
		 console.log(livingroom[i])
		 counter++;
	 }


// 2. Using a loop, log numbers 22-33 in the console.

	for(i=22; i<=33; i++) {
		console.log(i)
	}

	//or

	var counter = 22;

	while(counter < 34) {
		console.log(counter)
		counter++;
	}

// 3. Using a similar loop, log numbers 75 to 100, only in increments of five.

	for(i=75; i<=100; i+=5) {
		console.log(i)
	}

	//or

	var counter = 75;

	while(counter < 101) {
		console.log(counter)
		counter+5;
	}

// 4. Write a while loop that logs "This is how a professional loops." to the console 5 times.
//     Use this as an example:
//        var counter = 0;
//        var num = 2;

//        while (num < 1000) {
//        num += num;
//        counter++;
//        }

//        console.log(counter);

	var counter = 0;

	while(counter < 5) {
		console.log("This is how a professional loops")
		counter++;
	}

// 5. Write a conditional statement to find the largest of the numbers in the array provided.
	
	var largestNum = [-5, -2, -6, 0, -1]
	var big = largestNum[0];

	for(i=0; i<largestNum.length; i++){
		if(largestNum[i] > big){
			big = largestNum[i]
		}
	}
	console.log("The largest number is " + big);

// 6. Separately, use both a for loop and while loop to do the same thing.
//     Print out the sentence "At home, I have _____ cats." Use the number from your counter to fill in the number.
//     The numbers should range from 10 to 100, in increments of 25.

	for(i=10; i<=100; i+=25) {
		console.log("At home, I have " + i + " cats.")
	}

	var counter = 10;

	while(counter < 100) {
		console.log("At home, I have " + counter + " cats.")
		counter += 25;
	}


// 7. Given the following Array, console log 'Even' if the number is even, 'Even and greater than 10' if the
//    number is even and greater than 10, and 'Odd' if the number is odd.
//    HINT: Google 'remainder operator'
var numArray = [2, 17, 9, 24, 8];

// 8. Given the following Array, create variable primeArray with the value [2, 7, 17, 29, 41, 53, 67, 79, 97]
var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97,];
var primeArray = [];

	for(i=0; i<prime.length; i+=3) {
		primeArray.push(primes[1]);
		}

	console.log(primeArray)

// 9. Prompt a user to pick either a number or a word. Create a script that alerts the user whether they chose a number or a word.
// Hint: Google 'typeof'

	var choice = prompt("Enter a word or a number")



// 10. Write a loop that outputs the following to the console:
// #
// ##
// ###
// ####
// #####
// ######
// #######

	var count = 0;
	var pound = "#";

	while(count < 8) {
		console.log(pound)
		pound = pound + "#"
		count++
	}

	//or

	var triangle = "";
	for(i=0; i<=7; i++) {
		triangle += "#";
		console.log(triangle);
	}

// RO SHAM BO!
// We're going to create a paper, rock, scissors game that prompts you for your choice and allows the computer to
// randomly choose. You will use an alert to define the winner.

// 11. Use a variable called "human" to prompt the user to type their choice.

	var human = prompt("Chose one: Rock, Paper or Scissors")

// 12. Define an array called "choices" that consists of "paper", "rock", and "scissors".

	var choices = ['rock', 'paper', 'scissors'];

// 13. Define a variable called "computer" and use Math.random to allow the computer to randomly select a number.
//    For reference:
//    Math.random gives you a random number between 0 and 1, which is different each time you call it.

	var computer = Math.random();
	console.log(computer)


// 14. Let's start our conditional statement. Start by reassigning the computer variable to "rock" if the random number
//    falls between 0 and .33. Run the code until the console prints out "rock" instead of the number.
//    In English, it will look like this:
//      var computer = my Math.random code here
//       if the number is between 0 and 33
//          computer = "rock"
//       log computer to the console

	if(0 < computer && computer <= .33) {
		computer = choice[0];
	}
	else if(.33 < computer && computer <= .66){
		computer = choices[1];
	}
	else if(.66 < computer && computer < 1){
		computer = choice[2];
	}

// 15. Now add the following conditionals to the same statement:
//    If the random number is between .34 and .66, set the computer variable to "paper".
//    If the random number is between .67 and 1, set the computer variable to "scissors". (Who the hell seriously chooses scissors first?)
// 16. Using both "human", begin another conditional statement. At this time, leave the statements blank.
//    In English, it will look like this:
//      if human is "rock"
//        leave this blank
//      if human is "paper"
//        leave this blank
//      else
//        leave this blank
// 17. Now inside of each condition, we need to compare the "human" variable to the "computer" variable,
//    then print to the console who won the game.
// 18. Give yourself a high five for completing your first javascript game!
// 19. Use the game you made above and rework it using a switch statement.
// 20. What happens if your user enters something other than "rock", "paper", or "scissors?". Change your default case
//     to print a snarky message to the console if the input doesn't match any of the options.


// HEDS ER TALES?
// 21. Use the following variable for your coin flip action:
       var coin = Math.floor(Math.random() * 2);
//     We're using Math.random again, along with Math.floor.
//     Remember, Math.random gives you a random number between 0 and 1.
//     Calling Math.floor on that number will truncate the decimal, and give you a
//     random number within the bounds of your array. (In this case, our array will only contain two items.)
// 22. Use a while loop to keep flipping the coin until you get tails.

// 23. FIZZ BUZZ
// Write a program that uses console.log to print each number up to 100, with a couple exceptions...
// If the number is divisible by 3, print "Fizz" instead of the number.
// If the number is divisible by 5, print "Buzz" instead of the number.
// If the number is divisible by both 3 and 5, print "FizzBuzz" instead of the number.


// CHESS BOARD
// 24. Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines.
// At each position of the grid there is either a space or a “#” character. The characters should form a chess board.

//Passing this string to console.log should show something like this:

//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #

// When you have a program that generates this pattern, define a variable size = 8 and change the program
// sso that it works for any size, outputting a grid of the given width and height.


// THAR BE DACHSHUNDS
// We're going to slay some badass dachshunds.
// 25. Start by using the following variables:
var slaying = true;
var youHit = Math.floor(Math.random() * 2);
var damageThisRound = Math.floor(Math.random()*5 + 1);
var totalDamage = 0;

// 26. Create a while loop that runs as long as "slaying" is equal to true. For now, set "slaying" to false
//     inside of the body of the loop so we don't break stuff with an infinite loop.
// 27. Inside of your while loop, create a conditional statement. If "youHit" is 1 (which is true),
//     log to the console a congratulatory message about injuring the poor dog.
//     If "youHit" is 0 (which is false), log to the console a message about that bastard beating you.
//     The "slaying" variable should be set to false here to end the loop.
// 28. Inside of the first branch of our conditional statement, after the console.log statement,
//     set "totalDamage" to totalDamage plus damageThisRound.
// 29. Below that, begin a new conditional statement. If you hit the dachshund 4 times, you killed him! Log a success message to the console.
//     If the totalDamage is less than 4, set the youHit variable to the same expression we used at the top.
//     This will begin the loop again.
// 30. Play until you win!
