const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const dbConfig = require("./connection/dbConfig")
const userRoutes = require("./route/user"); //bring in our user routes

mongoose.set("useCreateIndex", true);
mongoose
    .connect(dbConfig.dbAddress, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    })
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.log(err));

app.use(cors()); //registering cors
app.use(bodyParser.urlencoded({ extended: false })); //configure body parser
app.use(bodyParser.json()); //configure body-parser ends here
app.use(morgan("dev")); // configire morgan
app.use("/user", userRoutes);

app.get("/", (req, res) => {
    console.log("App start"); // define first route
});

module.exports = app;
