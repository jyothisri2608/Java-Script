// Array De-structring
// var arr=[12,15,5,76,30,40];
// var brr=[5,45,25,84,13,14];
// var crr=[...arr,...brr]
// //var crr=[arr,brr];
// console.log(crr[2]);//5
// console.log(crr[0][0]);//undefined
// console.log(crr);
//spread operator-one compleax array into simple paths
// function add(a,b){
//     return a+b;
// }
// console.log(add(2,5,4,3,6,7));
//  var arr=["Apple  in fruit1"];
// var brr=["Banana in fruit2"];
// var crr=["Mango  in fruit3"];
// var drr=[...arr,...brr,...crr];
// console.log(drr);
// let numbers1 = [10, 20, 30];
// let numbers2 = [40, 50, 60];
// let numbers3=[...numbers1,...numbers2];
// console.log(numbers3);
// let numbers = [10, 20, 30, 40, 50];
// let numbers1=[...numbers];
// console.log(numbers1[0]);
// console.log(numbers1[1]);
// console.log(numbers1[2]);
// Rest operator
// function add (...all){
//     return all.reduce((acc,j)=>acc+j);
// }
//  console.log(add(2,5,4,3,6,7));
//string methods
// var user="drf";
// var user='drf';
// var user=`drf`;
//console.log(user);
// var inst="Dr Reddys Foundation";
// inst=inst.toLowerCase();
// lu=null
// lu+=inst.toLowerCase();
// console.log(lu);
// var inst="Drf Reddys foundation";
// inst=inst.toUpperCase();
// up=null;
// up+=inst.toUpperCase();
// console.log(up);
// console.log(inst);
//slice.,substring,substr
// var inst="DrReddysFoundation";
// var sub=inst.slice(5);
// console.log(sub);
// var sub1=inst.substring(6);
// console.log(sub1);
// var sub=inst.substr(2,6);
// console.log(sub);
//using two methods
// var sub=inst.slice(2,5);
// var sub1=inst.substr(2,8);
// console.log(sub&&sub1);
// var inst="DrReddysFoundation";
// var sub=inst.startsWith("D");
//  console.log(sub);
// var sub=inst.endsWith("n");
// console.log(sub);
//search
// var inst="DrReddysFoundation";
// var sub=inst.search(/y/);
// var sub1=inst.indexOf(/Reddy/)
// console.log(sub);
// console.log(sub1);
// var student={
//     firstName:"Bhaskar",
//     lastName:"ch",
//     class:"fsd",
// }
// for(let k in student){
//     console.log(student[k]);

// }
//ar inst="Dr Reddys Foundation";
// var sub=inst.indexOf("");//0
// var sub1=inst.lastIndexOf("");//20
// var sub=inst.indexOf(/Redddy/);//-1
// var sub2=inst.search(/Foundation/);//10
// console.log(sub1);
// console.log(sub);
// console.log(sub2);
// var inst="Dr Reddys Foundation";
// var sub=inst.split("Dr");
// var sub=inst.split(" ");
// console.log(sub);
// var inst ="wow";
// var res=inst===inst.split(" ").reverse().join(" ")?"palindrome":"not palindrome";
// console.log(`${inst} is ${res}`);
// var inst="wow";
// var sub=inst.split("").reverse().join("");
// if(inst===sub){
//     console.log(inst+"is palindrome");
// }
// else{
//     console.log(inst+"not a palindrome");
// }
// var inst="welcome";
// var sub=inst.concat("to DRF");
// console.log(sub);
// var inst="Dr.Reddy Foundation ,which is best Foundation";
// var sub=inst.replace("Foundation","organisation");
// var sub=inst.replaceAll("Foundation","organisation");
// console.log(sub);
// var inst="Dr.Reddy Foundation";
// var res=inst.repeat(3);
// console.log(res);
// var inst="Dr.Reddy Foundation ,which is best Foundation";
// for (let i=0;i<=100;i++){
//     console.log(i.toString().padStart(2,"0"));
// }

// var name=["jyothi","hema","swetha","bharathi"];
// for (let i=0;i<name.length;i++){
//    console.log(name[i].padStart(7," pass"));
// }
// var res="  jyothi     ";
//  console.log(res.length);//length will count space also
// var str=res.trim();
// console.log(str.length);
// var inst="Dr.Reddy Foundation ,which is best Foundation";
// var sub=inst.includes("world");
// console.log(sub);
// var users=[
//     {name:"jyo" ,age:17},
//     {name:"hema" ,age:19},
//    {name:"swetha",age:20 }
//]

// var list=users.map((u)=>{
//     return {
//     name:u.name,
//      age:++u.age,
//     }
// })

// var list=users.sort((a,b)=>a.name.localeCompare(b.name))

// console.log(list)