const express = require("express");
const zod =require("zod");
const app = express();

app.use(express.json());


const schema= zod.array(zod.number());
const schema2 = zod.object({
    email : zod.string().email(),
    password:zod.string().min(8) 
})



app.post("/health-checkup",(req,res)=>{

    const kidney = req.body.kidney;

    const response=schema.safeParse(kidney);

    // const len = kidney.length;
 
    res.send({response})
})

function validateUser() {
    const response = schema2.safeParse({
        email:"nikhil@gmail.com",
        password :"12199912"
    })

    console.log(response)
}

validateUser()

// app.use((err,req,res,next)=>{
//   console.log("Something is wrong....")
// })


app.listen(3002);
