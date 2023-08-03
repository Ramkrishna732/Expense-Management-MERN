// const express=require('express')
// const app=express();
// const morgan=require('morgan')
// const cors=require('cors')
// const dotenv=require('dotenv');
// const connectDB = require('./config/connectDb');
// dotenv.config();
// const PORT=8000 || process.env.PORT;

// connectDB();//make this after making connectDB.js

// app.use(morgan('dev'))
// app.use(express.json)

// app.use('/api/v1/users',require('./routes/userRoute.js'))

// app.listen(PORT,()=>{
//     console.log(`server running on ${PORT}`)
// })



const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const colors = require("colors");
//const path = require("path");
const connectDb = require("./config/connectDb.js");
// config dot env file
dotenv.config();

//databse call
connectDb();

//rest object
const app = express();

//middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

//routes
//user routes
app.use("/api/v1/users", require("./routes/userRoute.js"));
//transections routes
app.use("/api/v1/transections", require("./routes/transectionRoutes.js"));

//static files
// app.use(express.static(path.join(__dirname, "./client/build")));

// app.get("*", function (req, res) {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

//port
const PORT = 8080 || process.env.PORT;

//listen server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});



