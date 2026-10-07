// var arr=["sai","priya","ramya","ram","navi"];
// console.log("before" +arr);
// arr.pop();
// console.log("after" +arr)
// var arr=["sai","priya","ramya","ram","navi"];
// console.log("before"+arr);
// arr.push("hema");
// console.log("after"+arr);
// var arr=["sai","priya","ramya","ram","navi"];
// console.log("before"+arr);
//  delete arr("3");
//   console.log("after"+arr);
// var arr=["sai","priya","ramya","ram","navi"];
// delete arr[3];
// console.log(arr);
//splice:to remove element at certain postion and also to insert new elemnent
// var arr=["sri","sai","surya","priya","bhuvi"];
// console.log("before"+arr);
// arr.splice(2, 0,"swathi");//we can insert element without delete the elements at certain position
// console.log("after"+arr);
//slice:
// var arr=["sai","priya","ramya","ram","navi", "surya","priya","bhuvi" ];
// console.log("before"+arr);
// var house=arr.slice(4,7);
// console.log("after"+house);

// var arr=["surya","priya","bhuvi"];
// console.log("before"+arr);
// var house=arr.sort();
// console.log("after"+arr);
//  var arr=[12,4,30,25,46,13,5,9,2];
//  console.log("before"+arr);
//  var arr=arr.sort();
//  console.log("after"+arr)
//Arrow funtions
// let multiply = (a, b) => {
//     return a * b;
// }// we didn't function calling
//   let square = (num) => {
//     return num*num;
// }
// let  result=square(4);
// console.log(result);
// let checkNumber = (num) => {
//     if (num>0) {
//         return "positive";
//     }
//     else if (num<0) {
//         return"negative";
//     }
//     else {
//         return"zero";
//     }
// }
// let result=checkNumber(-10);
// console.log(result);
// let findGreater = (a, b) => {
//     if (a>b) {
//         return "First number is greater";
//     }
//     else {
//         return "Second number is greater";
//     }
// }
// let result=findGreater(25,15);
// console.log(result);
// array methods
// var arr = [12, 5, 24, 56, 8];
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }
// var arr=[13,12,5,60,35,24,70,22];
// for(let i=0;i< arr.length;i++){
//     if(arr[i]%2==0){
//         console.log( arr[i]+" is even");
//     }
//     else{
//         console.log( arr[i]+" is odd");
//     }
// }
// var arr=[13,12,5,60,35,24,70,22];
// for(let a of arr){
//      console.log(a%2==0?a+"is even":a +"is odd");
//  }
// var arr=[13,12,5,60,35,24,70,22];
// var brr;
// brr=arr.reduce((acc,a)=>acc+a);
// console.log("org" +arr);
// console.log("upd" +brr);
//array methods
// var arr=["sai","priya","jyo","ramya","hema"];
// arr.push("abi");//add elememt at the end of array
//console.log(arr.pop());//remove element at the end of array
//arr.unshift("10");
// arr.shift("sai");
// console.log(arr);
// console.log(arr.splice(2,2,"drf","rum"));
//console.log(arr);
//start,no of elements to delete, add new elements.
//console.log(typeof arr);//object
//  var brr=arr.slice(4);
// console.log(brr);
// console.log("befor",arr);
//  arr.pop();
// console.log("after"+ arr);//after+to.string()  array is converted into string
//onsole.log(arr.sort());
//var arr=[13,4,5,1,12];
//console.log(arr.sort((a,b)=>a-b));
//console.log(arr.sort());//in this case dictionary order follows
// console.log(arr.join(""));//1345112
// console.log(arr.join(" "));//13 4 5 1 12
// console.log(arr.join(" ,"));//13, 4, 5 ,1, 12
//for each
//var arr=[12,5,7,20,25,46,32,21];
// arr.forEach(multiplywith2);
// function multiplywith2(a){
//     console.log(a*2);
// }
//  arr.forEach(function(a){
//     console.log(a*2);
// })
//    let number=[10,20,30,40,50];
//    number.forEach((num)=>{
//         console.log(num);
//    })
// let number=[10,20,30,40,50];
// number.forEach((num)=>{
//     if(num>10){
//         console.log(num);
//     }
// })
// let numbers = [4, 7, 10, 13, 18, 21];
// numbers.forEach((num)=>{
//     if(num%2==0){
//      console.log( num+" is even");
//     }
//     else{
//         console.log(num+"is odd")
//     }
// })
// var arr=[12,4,9,5,14];
// arr.forEach(function(a,ind){
// console.log(ind+":"+a*2);//a can access the value ind can access the postion of ondex
// });//0:1 1:2 2:3;
//     console.log(a*2);
// });
// arr.forEach((a)=>arr=a*5);
// console.log("afer",arr); 
//map
