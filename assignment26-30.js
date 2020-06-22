////////////////////////////////////////1////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*1. Write a program that takes a positive integer from user &
display the following in your browser.
a. number
b. round off value of the number
c. floor value of the number
d. ceil value of the number*/
var number1= +prompt("Enter Any positive nubmer");
var rond=Math.round(number1);
var flor=Math.floor(number1);
var ceil=Math.ceil(number1);
document.write("<h1>Task No 1</h1>"+"<br>"+" Number :"+number1+"<br>"+"Round Off Value :"+rond+"<br>"+" Floor value :"+flor+"</br>"+" Ceil Value : "+ceil+"</br>");


////////////////////////////////////////2////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/*


number from user & display the following in your browser.
a. number
b. round off value of the number
c. floor value of the number
d. ceil value of the number
*/

var number2= +prompt("Enter Any Negative nubmer");
var rond2=Math.round(number2);
var flor2=Math.floor(number2);
var ceil2=Math.ceil(number2);
document.write("<h1>Task No 2</h1>"+"<br>"+" Number :"+number2+"<br>"+"Round Off Value :"+rond2+"<br>"+" Floor value :"+flor2+"</br>"+" Ceil Value  :"+ceil2+"</br>");

////////////////////////////////////////3//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



/*
3. Write a program that displays the absolute value of a
number.
E.g. absolute value of -4 is 4 & absolute value of 5 is 5
*/

var number3= +prompt("Enter Any positive nubmer");
var abso=Math.abs(number3);
document.write("<h1>Task No 3</h1>"+"<br>"+" Number :"+number3+"<br>"+"Absolute Value :"+abso+"<br>");



////////////////////////////////////////4//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
4. Write a program that simulates a dice using random()
method of JS Math class. Display the value of dice in your
browser.:
 */

 var number4=Math.random()*6;
 var ceil3=Math.ceil(number4);
 document.write("<h1>Task No 4</h1>"+"<br>"+" The Random Dice value is :"+ceil3+"<br>");



////////////////////////////////////////5//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*

5. Write a program that simulates a coin toss using random()
method of JS Math class. Display the value of coin in your
browser

 */

var number5=Math.random()*2;
var ceil5=Math.ceil(number5);
if (ceil5===2){
    document.write("<h1>Task No 5</h1>"+"<br>"+" The Coin is :"+" "+ceil5+"Head"+"<br>");
}
else {
    document.write("<h1>Task No 5</h1>"+"<br>"+" The Coin is :"+" "+ceil5+"Tail"+"<br>");
}

////////////////////////////////////////6/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*

6. Write a program that shows a random number between 1
and 100 in your browser.
*/

var number6=Math.random()*30;
var ceil6=Math.ceil(number6);
document.write("<h1>Task No 6</h1>"+"<br>"+" The Random Between 1-100  is :"+" "+ceil6+"<br>");

////////////////////////////////////////7/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
7. Write a program that asks the user about his weight. Parse
the user input and display his weight in your browser.
Possible user inputs can be:
a. 50
b. 50kgs
c. 50.2kgs
d. 50.2kilograms
*/

var number7=parseFloat(prompt("Enter your weight"));
document.write("<h1>Task No 7</h1>"+"<br>"+" The weight of user is :"+" "+number7+"kg"+"<br>");

////////////////////////////////////////8////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*

8. Write a program that stores a random secret number from
1 to 10 in a variable. Ask the user to input a number
between 1 and 10. If the user input equals the secret
number, congratulate the user.
*/
var number9=+prompt("Enter The Nubmer to guess");
var number8=Math.random()*5;
var ceil8=Math.ceil(number8);
if (ceil8===number9){
    document.write("<h1>Task No 8</h1>"+"<br>"+" Congratz Your number is match :"+"<br>");
}
else {
    document.write("<h1>Task No 8</h1>"+"<br>"+"Sorry! Try Again"+"<br>");
}