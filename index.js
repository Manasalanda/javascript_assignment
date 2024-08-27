


// declare a variable with var keyword
var firstName;
console.log(firstName,"<br>");
var firstName="manasa reddy";
console.log(firstName,"<br>");

var age=20;
document.write("my name is "+firstName+ "and i am "+age+ "years old");

// declare a variable with let keyword
let a=345;
console.log(a);

let cname="Xceediq";
console.log(cname);

//declare a variable with const
const value=3.14;
console.log(value);

//variable scope


//variable name conventions
let jonas_matilda="JM";
let $function=27;
console.log(jonas_matilda);
console.log($function);

let myFirstJob="coder";
let myCurrentJob="Teacher";
let job1="programmer";
let job2="teacher";

//operators

 //Arithmetic operators
let x=20;
let y=40;
console.log("Addition:"+(x+y) + "subtraction:"+(x-y) +"multiplication:"+(x*y) +"division:" +(x/y));

//Logical operators
var m=11;
var n=22;
var o=11;
console.log(m<n && n>o);
console.log(m<n ||n<o);
console.log(!(m>n));

//comparsion operators
var a=100;
var b=200;
console.log(a>b);
console.log(a<b);
console.log(a==b);
console.log(a!=b);
console.log(a>=b);
console.log(a<=b);
console.log(a===b);



// data types
let javascriptisFun =true;
console.log(javascriptisFun);
console.log(typeof javascriptisFun);
let x ="welocome";
console.log(x);
console.log(typeof x);
var pin=32;,
console.log(pin);
console.log(typeof pin);
var i;
console.log(i);//undefined

//object data type
var a = {
    name:"Manasa",
    age :19,
}
console.log(a.name);

//  Type conversion and coercion

//explicit type conversion

let result;
result = Number("10");
console.log(result,"-", typeof(result));
result =String(true);
console.log(result,"-",typeof(result));

//Implicit conversion

let res;
res="3"+2;
console.log(res);
res="10"+ true;
console.log(res);

//Strings and Template Literals

let str="javascript";
console.log(str[2]);
let s1="hello";
let s2="vizag";
let s3=s1.concat(s2);
console.log(s3);
console.log(str.slice(2,5));
console.log(str.length);

//Decision making Statements 

// if statements
var num=6;
if(num>0)
{
    console.log("The number is positive");

}
// if-else statements
let age=28;
if (age>18)
{
    console.log("eligible for vote");
}
else{
    console.log("not eligible for vote");
}
//elseif statements
let n=-30;
if(n>0){
    console.log("Number is positive");
}
elseif(n<0){
    console.log("Number is Negative");
}
else{
    console.log("zero");
}
//switch statement
let day=4;
let dayName;
switch(day)
{
    case 1:
        dayName="Monday";
    case 2:
        dayName="tuesday";
    case 3:
        dayName="wednesday";
    case 4:
        dayName="thrusday";
    case 5:
        dayName="Friday";
    case 6:
        dayName="saturday";
    case 7:
        dayName="Sunday";
    default:
       dayName= "invalid";
}
console.log(dayName); 


//use strict
"use strict";
let z=90;
console.log(z);
y=100;//error

//Functions
function student()
{
    console.log("this is sample function");
}
student();

function add(a,b)
{
    console.log('value of a is ${a} and value of b is ${b}');

}
add(20,30);

//default arguments
 function defaultf(x=100,y=200,z)
 {
    console.log('a is ${a} and b is ${b} and ${c}');
 }
 defaultf(90);
 defaultf(20,30,40);
 defaultf(55,66);
 defaultf();


//return Statements

function sum(a,b){
    return a+b;
}
var res=sum(30,50);
console.log(res);
console.log(sum(30,40));

function chaining(a,b)
{
    return a+b;

}
var result=chaining(10,20);
function chaining1(a,b)
{
    console.log(a+b,a-b);

}
chaining1(result,50);