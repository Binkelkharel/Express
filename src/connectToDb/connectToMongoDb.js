import mongoose from "mongoose"

const connectToMongoDb= ()=>{
    mongoose.connect("mongodb://0.0.0.0:27017/dw18")
    console.log("application is connected to Mongodb successfully")
    
}

export default connectToMongoDb