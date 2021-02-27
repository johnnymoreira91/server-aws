const express = require("express");
const path = require('path');
const app = express();

const PORT = 80;

app.use("/", express.static(path.join(__dirname, "public")));

app.get("/teste", (req,res)=>{
    res.sendFile(path.join(__dirname, "public/index.html"))
})

app.listen(PORT, ()=>{
    console.log('Server running on port: ', PORT);
})