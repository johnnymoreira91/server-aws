const express = require("express");
const app = express();

const PORT = 3001;

app.get("/", (req,res)=>{
    res.json({
        status: 200,
        Body: `Server with express running on port ${PORT}`,
        executed: "You are looking the Home Page"
    })
})

app.listen(PORT, ()=>{
    console.log('Server running on port: ', PORT);
})