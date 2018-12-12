const express=require("express");
const dbconfig=require("./config/db.config");
const bodyParser=require('body-parser');
let cors = require('cors')
var app=express();

app.use(cors());

app.use(bodyParser.json());

const routes=require('./routes/appRoutes');
app.use("/api",routes)

const PORT=process.env.PORT || 3000;
// const PORT=process.env.PORT;
app.listen(PORT,()=>{
    console.log(`server started at ${PORT}`)
})