const express = require("express");
const app = express();

const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config()

mongoose.connect(
    process.env.mongo_url)
    .then(() => console.log("DB connection Successfull"))
    .catch((err) => console.log("connection to db failed : " + err));

const port = 5000
app.listen(process.env.port || port, () => {
    console.log("Backend server is runing : " + port)
});