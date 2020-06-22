////////////////////////1/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
1. Write a program that takes two user inputs for first and
last name using prompt and merge them in a new variable
titled fullName. Greet the user using his full name.

*/
var firstname =prompt("enter first name");
var lastname=prompt("enter last name");
var Fullname=firstname+lastname;
alert(Fullname+ "Welcome Here");


////////////////////////2////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
2. Write a program to take a user input about his favorite
mobile phone model. Find and display the length of user
input in your browser

*/


var text='My fravourite cell is samasung';
var length= text.length;
document.write("<br>"+text+"and the length of text is "+length+"<br>");

////////////////////////3/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
3. Write a program to find the index of letter “n” in the word
“Pakistani” and display the result in your browser .

*/

var chr1="Pakistan";
var ind1=chr1.indexOf("n");
document.write("string is :"+chr1+"</br>"+"And index of n is"+ind1+"</br>");

////////////////////////4/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
. Write a program to find the last index of letter “l” in the
word “Hello World” and display the result in your browser .

*/
var chr2="Hello World";
var ind2=chr2.lastIndexOf("l");
document.write("string is :"+chr2+"</br>"+"And index of l is"+ind2+"</br>");

////////////////////////5/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
5. Write a program to find the character at 3 rd index in the
word “Pakistani” and display the result in your browser .

*/
var chr3="Pakistan";
var ind3=chr3.charAt(3);
document.write("string is :"+chr3+"</br>"+"And Charcter at index 3 is"+ind3+"</br>");


////////////////////////7/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* 7. Write a program to replace the “Hyder” to “Islam” in the
word “Hyderabad” and display the result in your browser.*/

var city="Hyderabad";
var modify1=city.replace('hyder',"Islam");
document.write("City :"+city+"</br>"+"After Replacement is"+modify1+"</br>");


////////////////////////8/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
8. Write a program to replace all occurrences of “and” in the
string with “&” and display the result in your browser.
var message = “Ali and Sami are best friends. They play cricket and
football together.”; */


var message = "Ali and Sami are best friends. They play cricket and football together" ;
document.write("Before Repalcement"+message+"</br>");

var modify2=message.replace("and","&");
document.write("After Rplacement"+ message +"</br>");



////////////////////////9/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* 9. Write a program that converts a string “472” to a number
472. Display the values & types in your browser. */


var str1="422";
var type1=typeof(str1);
var num1=Number(str1);
var type2=typeof(num1);
document.write("</br>"+"Value"+str1+"Type of"+type1+"</br>"+"value"+num1+"</br>"+"Type is "+type2);



////////////////////////10/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*Write a program that takes user input. Convert and
show the input in capital letters. */

var chr4="Peanut";
var upper=chr4.toUpperCase();
document.write(chr4+"</br>"+"After Using Uppercase "+upper+"</br>");


////////////////////////11/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
11.
Write a program that takes user input. Convert and
show the input in title c

*/


var inp=prompt("Enter Input To Capitalize");
var firchr=inp.slice(0,1);
firchr.toUpperCase();
var lstchr=inp.slice(1,inp.length-1);
var capitalize=firchr+lstchr;
document.write("User Input :"+inp+"</br>"+"Ttle Case"+capitalize+"</br>");

//////////////////////////////////Remove Dot///////////////////////////////////////////////////
/*var numer=35.36;
var chng=numer.splice(2,1);
document.write("Number :"+numer+"</br>"+"Result"+chng+"</br>");*/

////////6,13//////////////////////////Valid username///////////////////////////////////////////////////
/*var usrrname=prompt("Enter Username");
*/




////////////////////////13/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*14. You have an array
A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
Write a program to enable “search by user input” in an
array. After searching, prompt the user whether the given
item is found in the list or not.
Note: Perform case insensitive search. Whether the user
enters cookie, Cookie, COOKIE or coOkIE, program
should inform about its availability. Example: */



var A = ["cake", "apple pie", "cookie", "chips", "patties"] ;
var search= prompt("Enter item to check it is available or not");
var small=search.toLowerCase();
  if(small===A) {
   alert("this item is availabe");

  }
 
else {
    alert("Sorry"+search+ "is not availabe");
}



////////////////////////15/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
15. Write a program to take password as an input from
user. The password must qualify these requirements:
a. It should contain alphabets and numbers
b. It should not start with a number
c. It must at least 6 characters long
If the password does not meet above requirements,
prompt the user to enter a valid password.
For character codes of a-z, A-Z & 0-9, refer to ASCII
table at the end of this document. */

var pssword=prompt("enter Pssword name");
if(pssword.length<=6){
  if(pssword.slice(0,1)<String.fromCharCode(65)){
    alert("It contain number in first character so its invalid");
  }
  else{
    alert("your password is valid");
  }

}
else{
  alert("Your password length is grater than 6");
}

////////////////////////////////// 16/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////

/*
16. Write a program to convert the following string to an
array using string split method.
var university = “University of Karachi”;
Display the elements of array in your browser.
*/
var uni="University Of Karachi";
var arr= uni.slice();
for(var j=0 ;j<arr.length;j++){
  document.write(arr[j]+"<br>");
}

////////////////////////18/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
18. You have a string “The quick brown fox jumps over the
lazy dog”. Write a program to count number of
occurrences of word “the” in given string.*/
var fox="The quick brown fox jumps over the lazy dog";
var count=0;
for (var k=0; k<fox.length;k++){
  if(fox.toLowerCase().slice(k,k+3)==='the'){
    count++;
  }
}
document.write("the accurance of word the is"+count);