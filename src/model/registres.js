const mongoose = require("mongoose");




//startintg creating schema//
const clientSchema = new mongoose.Schema({
    firstname : {
        type:String,
        required:true
    },
    lastname :{
        type:String,
        required:true
    },
    email :{
        type:String,
        required:true,
        unique:true
    },
    gender :{
        type:String,
        required:true
    },
    phone :{
        type:Number,
        require:true,
        unique:true
    },
    age:{
        type:Number,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    confirmpassword:{
        type:String,
        require:true
    }
})

//ending creating schema//

// starting create collections//

const RegisterForm = new mongoose.model("RegisterForm", clientSchema);
module.exports = RegisterForm;

//ending create collections//




