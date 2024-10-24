const express = require("express");
const User = require("../user");
const authRouter = express.Router();
const bcrypt = require('bcrypt');
const zod= require ("zod");
const jwt = require('jsonwebtoken');
const authMiddleWare = require("../authMiddleware")


const userSchema = zod.object({
    name:zod.string(),
    email : zod.string().email(),
    password:zod.string().min(8)
})

authRouter.post("/register",async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const validUser = userSchema.safeParse({name,email,password});
    console.log(validUser.error)
    if(!validUser.success)return res.json({
        message : " Invalid"
    })

    const checkUser =await User.findOne({ email: email });
    

    if (checkUser) {
      return res.json({
        message: "User already exists",
      });
    }

    const hashPassword = await bcrypt.hash(password,10)

    const userCreated = new User({
        name,
        email,
        password:hashPassword,
    })

    const user =await userCreated.save();

    console.log(user)

    res.json({
      message: "User Created Succesfully",
      data: user,
    });
  } catch (err) {
    console.log("ERROR IS :", err);
  }
});

authRouter.post("/login",async (req,res)=>{

    const {email,password}=req.body;

    const checkUser =await User.findOne({email:email});

    if(!checkUser){
       return res.json({
            message : "User Does Not Exist"
        })
        }

        const validPW = await bcrypt.compare(password, checkUser.password);


    if(!validPW){
        return res.json({
             message : "Wrong Password"
         })
     }

     const token = jwt.sign({ _id: checkUser._id}, 'nik');

    res.json({
        message:"Logged In",
        token:token
    })

})

authRouter.get("/profile",authMiddleWare,(req,res)=>{

    try{

        const user = req.user;

        res.json({
            message:"User Profile",
            data:user
        })

    }
    catch(err){
        console.log("err is :",err);
    }

})

module.exports = authRouter;
