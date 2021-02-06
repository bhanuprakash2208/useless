const mongoose = require('mongoose')
require('dotenv').config();

mongoose.connect(process.env.DBCONNECTION, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology:true
},(response)=>{
    console.log("MongoDB server is up and working")
})