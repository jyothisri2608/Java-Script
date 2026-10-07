//var arr = [12, 45, 36, 9, 67, 89, 34, 12, 90, 7, 11, 52];
// console.log(Math.max(...arr)-Math.min(...arr));
//  console.log(Math.max(...arr))
//console.log(Math.min(...arr))
//average array of elements
// var arr=[12,2,7,45,67,13,89,60];
// var sum=0;
// for(i=0;i<arr.length;i++){
//     sum=sum+arr[i];
//      average=sum/arr.length;
// }
// console.log(average)
//  var average = (arr) => {
//     var sum = arr.reduce((sum, num) => sum + num, 0);
//     return sum / arr.length;
// }
// console.log(average([12, 2, 7, 45, 67, 13, 89, 60]));
//sum of even numbers from the given array
// // var arr=[12,2,7,45,67,13,89,60];
// sum=0;
// for(i=0;i<arr.length;i++){
//     if(arr[i]%2==0){
//         sum=sum+arr[i];
//     }
// }
// console.log(sum);
// var sumEven=(arr)=>{
//     return arr.filter((num)=>num%2==0).reduce((sum,num)=>sum+num);
// }
// console.log(sumEven([to count number of duplicates elements of an array]));
//var average = (arr) => {
//program 1//differencence b/w biggest and smallest
// var arr=[12,2,7,45,67,13,89,60];
// console.log(Math.max(...arr)-Math.min(...arr));
//2  program to find the average of elements in an array of numbers.
// var arr=[5,6,7,4,2,1];
// var res=arr.reduce((acc,a)=>acc+a);
// console.log(parseInt (res/arr.length));
//3 program to print sum of even numbers from given array
// var arr=[2,4,3,7,8,5,1];
// var res=arr.filter((a)=> a%2==0).reduce((acc,a)=>acc+a);
// console.log(res);
//4 program to count number of duplicates elements of an array
// var arr=[2,5,4,3,2,5,7,8,9,8,];
// console.log(arr);
// var count=0;
// for(i=0;i<arr.length;i++){
//     for(j=i+1;j<arr.length;j++){
//         if(arr[i]=arr[j]){
//             count++;
//             break;
//         }
//     }
// }
// console.log(count);
//5 program to create array of even numbers from give array
// var arr=[2,34,12,56,78,35,5,9,11];
// var res=arr.filter((a)=>a%2==0);
// console.log(res);
//6 program to print running time
/* <h1>Current Time:</h1>
    <h3 id="content"></h3>
    <script>
        function timer() {
            var d = new Date();
            document.getElementById("content").innerHTML = d.toLocaleTimeString();
        }
        setInterval(timer, 1000)
    </script> */
// 7 to print student details who got highest marks, create objects using class
// 8 program to add colors to all h1 tags when the button is clicked
/* <h1 id="content"> Hello</h1>
    <h1></h1>
    <button onclick="changestyle()">click me</button>
    <script>
        function changestyle(){
            console.log(document.getElementById("content"));
            document.getElementById("content").style.color="red";
        }
    </script> */
// // 9 program to check given number is palindrome number or not
// var num=121;
// var org=num.toString();
// var reverse=org.split("").reverse().join("");
// if(org===reverse){
//     console.log(num+"is palindrome");
// }
// else{
//     console.log(num+"is not palindrome");
// }
//10 program to check given string is palindrome or not
// var input="mom"
// var rev=input.split("").reverse().join("");
// if(input===rev){
//     console.log( input+"is palindrome");
// }
// else{
//     console.log( input+"is not palindrome");

