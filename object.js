// var student={
//     first:"sai",
//     last:"priya",
//     class:"9"
// }
// console.log(student);
// var student={
//     first:"sai",
//     last:"priya",
// // }
// for (let k in student){
//     //console.log(student[k]);
//     console.log(k+":"+ student[k]);
// }
// var student=new Object();
// student.Name="sai",
// student.age=21,
// student.address="hyd"
// console.log(student.Name+""+student.age+"");
// console.log(student);
//document.write(student);//browser will not pass value of objects only in console it will allow
// var student={
//     first:"sai",
//     last:"priya",
//     address:"hyd"
//  }
//  for (let k in student)
//     document.write(k+":"+student[k]+"<br>");
// var student={
//     first:"jyothi",
//     name:"D",
//     age:19,
//     fullName:function(){return this.first+this.name}
// }
// console.log(student.fullName());
// var student={
//     first:"sai",
//     last:"priya",
//     address:"hyd"
//  }
//  var student2=student;
//  console.log(student2);
// var student={
//     first:"sai",
//     last:"priya",
//     address:"hyd"
//  }
//  var student2=student;
//  student.class="java";
//  console.log(student2);
//  console.log(student);
// var student2=structuredClone(student2);
// student. last="ram"
// console.log(student2.last);
// console.log(student.last);
// console.log(student2);
// console.log(student);
//function call 
// var student={
//     first:"sai",
//     last:"priya",
//     class:"hyd",
//     fullName:function(city,age,num){
//         return this.first+""+this.last+"from"+city+"hello"+age+"fdehfg"+num;
//     }
//  }
//  var student2={
//     first:"sai",
//     last:"priya",
//     class:"vizag",
//  }
//  console.log(student.fullName("rjy",23,"two"));
// console.log(student.fullName.apply(student2,["vjy ",21,"one"]));
//function bind
// var student = {
//     first: "sai",
//     last: "priya",
//     class: "hyd",
//     FullName: function (city, age, num) {
//         return this.first + " " + this.last + " from " + city + "   " + age + "  " + num
//     }
// }
// var student2 = {
//     first: "Ram",
//     last: "ch",
//     class: "java",
// }
// var result=student.FullName.bind(student2,"vizag",23,789)
// console.log(result());
// console.log(student.FullName.bind(student2, "vizag", 23, 789))
//functional constructor//on fixed structure it does not using functional constructor
// function mobile(company,model,price){
//     this.company=company;
//     this.mobile=model;
//     this.price=price;
// }
//  var m1=new mobile("oneplus","11R","45000");
// var m2=new mobile("opp0","27pro","25000");
// console.log(m1,m2);
// var mobilelist=[m1,m2];
// for (let a of mobilelist){
//     for(let k in a){
//     console.log(k+":"+a[k]);
//     }
// }
// let mob=mobilelist.filter((a)=>a.price<=70000);
//  console.log(mob);//using filter
// for(let a of mobilelist){
//     if(a.price<=50000){
//         for(let k in a){
//             console.log(k+":"+a[k]);
//         }
//     }
// }
//guess the output
// var users=[
//     {name:"John",age:17},
//     {name:"jack",age:18},
//     {name:"jyo",age:20},
// ]
// var list=users.map((u)=>(
//     u.name,
//     u.age++
// ))
// console.log("original");
// console.log(users);
// console.log("update");
//  console.log(list);
// var users=[
//     {name:"John",age:17},
//     {name:"jack",age:18},
//     {name:"jyo",age:20},
// ]
// var list=users.filter((u)=>u.age>18).map(u=>u.name)//in this case filter chech the condition its satisfy then  it move to map 
// console.log("original",users);
// console.log(users);
// console.log("update",list);
//  console.log(list);//update ['jyo']
var users=[
    {name:"John",age:17},
    {name:"jack",age:18},
    {name:"jyo",age:20},
]
// var list=users.filter((u)=>u.age>18).map(u=>({//u.age
//     name:u.name,
//     age:u.age
// }));
// console.log("original",users);
// console.log("updates",list);//updates [ { name: 'jyo', age: 20 } ]
//  var list=users.map((u)=>({
//     name:u.name,
//      age:u.age++
    //age:++u.age// in this case post inner operation is perform

// }));
// console.log("original",users);
// console.log("updated",list)
// var list=users.map((U)=>{
//     return{
//         name:U.name,
//         age:U.age++
//     }
// })
// console.log("original",users);
// console.log("updated",list);
var list=users.map((u)=>{
    return{
        name:u.name,
        age:u.age++,
        isAdult:u.age>18
    }
});
console.log(list)