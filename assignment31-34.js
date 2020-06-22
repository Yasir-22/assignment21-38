/////////////////////////////////////////////////////////////1//////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* 
1. Write a program that displays current date and time in
your browser.
*/

var date1=new Date();
document.write("<h1>Task 1 </h1>"+"<br>"+date1);



/////////////////////////////////////////////////////////////2//////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
2. Write a program that alerts the current month in words.
For example December. 
*/

var month=["januarray","febuarary","march","april","may","june","july","august","september","october","november","december"];
var mon=date1.getMonth();
var currentmonth=month[mon];
document.write("<h1>Task 2</h1>"+"<br>"+"Current Month is "+currentmonth);


/////////////////////////////////////////////////////////////3//////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Write a program that alerts the first 3 letters of the current
day, for example if today is Sunday then alert will show
Sun
*/
var  days=["sun","mond","tues","wed","thu","fri","sat"];
var today=date1.getDay();
var currentday=days[today];
document.write("<h1>Task 3</h1>"+"<br>"+"Current day is "+currentday);

/////////////////////////////////////////////////////////////4//////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
4. Write a program that displays a message “It’s Fun day” if
its Saturday or Sunday today.
*/

var  days=["sun","mon","tue","wed","thu","fri","sat"];
var today=date1.getDay();
var currentday=days[today];

if(currentday==="sun" || currentday==="sat")
{document.write("<h1>Task 3</h1>"+"<br>"+"Its funday ");
}
else {
    document.write("<h1>Task 5 </h1>"+"<br>"+"Its Month Start 15 Days");

}
/////////////////////////////////////////////////////////////5//////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
5. Write a program that shows the message “First fifteen
days of the month” if the date is less than 16 th of the month
else shows “Last days of the month”. */


var dat=date1.getDate();

if(dat<=15 ){
    document.write("its month starting 15 Days");
}
else {
    document.write("<h1>Task 5 </h1>"+"<br>"+"Its month last 15 Days");
   
}

/////////////////////////////////////////////////////////////6//////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
6. Write a program that determines the minutes since
midnight, Jan. 1, 1970 and assigns it to a variable that
hasn't been declared beforehand. Use any variable you like
to represent the Date objec
*/

var time=date1.getTime();
 var diff1=(time/(1000*60*60));
 document.write("<h1>Task 6</h1>"+"</br>"+"Current Date"+" "+date1+"</br>");
 document.write("escllaped milisecond since Jan 1,1970 :"+time+"</br>");
 document.write("escllaped minutes since Jan 1,1970 :"+diff1);


/////////////////////////////////////////////////////////////7//////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* Write a program that tests whether it's before noon and
alert “Its AM” else “its PM”. */

var hor=date1.getHours();
if(hor===0 || hor<=12){
    document.write("<h1>Task 7</h1>"+"</br>"+"It is Am"+" "+"</br>");
}
else{
    document.write("<h1>Task 7</h1>"+"</br>"+"It is PM"+" "+"</br>");

}
/////////////////////////////////////////////////////////////8//////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
8. Write a program that creates a Date object for the last day
of the last month of 2020 and assigns it to variable named
laterDate.
*/

var lastdate=new Date("31 dec,2020");
document.write("<h1>Task 8</h1>"+"</br>"+"Later Date"+lastdate+" "+"</br>");

/////////////////////////////////////////////////////////////9//////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*

9. Create a date object of the starting date of this Ramadan
and alert the number of days past since 1 st Ramadan?
Note: 1 st Ramadan was on Junel 18, 2015;
*/

var tdy=new Date();
var olddate=new Date("June 18,2015");
var t1=tdy.getTime();
var t2=olddate.getTime();
var diff4=t1-t2;
var mstdy=(diff4/(1000*60*60*24));
var near=Math.floor(mstdy);
document.write("<h1>Task 9</h1>"+"</br>"+near+" "+"the number of days past since 1 st Ramadan jun 18,2015 til now"+" "+"</br>");

/////////////////////////////////////////////////////////////10//////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
10. Write a program that displays in your browser the
seconds that elapsed between the reference date and the
beginning of 2015.
*/
var refdate=new Date("Jan 1,2015");
var tdy=new Date();
var time1=refdate.getTime();
var time2=tdy.getTime();
var diff5=time2-time1;
var chg=Math.floor(diff5);
document.write("<h1>Task 10</h1>"+"</br>"+chg+" "+"is the number of Second from jun 1,2015 til now"+" "+"</br>");



/////////////////////////////////////////////////////////////11//////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
11. Create a Date object for the current date and time.
Extract the hours, reset the date object an hour ahead and
finally display the date object in your browser.
*/

var date5=new Date();
document.write("<h1>Task 11</h1>"+date5+"</br>");
var sethou=date5.setHours(0);
document.write("1 Hour Ago Its was"+sethou+"</br>");


/////////////////////////////////////////////////////////////12//////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
12. Write a program that creates a date object and show the
date in an alert box that is reset to 100 years back?
*/
var d=new Date();
document.write("<h1>Task 12</h1>"+d+"</br>");
var yaer=d.setFullYear(1920);
document.write("100 Years Back it was "+yaer+"</br>");


/////////////////////////////////////////////////////////////13//////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Write a program to ask the user about his age. Calculate
and show his birth year in your browser.
*/

var cal=new Date();
var birthyear=+prompt("enter your birth year");
var yeir=cal.getFullYear();
var fig=yeir-birthyear;
document.write("<h1>Task 13 </h1>"+"your age is "+" "+fig);
document.write("<br>"+"Your Birthyear is "+" "+birthyear);


/////////////////////////////////////////////////////////////14//////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
14. Write a program to generate your K-Electric bill in your
browser. All the amounts should be rounded off to 2
decimal places. Display the following fields:
a. Customer Name
b. Current Month
c. Number of units
d. Charges per unit
e. Net Amount Payable (within Due Date)
f. Late Payment Surcharge
g. Gross Amount Payable (after Due Date)
Where,
Net Amount Payable (within Due Date) = Number of units * Charges per unit
& Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge
*/
var name="Yasir Moiz";
var month1="June";
var units=350;
var unitcharges=16;
var amountpay=350*16;
var latecharges=350;
var duedatecharges=(350*16)+350;
document.write("<h1>K-Electrice MOnthly Bill</h1>"+"<br>"+"Customer Name"+" "+name+"<br>"+"Current month"+" "+month1+"<br>"+"Number of untis"+" "+units+"</br>"+"Untis Charges"+" "+unitcharges+"</br>"+"Amount payable"+" "+amountpay+"</br>"+"Late payment"+" "+300+"</br>"+"Amount After due date"+" "+duedatecharges+"</br>")