//https://poiemaweb.com/mongoose => API 연동 예제

const express = require("express");
const app = express();
const port = 9000;
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const dbAddress = "mongodb+srv://kcu1436:ruddnjs11@@jayangphoenix.lx9yw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose
    .connect(dbAddress, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    })
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.log(err));

app.get("/", (req, res) => res.send("Hello world!!!!"));