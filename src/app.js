const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000 ;


const static_path = path.join(__dirname, "../public");


app.set('view engine', 'hbs');
app.use(express.static(static_path));


//routing
app.get("/", (req, res) =>{
    res.render("index.hbs");
})
app.get("/project", (req, res) =>{
    res.render("project.hbs");
})
app.get("/about", (req, res) =>{
    res.render("about.hbs");
})
app.get("/login", (req, res) =>{
    res.render("login.hbs");
})

app.get("*", (req, res) =>{
    res.render("errorpage");
})

app.listen(port, ()=>{
    console.log(`listining the port ${port}`);
})