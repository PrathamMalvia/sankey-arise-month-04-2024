// Libraries
const express = require("express");
require('dotenv').config();
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Hello");
});

mongoose.connect(process.env.MONGODB_URL)
    .then(() => {
        console.log("App connected to database");
    })
    .catch((error) => {
        console.log(error);
    })
    
app.listen(PORT, (req, res) => {
    console.log(`Server is running on PORT ${process.env.PORT}`);
})