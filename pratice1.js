// var student={
//     first:"jyothi",
//     last:"sri",
//     class:"5"
// }
// console.log(student.first);
// console.log(student);
// for(let k in student)
// {
//     console.log(k+" : "+student[k]);
// }
// a=[1,2,34,5,6]
// for(let k in a)
// {
//     console.log(k);
// }
//promise:is an object which  is used to handle asynchronous operation
// var age=17;
// var ageCheck=new Promise((res,rej)=>{
//     if(age>18)
//         res("eligible to vote");
//    else
//     rej("not eligible to vote");
// })
// ageCheck
// .then((msg)=>console.log("then:"+msg))
// .catch((err)=>console.log("catch:"+err))
// .finally(()=>console.log("Thankyou"))
// console.log("A");
// var pro=new Promise((res,rej)=>{
//     console.log("B");
//     res();
// })
// pro.then(()=>{
//     console.log("c");
// })
// console.log("D");
// console.log("A")
// Promise.resolve().then(()=>{//when you have use reject the output will be A,D
//     console.log("C")
// })
// console.log("D")//A,D,C
// console.log("A");
// setTimeout(()=>{
//     console.log("B")
// },0)
// Promise.resolve().then(()=>{//it gives more priority because it goes to event loop micro 
//     console.log("C");
// })
// console.log("D")
// console.log("A")
// setTimeout(()=>{
//     console.log("B")
// })
// var pro=new Promise((res,rej)=>{
//     setTimeout(()=>{
//         console.log("c");
//         res()
//     })
// })
// pro.then(()=>console.log("hello"))
//console.log("D");
//promise chain
// Promise.resolve(10).then((value)=>value*2).then((a)=>a+5).then((value)=>console.log((value))).catch((value)=>comsole.log("value"))
//promise .all
// var p1=Promise.resolve("st1")
// var p2=Promise.resolve("st2")
// var p3=Promise.resolve("st3")
// Promise.all([p1,p2,p3]).then((msg)=>console.log((msg))).catch((err)=>console.log((err)))
//call back function
// function pincheck(){
//     setTimeout(()=>{
//         console.log("pin chechking");
//     },3000)
// }
// function withdraw(){
//     console.log("amount withdraw");
// }
// pincheck();
// withdraw();//here output will be first withdraw and then pin checking because withdraw is synchronous and pincheck is asynchronous so to avoid this we use callback function
// function pincheck(pin, ab) {
//         console.log("pinchecking");
//         pin(ab);
// }
// function withdraw(xy) {
//     setTimeout(() => {
//         console.log("amount withdraw");
//         xy();
//     }, 2000)
// }
// // pincheck(withdraw);
// function closingmsg() {
//     console.log("thank you");
// }
// pincheck(withdraw, closingmsg);
