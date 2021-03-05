// https://poiemaweb.com/mongoose => API 연동 예제
// https://codesource.io/setting-up-vue-authentication-using-expressjs-mongodb-and-jwt/
// https://github.com/Dunebook/VueAuthapp - auth
// https://loy124.tistory.com/244?category=791817 - Db connection 참고
// https://github.com/velopert/mongoose_tutorial
// https://data-make.tistory.com/589 - vue JS 기본 정리
// https://joshua1988.github.io/web-development/css/layout-basic/
// https://im-developer.tistory.com/167 - 전개도
// https://m.blog.naver.com/PostView.nhn?blogId=inajjang97&logNo=221628025502&proxyReferer=https:%2F%2Fwww.google.com%2F - 배포전략
// https://gmldbd94.tistory.com/15?category=784727

const express = require("express");
const app = express();
const port = 9000;
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const dbAddress = "mongodb+srv://kcu1436:ruddnjs11@@jayangphoenix.lx9yw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(dbAddress, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false,})
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.log(err));

app.get("/", (req, res) => res.send("Hello world!!!!"));
