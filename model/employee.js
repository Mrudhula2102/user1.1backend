const mongoose=require("mongoose")

let sc=mongoose.Schema;
const employeeschema = new sc({
    idd:String,
    ename:String,
    eage:Number,
    eadress:String,
    status:String,
    
});

var employeemodel=mongoose.model("employee",employeeschema)
module.exports =employeemodel;