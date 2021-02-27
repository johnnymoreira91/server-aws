const express = require("express");
const app = express();

const PORT = 80;

app.get("/", (req,res)=>{
    res.send("<h1> OLA MUNDO, voce esta na primeira pagina, TE AMO VIDAAA </h1>")
})

app.listen(PORT, ()=>{
    console.log('Server running on port: ', PORT);
})