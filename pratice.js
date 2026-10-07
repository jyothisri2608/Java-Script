//var a=40;
//var b=20;
//console.log(a+b)
//var a=35;
//var b=4;
//console.log(a%b);
// hello();
// function hello(){
//     console.log("hello world");
// }
// var a="drf"
// // function hello(){
//     var b="tech"
//     console.log("hello world");
// }
// hello();
// function hello(msg){
//     console.log("hello"+msg);
// }
// hello("sai")
// function hello(ttp){
//     console.log("hello"+ttp);
// }
// hello("")//output print hello
// hello() otput print undefined
// function hello(ttp){
//     return"hello"+ttp;
// }
// //console.log(hello(""))//o/p is hello
// console.log(hello("sai"))//o/p is hello sai
// var hello;
// console.log(hello(""));
// var hello=function(msg){
//     return"hello"+msg; //output is type error:hello is nota function
// }
// var hello=function(msg){
//     return"hello"+msg;
// }
// console.log(hello("sai"));//hellosai
// var hello=(ttp)=>"hello"+ttp;
// console.log((hello("bs"))); //arrow function

//Anonymous function
// setTimeout(function(){
//     console.log("function executed")

// },  2000);
// setTimeout(function(){
//     console.log("mention")
// },2000);

//IIF
// (function(){
//     console.log("hello");
// }());
// (()=>console.log("sai"))();
//WITH CLOSUER
// function outer(){
//     var i=0;
//     function inner(){
//         return i++;
//     }
//     return inner;
// }
// var result=outer();
// console.log(result());

//Function currying
// function multiply(a) {
//     return function (b) {
//         return a * b;

//     }
// }
// var result = multiply(5)(2);
// console.log(result);
// //proper
// function mutiply(a){
//     return function(b){
//         return function(c){
//             return a*b*c;
//         }
//     }
// }
// var pievalue=multiply(3.14);
// console.log(pievalue(5));
// console.log(pievalue(4));
// variable programs:
// var uname="DRF";
// console.log(uname);
// if(true){
//  let lname="invoke"
//  console.log(lname);
// }
// console.log(uname);
// console.log(lname);
// var uname="DRF";
// console.log(uname);
// if(true){
//  let uname="invoke"
//  console.log(uname);
// }
// console.log(uname);
//   uname="DRF";
// console.log(uname);
// if (true){
//       uname="Invoket";
//     console.log(uname);
// }
// console.log(uname);
// let uname;
//Logical operators:
// var a=7;
// var b=4;
// var c=9;
// var result=a>b&&a>c;//output prints boolean value
// var result=a&&c;//output prints number
// console.log(result);

// var a="bhaskar";
// var b="saipriya";
// var c="";
// //  var result=a&&b;
// // var result=a>b&&a>c;
// // var result=a||b;
// var result=a<b||b<c;
// console.log(result);
// var a=true;
// var b=false;
//  var result=((a&&b)||a);//true
// var result=(a||(a>b&&b>a));//true

// console.log(result);
// var a=false;
// var b=true;
// var result=a||b;
// console.log(result);
// let age = 20;
// let hasId = true;

// let canEnter = age >= 18 && hasId;
// console.log(canEnter);
// var a="sai";
// var b="priya";
// var result=a||b;
// console.log(result);
// let a = true;
// let b = false;
// let c = false;
// let result = a || b && c;
// console.log(result);
// var a="Guest";
// var b="Ravi";
// var result=a||b;
// console.log(result);
//
//greater than 20 and even numbers
// var num=[5,12,16,7,9,3,20,];
// for (let i=0;i<num.length;i++){
//     if(num[i]>10&&num[i]%2==0)
// console.log(num[i]);
// }
// var  numbers=[4,12,7,18,5] ;
// for(i=0;i<numbers.length;i++){
//     if (numbers[i]<10) //if(numbers[i]>10)
//         console.log(numbers[i]);
//     }
//less than 5
// var num=[6, 15, 3, 20, 9];
// for(i=0;i<num.length;i++){
//     if(num[i]<5)
//         console.log(num[i]);
// }
//less than 10
// var num=[4, 12, 7, 18, 21, 6];
// for(i=0;i<num.length;i++){
//     if(num[i]<10)
//         console.log(num[i]);
// }
// greater than 10 and even
// var numbers = [5, 12, 8, 21, 16, 7];
// for(i=0;i<numbers.length;i++){
//     if(numbers[i]>10&&numbers[i]%2==0)
//         console.log(numbers[i]);
// }
//array+if else
//  var num=[5,12,8,20];
// for(i=0;i<num.length;i++)
// if(num[i]>10){
//     console.log("greater");
// }
// else{
//     console.log("less");
// }
// var num=[4,7,10,13,18];
// for(i=0;i<num.length;i++){
//     if(num[i]%2==0){
//         console.log("even");
//     }
//     else{
//         console.log("odd");
//     }
// }
// 
// var numbers=[12,5,18,7,20,3];
// for(i=0;i<numbers.length;i++){
//     if(numbers[i]>10){
//         console.log(  numbers[i] +" is Greater ");
//     }
//     else{
//         console.log(numbers[i]+  " is Less ");
//     }
// }
// functions 
// var a=10;
// var b=20;
// function num(a,b){
//     console.log("sum is" +(a+b));
// }
// num(a,b);
// var x = 5;
// var y = 10;

// function add(a, b) {
//     console.log(a + b);
// }

// add(x, y);
// function check(num){
//     if(num %2==0){
//         console.log(num+"is even");
//     }
//     else{
//         console.log(num+"is odd");
//     }
// }
// check(8);
// function check(a,b){
//     if(a>=10&&b>10){
//         console.log("Both ar greater");
//     }
//      else if(a>=10&&b>10){
//     console.log("a is greather than 10");
//     }
//     else if(){
//         console.log("b is greater than 10");
//      }
//      else
//    {
//     console.log("Both are lesser")
//    } 
// }
// check(15,25);
// function check(a,b){
//     if(a>0&&b>0){
//         console.log(" both are postive");
//     }
//     else if(a<0&&b<0){
//         console.log(" both are negative");
//     }
//     else{
//         console.log("mixed");
//     }
// }
// check(10,-5)
//function with return type
// function calculate(a,b){
//     if(a>b){
        
//         console.log("a is bigger");
//     }
//     else{
        
//         console.log("b is bigger");
//     }
// }
// calculate(15,25)
// function square(a){
//     return a*a;
// }
// var result = square(6);
// console.log(result);
// function check(num){
//     if(num%2==0){
//         return "even";
//     }
//     else{
//         return "odd";
//     }
// }
// var result=check(17);
// console.log(result);
// function findsmallest(a,b){
//     if(b>a){
//         return a;
//     }
//     else{
//         return b;
//     }
// }
// var result=findsmallest(18,7);
// console.log(result);
// function check(a,b){
//     if(a>0&&b>0){
//         return"both are positive";
//     }
//     else if(a<0&&b<0){
//         return"both are negative";
//     }
//     else{
//         return "mixed";
//     }
// }
// var result=check(-5,10);
// console.log(result);
// 
// var arr=[23,43,13,245,67,89];
// console.log(Math.random() );
// console.log(Math.round(Math.sin(90)))
var otp="";
for(i=0;i<=4;i++){
    otp+=Math.round(Math.random()*9)
}
console.log(otp);
Math.round(Math.random()*9)