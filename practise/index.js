const express = require ('express')
const app = express();
const mongodb = require("./db")
const authRouter = require("./routes/authRoute")

 mongodb();
 app.use(express.json());
app.use("/",authRouter)

app.listen(3000);