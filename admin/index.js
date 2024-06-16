const express = require("express");
const app = express();

const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");



dotenv.config()

mongoose.connect(
    process.env.MONGO_DB)
    .then(() => console.log("DB connection Successfull"))
    .catch((err) => console.log("connection to db failed : " + err));


  
const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log("Backend server is runing : " + port)
});

app.use(express.json());
app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);

