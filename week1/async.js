
 let i =0;

function sum (){


    for(let a =1;a<=100;a++)i+=a;

    console.log(i);

}

function syncsleep(){
    for(let j=0;j<=1000000;j++){}
}

syncsleep();
sum();

// setTimeout(sum,1000)

console.log("hello world");