// }
//11 program to remove duplicate elements from an array. 
//12 program to print incremental value every time when button is clicked
//  <h1 id="myh1">1</h1>
//      <button onclick="incr()">click me</button>
//     <script>
//         function incr(){
//                     document.getElementById("myh1").innerHTML++   
//           }
//             </script>
//13 to print prime numbers between 1 to 100  
// for(let num=2;num<=100;num++){
//     let isPrime=true;
//     for(let i=2;i<=Math.sqrt(num);i++){
//         if(num%i==0){
//             isPrime=false;
//             break;
//         }
//     }
//     if(isPrime==true){
//         console.log(num)
//     }
// }
//14  program to find the second largest element in an array. 
// var num=[10,2,30,50,55];
// var largest=num[0];
// var secondLargest=num[0];
// for(i=0;i<num.length;i++){
//     if(num[i]> largest){
//         secondLargest=largest;
//         largest=num[i];
//     }
//     else if(num[i]>secondLargest && num[i]!=largest){
//         secondLargest=num[i];
//     }
// }
// console.log("Largest:" ,largest)
// console.log("SecondLargest:",secondLargest);
// 15 program to check given number is strong number or not 
// var num=145;
// var dup=num;
// sum=0;
// while(num!=0){
//     rem=num%10;
//     fact=1;
//     for(let i=1;i<=rem;i++){
//         fact*i;
//     }
//     sum+=fact;
//     num=parseInt(num/10)
// }
// console.log(sum==dup ? dup+"is strong":dup+"is not strong");
// 16  program to remove odd numbers from given array 
// var arr=[2,52,12,13,17,14,16,9];
// var res=arr.filter((a)=>a%2==0);
// console.log(res); 
//17 program to count number of vowels in a string  
// var str="jyothi srI";
// console.log(str);
// var res=str.split("");
// console.log(res);
// count=0;
// for(i=0;i<=str.length;i++){
//     if(res[i]=='a'||res[i]=='e'||res[i]=='i'|| res[i]=='o'||res[i]=='u'||res[i]=='A'|| res[i]=='E'||res[i]=='O'||res[i]=='U'||res[i]=='I'){
//         count++;
//     }
// }
// console.log(count);
//18 program to print GCD of given two numbers 
/* <script>
                var a=parseInt(prompt("Enter a number"));
                var b=parseInt(prompt("Enter b number"));
                var rem;
                while(b!=0){
                    rem=a%b;
                    a=b;
                    b=rem;
                }
                document.write(a);
            </script> */
//19  program to check given number is armstrong number or not 
// var num=153;
// var dup=num ;
// sum=0;
// var len=num.toString().length;
// while(num!=0){
//      rem=num%10;
//      sum+=rem**len;
//      num=parseInt(num/10);
// }
// console.log(sum==dup?dup+"is armstrong":dup+"is not armstrong");
//20 program to second smallest number from given array 
// var arr=[12,34,56,76,11,8]
// function secondlargest(arr){
//     arr.sort((a,b)=>a-b);
//     return arr[1];
// }
// 21  program to print N digits in fibonacci series  
// var n=5;
// var a=0,b=1;
// for(i=0;i<=n;i++){
//    console.log(a);
//    c=a+b;
//    a=b 
//    b=c
// }
// 22 program to create subclasses for different types of people (e.g., Student, Teacher) inheriting from the Person class and adding additional properties and methods.  
// 23 program to apply text color for h1 which user entered in input tag and submit
/* <h1 id="myh1">Hello</h1>
            <input type="text" id="color" placeholder="Enter color">
            <button onclick="changeColor()">Submit</button>
            <script>
                function changeColor(){
                    let color=document.getElementById("color").value;
                    document.getElementById("myh1").style.color=color;
                }
            </script>  */
// 24program to print following pattern 20 18 16 14 12 10 8 6 4 2 

//25 program to print following pattern 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 
//26  program to create new array of leap years from given array 
//27  program to print follwoing pattern 5 4 3 2 1 4 3 2 1 3 2 1 2 1 1 
//28  program to store factorials of each number into new array from given array
//29  program to implement promises for even numbers, if number is even fulfil the promise and it is odd reject the promise 
//30 program to perform addition of n numbers using single function in js 