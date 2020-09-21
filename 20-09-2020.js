alert("Sadia :Welcome To My Site!")

var a, b, c;
a = 25;
b = 20;
a = 10;
c = a + b;
document.write(c);
document.write("<br>");

//let
let x, y, z;
x = 100;
y = 8;
z = x * y;
document.write(z);
document.write("<br>");

//const
const A = 45;
const B = 45;
const C = A + B;
document.write(C);
document.write("<br>");

//Data Type
var X = "Welcome to my site";
var Y = 2020;
var Z = true;
var d = ["html", "css", "javacsript"];
var e = {
    firstname: "Sadia",
    lastname: "None"
};
document.write(X);
document.write("<br>");
document.write(typeof X);
document.write("<br>");
document.write(typeof Y);
document.write("<br>");
document.write(typeof Z);
document.write("<br>");
document.write(typeof d);
document.write("<br>");
document.write(typeof e);
document.write("<br>");

//Asignment Operator
var f = 5;
var g = 5;
f **= g;
document.write(f);
document.write("<br>");

//console
console.log(10 > 20);
console.log(10 == 20);
console.log(10 < 20);
var D, E;
D = 300;
E = 45667;
console.log(D <= E);

var F, G;
F = 10;
G = 90;
if (F < G) {
    document.write(G + "..is greater than 10");
    document.write("<br>");
}

var F = 10;
if (F > 20) {
    document.write("False")
    document.write("<br>");
} else {
    document.write("True")
    document.write("<br>");
}

//result card
var num = 95;
if (num >= 80 && num <= 100) {
    document.write("A+")
    document.write("<br>")
} else if (num < 80 && num >= 70) {
    document.write("A")
    document.write("<br>")
} else if (num < 70 && num >= 60) {
    document.write("A-")
    document.write("<br>")
} else if (num < 60 && num >= 50) {
    document.write("B")
    document.write("<br>")
} else if (num < 50 && num >= 33) {
    document.write("Anyhow pass")
    document.write("<br>")
} else if (num < 33) {
    document.write("Fail")
    document.write("<br>")
} else {
    document.write("Wrong Valid")
    document.write("<br>")
}

//Swith
var day = 1;
switch (day) {
    case 1:
        document.write("today is Saturday")
        document.write("<br>")

        break;
    case 2:
        document.write("today is Sunday")
        document.write("<br>")
        break;
    case 3:
        document.write("today is Monday")
        document.write("<br>")
        break;
    case 4:
        document.write("today is Tuesday")
        document.write("<br>")
        break;
    case 5:
        document.write("today is Wednesday")
        document.write("<br>")
        break;
    case 6:
        document.write("today is Thursday")
        document.write("<br>")
        break;
    case 7:
        document.write("today is Fryday")
        document.write("<br>")
        break;
    default:
        document.write("Wrong Valid")
        document.write("<br>")
        break;
}

var age = 16;
switch (true) {
    case (age > 10 && age <= 16):
        document.write("You are too Young")
        document.write("<br>")
        break;
    case (age > 16 && age <= 20):
        document.write("You are Young")
        document.write("<br>")
        break;
    case (age > 20):
        document.write("You are eligible")
        document.write("<br>")
        break;
    default:
        document.write("You are not eligible")
        document.write("<br>")
        break;
}

var h=10;
var i=20;
if (h<i) {
    alert("i is graeter")
    document.write("<br>")
}else{
    alert("h is graeter")
    document.write("<br>")
}

var num=prompt("What is your obtained number?");
if (num >= 80 && num <= 100) {
    document.write("A+")
    document.write("<br>")
} else if (num < 80 && num >= 70) {
    document.write("A")
    document.write("<br>")
} else if (num < 70 && num >= 60) {
    document.write("A-")
    document.write("<br>")
} else if (num < 60 && num >= 50) {
    document.write("B")
    document.write("<br>")
} else if (num < 50 && num >= 33) {
    document.write("Anyhow pass")
    document.write("<br>")
} else if (num < 33) {
    document.write("Fail")
    document.write("<br>")
} else {
    document.write("Wrong Valid")
    document.write("<br>")
}

//Function
 function hello(){
    document.write("Good Morning! ");
    document.write("<br>");
}
hello();
hello();
hello();
hello();
hello();
hello();
hello();
hello();


 function sum(j,k) {
    document.write(j*k);
    document.write("<br>");
 }
sum(5,8);
sum(9,8);
sum(5,98);
sum(8,45);
sum(3,90);

//Global variable
var l=10;
 function bar() {
    document.write(l);
    document.write("<br>");
 }
bar();
document.write(l);
document.write("<br>");

//local variable
 function rab() {
     var K=20;
    document.write(K);
    document.write("<br>");
 }
rab();
document.write(K);
document.write("<br>");

//button
 function wel() {
    document.write("Hello Everyone");
    document.write("<br>");
 }

