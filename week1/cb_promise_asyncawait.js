const fs =require('fs') 

    // this is callback method

//  function asynchronous (cb){
//     fs.readFile("week1/a.txt","utf-8",function (err,data){
//         if (err) {
//             console.error("Error reading file:", err);
//             cb(undefined); // Pass undefined explicitly if there's an error
//             return;
//         }
//         cb(data);
//     })
//  }

 function after(data){
    console.log(data)
 }

//  asynchronous(after);

// in cb below wala upr wale ko deta hai fn and bolta hai kam hone pr isko chla dena but promise wale me ulta hai upr wala bolta hai ke bhai me kam hone pr btaduga and tumhe deduga

// promise wala way
 
// function promisecode (){
//     return new Promise (function (resolve){
//         fs.readFile("week1/a.txt","utf-8",function (err,data) {
//             //promise comes sync but data comes async (eventually)
//             resolve(data);
//         })
// })}

// promisecode().then(after);


// let p = new Promise (function(resolve){
//     resolve("hi niki");
// })

// p.then(function(data){
//     console.log(data);
// })


//async await way

function asyncawait (){
    return new Promise (function (resolve){
        fs.readFile("week1/a.txt","utf-8",function (err,data) {
            resolve(data);
        })
})}


async function AA (){
    const data =await asyncawait();
    console.log(data);
}

AA();