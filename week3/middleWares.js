const express = require("express");

const app = express();

//dumb way

// app.get("/health-checkup",(req,res)=>{
//     const kidneyId = req.query.kidneyId ;
//     const username = req.headers.username;
//     const password = req.headers.password;

//     if(username !=='nikhil'  || password !=='pass'){
//         res.status(400).json({"msg":"Something wrong with input"})
//         return ;
//     }

//     if(kidneyId!= 1 && kidneyId !=2){
//         res.status(400).json({"msg":"Something wrong with input"})
//         return ;
//     }

//     res.json({
//         "Msg":"Your kidney is fine"
//     })
// })

//actual syntax of a route handler

// app.get("/route",function(req,res,next){
//     console.log("hey1");
//     next();
// },function(req,res){
//     console.log(req,res)
// })

// Cleaner Way is using middlewares

app.use(express.json());

function userMiddleWare(req, res, next) {
    const username = req.headers.username;
    const password = req.headers.password;
  if (username !== "nikhil" || password !== "pass") {
    res.status(400).json({ msg: "Something wrong with input" });
   
  }
  else next();
}


function kidneyMiddleWare(req, res, next) {
    const kidneyId = req.query.kidneyId ;
       
    if (kidneyId != 1 && kidneyId != 2) {
      res.status(400).json({ msg: "Something wrong with input2" });
     
    }
    else next();
  }

  app.get("/health-checkup",userMiddleWare,kidneyMiddleWare,(req,res)=>{
     
        res.json({
            "Msg":"Your kidney is fine"
        })
    })

    app.post("/health-checkup",(req,res)=>{

        const kidney = req.body.kidney;
        const len = kidney.length;
     
        res.send("you have " + len + " " + "kidneys")
    })

    app.use((err,req,res,next)=>{
      console.log("Something is wrong....")
    })
    

app.listen(3000);
