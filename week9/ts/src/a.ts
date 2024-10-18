// const x: number =1;
// console.log(x);

//const b:any =1;

// function printHelloWorld(x :String){
//     console.log("Hello" + x)
// }

// printHelloWorld("Nikhil")

//type inference
// function sum(a:number,b:number){
//     return a+b;
// }

//This is Same as

// function sum(a:number,b:number):number{
//     return a+b;
// }

// const c = sum(1,2);
// console.log(c);


// function isLegal(age:number):boolean{
//     return age>18;
// }

// const val = (isLegal(19))?"Yes he is legal":"No he is minor";

// console.log(val);


// -----void return type with no args
// function helper(fn :()=>void){
//     setTimeout(fn,3000);
// }

// helper(function(){
//     console.log("hey there");
// })


// -----Number return type with no args
// function helper(fn :()=>Number){
//     setTimeout(fn,3000);
// }

// helper(function(){
//     console.log("hey there");
// return 1;
// })


// interface User {
//     name:string,
//     age:number,
//     email?:string

// }

// function helper(user:User){
//     if(user.age>18)return true;
//     return false
// }


// function helper(check : (string|number)){
//     console.log("hey")
// }

//             // OR

// type args =string |number

// function helper2(check : args){
//     console.log("hey")
// }


// type numcheck = number[]

// function helper(num : number[]){
//     console.log("ok")
// }

// helper([1,2,3])


enum Direction {
    up,
    down,
    left,
    right

}

type Directions = "up"| "down" |"left" |"right"