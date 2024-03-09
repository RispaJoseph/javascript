// Math Object
var a = 25;
document.write(Math.sqrt(a) + "<br>");

var num2 = -15
document.write(Math.abs(num2) + "<br>");

document.write(Math.max(90,50,20,40,30)  + "<br>");

document.write(Math.min(90,50,20,40,30) + "<br>");


document.write(Math.pow(2,2) + "<br>");           //2 to the power of 2


var a = 5.3;
document.write(Math.floor(a) + "<br>");         // will give 5

document.write(Math.ceil(a) + "<br>");          // will give 6


document.write(Math.round(a) + "<br>");         // will give a rounded number

document.write(Math.random() + "<br>");


// Generating random number between 1 and 100

var b = Math.random()
var round = Math.round(b*100);
document.write(round);