/* Loops allow you to iterate code by telling the computer how many times it shuold run a code block. Loops are useful for saving time and preventing repetitious tasks. */

// For example, instead of this scenario...
// var noLoopUser = prompt ('How many times between 1-3');

// // if (noLoopUser == 1) {
// // 	document.write('<br>Fruit Loops!');
// // } else if (noLoopUser == 2) {
// // 	document.write('<br>Fruit Loops!');
// // 	document.write('<br>Fruit Loops!');
// // } else if (noLoopUser == 3) {
// // 	document.write('<br>Fruit Loops!');
// // 	document.write('<br>Fruit Loops!');
// // 	document.write('<br>Fruit Loops!');
// // } else {
// // 	document.write('<br>No Loops for You!');
// // }

/* You can avoid the above bad code, by using loops instead. For example... */

// var loopUser = prompt('How many times do you want to loop?');

// for (var i = 0; i < loopUser; i++) {
// 	document.write('<br>Fruit Loops!');
// }

/* The most common type of programming loop is the for loop. It is called a for loop because it runs a specified number of times. It says to itself, "for each time this condition is true, I will run until the condition stops being true." A for loop is typically written like this:

for (initialization; condition; interation) {
	some function;
}

In the above, initialization is typically a variable that starts at 0 or 1. Condition is the conditional statement that is evaluated for true or false. Iteration is the increment or decrement to modigy the contition so that it will loop up or down. */

// For loops are often incremented.
for (var i = 0; i < 10; i++){
	document.write('<br>' + i + 'pieces of candy!');
}

// For loops can be decremented as well.
for (var i = 10; i > 0; i--) {
	document.write('<br>' + i + 'bottles of root beer!');
}

// For loops can count up and down by intervals.
for (var i = 0; i < 100; i += 10) {
	document.write('<br>' + i + 'cans of beans.');
}

// Loops are particilarly useful for iterating through arrays. If stuck try to read it in regular english.
var menu = ['Croissant', 'Biscuit', 'Pancakes', 'Sandwich', 'Juice', 'Oatmeal', 'Fruits'];
// document.write(menu.length);
for (var i = 0; i < menu.length; i++){
	document.write('<br>' + menu[i]);
}

/* Create a loop counts up from 5 by increments of 2 until it reaches the number larger than 100 */
for (var i = 5; i < 100; i += 2) {
	document.write('<br>' + i );
}

/* While loops, run while a condition remains true, they continue to run until the condition evaluates to false. While loops are helpful for continuing to run something, and can tun perpetually, versus a for loop which typicaly has a set amoun of times it can run. */
// var playerHitPoints = 100;

// while (playerHitPoints > 0) {
// 	document.write('<br>Your hitpoints are: ' + playerHitPoints);
//  	playerHitPoints -= 10;
//  	document.write('<br> Ouch! you got hit by an ogre.' + '<br>Your hitpoints are now:' + playerHitPoints + '<br><br>');
//  }

/* Do While loops are a slight variable of the while loop. The do while loop always runs at least once before it actually enters into the loop itself. */

// var playerExp = 0;

// do {
// 	playerExp += 10;
// 	document.write('You\'ve dereated a spider. <br> You have earned 10xp for a total of ' + playerExp + 'xp<br><br>');
// } while (playerExp < 100);

