const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000 ;


const static_path = path.join(__dirname, "../public");


app.set('view engine', 'hbs');
app.use(express.static(static_path));


//routing
app.get("/", (req, res)=>{
    res.render("index");
})
app.get("/project", (req, res) =>{
    res.render("project");
})
app.get("/about", (req, res) =>{
    res.render("about");
})
app.get("/login", (req, res) =>{
    res.render("login");
})

app.get("*", (req, res) =>{
    res.render("errorpage");
})

app.listen(port, ()=>{
    console.log(`listining the port ${port}`);
})