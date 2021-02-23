const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const dbAddress = "mongodb+srv://kcu1436:ruddnjs11@@jayangphoenix.lx9yw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
//configure database and mongoose
mongoose.set("useCreateIndex", true);
mongoose
    .connect(dbAddress, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    })
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.log(err));

//registering cors
app.use(cors());
//configure body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//configure body-parser ends here

app.use(morgan("dev")); // configire morgan

// define first route
app.get("/", (req, res) => {
    console.log("Hello MEVN Soldier");
});

const userRoutes = require("./route/user"); //bring in our user routes
app.use("/user", userRoutes);

module.exports = app;
