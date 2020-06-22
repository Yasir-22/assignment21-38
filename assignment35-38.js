////////////////////////////////////////1/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
1. Write a function that displays current date & time in your
browser.*/
function calltime(){
    var d1=new Date();
    return d1;
}
var d2=calltime();
document.write("<h1>Task 1</h1>"+"<br>"+d2);
////////////////////////////////////////2/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
2. Write a function that takes first & last name and then it
greets the user using his full name.*/

 function greet(First,last){
    return( alert("welcome to our web"+First+last));
   
}

var d3=greet('yasir','moiz');
document.write("<h1>Task 2</h1>"+"<br>"+d3);



////////////////////////////////////////3/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
3. Write a function that adds two numbers (input by user)
and returns the sum of two numbers.
*/
function addnumber(num1,num2){
    var num3=num1+num2;
    return num3;

}
var num1=+prompt("Enter First Number");
var num2=+prompt("Enter second Number");
var c= addnumber(num1,num2)
document.write("<h1>Task 2</h1>"+"<br>"+"The sum of "+num1+" "+num2+"" +"is"+" "+c);

////////////////////////////////////////4/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
4. Calculator:
Write a function that takes three arguments num1, num2
& operator & compute the desired operation. Return and
show the desired result in your browser. */

function calcul(n1,ope,n2){
if(ope==="+"){
  var n3=n1+n2;
    return n3;
}

 else if(ope==="-"){
  var n3=n1-n2;
    return n3;
}

else if(ope==="*"){
    var n3=n1*n2;
    return n3;
}

else if(ope==="/"){
   var  n3=n1/n2;
    return n3;
}
else {
    alert("Invalid Operator")
}

}

var n1=+prompt("Enter First Number");
var ope=prompt("Enter Operator");
var n2=+prompt("Enter second Number");
var d=calcul(n1,ope,n2);
document.write("<h1>Task 4</h1>"+"<br>"+"The"+" "+ope+" "+ "of"+" "+ n1 +" "+"and"+" "+n2+" "+"is"+" "+d );

////////////////////////////////////////5/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
5. Write a function that squares its argument.

*/

function square(val){
    var sp= val*val;
    return sp;

}
var val=+prompt("Enter a value to make its sqaure");
var sq=square(val);
document.write("<h1>Task 5</h1>"+"<br>"+"The square of number is  "+ sq);

////////////////////////////////////////6/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* 
6. Write a function that computes factorial of a number.
*/
function factorial(num){
    if(num==0){
        return 1;
    }
    else return num * factorial(num-1);
}
document.write(factorial(5));







////////////////////////////////////////6/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
7. Write a function that take start and end number as inputs
& display counting in your browser.
*/
function counting(start,end){
    for(var i=start;i<=end;i++){
        document.write(i+"<br>");
    }

}
document.write("<h1>Task 6</h1>");

var start=+prompt("Enter a value to start counting");
var end=+prompt("Enter a value to end counting");
var cont=counting(start,end);

////////////////////////////////////////8/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
8. Write a nested function that computes hypotenuse of a
right angle triangle.
Hypotenuse 2 = Base 2 + Perpendicular 2
Take base and perpendicular as inputs.
Outer function : calculateHypotenuse()
Inner function: calculateSquare()

*/
function calculatehypotneius(){
    var base=+prompt("Enter base of triangel");
    var height=+prompt("Enter height of triangle");
    var totl= Math.sqrt(Math.pow(base,2)+Math.pow(height,2));
    var t1= totl.toFixed(2);
    return t1;
}

document.write("<h1>Task 8</h1>"+"The Of hypotenius of Triangel is"+calculatehypotneius());











////////////////////////////////////////9/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
9. Write a function that calculates the area of a rectangle.
A = width * height
Pass width and height in following manner:
i. Arguments as value
ii. Arguments as variables */
//ii. Arguments as variables//
function Areaofcrectangel(width,height){
 var A=width*height;
 return A;
}

var width=+prompt("Enter Width of Rectangle");
var Height=+prompt("Enter Height of Rectangle");
var arei=Areaofcrectangel(width,Height);
document.write("<h1>Task 9</h1>"+"<br>"+"The Area of rectangle is  "+ arei);

// i. Arguments as value we pass direct value argument areaofcircle(5,6)//



////////////////////////////////////////10/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*  10. Write a JavaScript function that checks whether a passed
string is palindrome or not?
A palindrome is word, phrase, or sequence that reads the same backward as
forward, e.g., madam. */




////////////////////////////////////////11/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*    11. Write a JavaScript function that accepts a string as a
parameter and converts the first letter of each word of the
string in upper case.
EXAMPLE STRING : 'the quick brown fox'
EXPECTED OUTPUT : 'The Quick Brown Fox' */

function upperCase(str){
    var splitstr=str.toLowerCase().split(' ');
     for(var k=0;k<splitstr.length;k++){
      splitstr[k]=splitstr[k].charAt(0).toUpperCase()+splitstr[k].substring(1);
     }
     return splitstr.join(' ');
}
document.write("<h1>Task 11</h1>"+'STRING :the quick brown fox'+"<br>");
document.write('Output :'+upperCase("the quick brown fox")+"<br>");

////////////////////////////////////////12/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
12. Write a JavaScript function that accepts a string as a
parameter and find the longest word within the string.
EXAMPLE STRING : 'Web Development Tutorial'
EXPECTED OUTPUT : 'Development' */

function longestword(str){
    var array=str.match(/\w[a-z]{0,}/gi);
    var result=array[0];
    for(var l=1;l<array.length;l++){
        if(result.length<array[l].length){
            result=array[l];
        }

    }
    return result;
}
document.write("<h1>Task 12 </h1>"+"String: Web Development tutorial"+"<br>" );
document.write("The longest Word :"+longestword('web development tutorial') );


////////////////////////////////////////13/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* 13. Write a JavaScript function that accepts two arguments, a
string and a letter and the function will count the number of occurrences of the specified letter within the string.
Sample arguments : 'JSResourceS.com', 'o' */

function charcount(str,letter){
    var lettercount=0;
    for(var t=0;t<str.length;t++){
        if(str.charAt(t)===letter){
          lettercount +=1;   }
    }
    return lettercount;
}
document.write("<h1>Task 13</h1>"+"String: JsresourceS.com"+"<br>" );
document.write("'o' occur"+ charcount("JSresourceS.com","o")+" "+'items within the strings');


////////////////////////////////////////14/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*



14. The Geometrizer
Create 2 functions that calculate properties of a circle, using
the definitions here.
Create a function called calcCircumference:
•
•
Pass the radius to the function.
Calculate the circumference based on the radius, and output
"The circumference is NN".
Create a function called calcArea:
•
•
Pass the radius to the function.
Calculate the area based on the radius, and output "The area
is NN".
Circumference of circle = 2πr
Area of circle πr 2

*/

function calcicumfernce(radius){
    var circumference=Math.PI*2*radius;
    document.write("<h1>Task 14</h1>"+"The circumfernce is"+circumference);

}
function calcarea(radius ){
    var area=Math.PI*radius*radius;
    document.write("<br>"+"Area is "+area);

}

calcicumfernce(5);
calcarea(5);








