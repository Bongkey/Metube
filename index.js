//node_modules에서 라이브러리 import (ES6)
import express from "express";
const app = express();

const PORT = 4000;

const handleListening = () => console.log(`http://localhost:${PORT}`);

//Home으로 route
const handleHome = (req, res) => res.send("Hello from home");

//Profile로 route
const handleProfile = (req, res) => res.send("You are on my profile");


app.get("/", handleHome);

app.get("/profile", handleProfile);
//4000번 포트 열기
app.listen(PORT, handleListening);