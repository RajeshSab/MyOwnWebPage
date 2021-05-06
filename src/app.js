const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000 ;


const static_path = path.join(__dirname, "../public");

app.use(express.static(static_path));


//routing
app.get("/", (req, res)=>{
    res.send("welcome to Rajesh channel");
})
app.get("/project", (req, res) =>{
    res.send("welcome to Rajesh projectpage");
})
app.get("/about", (req, res) =>{
    res.send("welcome to Rajesh aboutpage");
})
app.get("/login", (req, res) =>{
    res.send("welcome to Rajesh loginpage");
})

app.get("*", (req, res) =>{
    res.send("oops! 404 ERROR PAGE");
})

app.listen(port, ()=>{
    console.log(`listining the port ${port}`);
})