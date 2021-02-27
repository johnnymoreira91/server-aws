const express = require("express");
const path = require('path');
const app = express();

const PORT = 80;

app.use("/", express.static(path.join(__dirname, "public")));

app.get("/teste", (req,res)=>{
    res.send("<h1> OLA MUNDO, voce esta na primeira pagina, TE AMO VIDAAA </h1>")
})

app.listen(PORT, ()=>{
    console.log('Server running on port: ', PORT);
})