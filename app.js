const express = require('express')
const app = express()
const port = 5000

const connect = require("./schemas/test");
connect();

const requestMiddleWare=(req,res,next)=>{
    console.log("request URL: ",req.originalUrl," - ", new Date());
    next();
};



const testsRouter = require("./routes/tests");

app.use(express.json());
app.use(express.urlencoded());
app.use(requestMiddleWare);
app.use("/", testsRouter);

app.listen(port, () => {
    console.log(`연결되었습니다. 포트 번호 ${port}`)
  })