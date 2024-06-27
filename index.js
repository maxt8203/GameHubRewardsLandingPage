import app from "./app";
import './database';
import express from "express";

app.use(express.static("public"));

app.listen(3000);
console.log("Servidor en puerto", 3000);
