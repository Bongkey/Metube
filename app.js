//node_modules에서 라이브러리 import (ES6)
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import {userRouter} from "./router";
const app = express();

//Home으로 route
const handleHome = (req, res) => res.send("Hello from home");

//Profile로 route
const handleProfile = (req, res) => res.send("You are on my profile");

//middleWares
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("dev"));

app.get("/",handleHome);

app.get("/profile", handleProfile);
// userRouter 사용 -> 주소/user/edit 
app.use("/user", userRouter);

export default app;