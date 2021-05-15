const express = require('express');
const path = require('path');
const app = express();
const hbs= require("hbs");
require("./db/conn")
const Registerform = require("./model/registres");


const port = process.env.PORT || 3000 ;


const static_path = path.join(__dirname, "../public");
const templet_path = path.join(__dirname, "../templetes/views");
const partials_path = path.join(__dirname, "../templetes/partials");


app.use(express.json());
app.use(express.urlencoded({extended:false}));



app.use(express.static(static_path));
app.set('view engine', 'hbs');
app.set("views", templet_path);
hbs.registerPartials(partials_path)


//routing
app.get("/", (req, res) =>{
    res.render("index");
});
app.get("/project", (req, res) =>{
    res.render("project");
});
app.get("/about", (req, res) =>{
    res.render("about");
});
app.get("/registration", (req, res) =>{
    res.render("registration");
});
app.get("/login", (req, res) =>{
    res.render("login");
});

app.get("*", (req, res) =>{
    res.render("errorpage");
});




//post start hear

app.post("/registration", async(req, res) =>{
    try {
        const password = req.body.password;
        const conpassword = req.body.confirmpassword;



        if(password === conpassword){

            const registrationClient = new Registerform({
                
            firstname:req.body.firstname,
            lastname:req.body.lastname,
            email:req.body.email,
            gender:req.body.gender,
            phone:req.body.phone,
            age:req.body.age,
            password:password,
            confirmpassword:conpassword,

            })
            const registred = await registrationClient.save();
            res.status(201).render("project")
        }else{
            res.send(`password not match`);
        }
    } catch (error) {
        res.status(400).send(error);
    }
});


app.listen(port, ()=>{
    console.log(`listining the port ${port}`);
})