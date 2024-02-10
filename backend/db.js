const mongoose =require ('mongoose');
const mongoURI="mongodb://localhost:27017/"

const connetTOMongo =()=>{
    mongoose.connect(mongoURI,()=>{
        console.log("connected to mongo success");
    })
}

module.exports=connetTOMongo;