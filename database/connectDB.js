import mongoose from 'mongoose';

const connectMongo = async()=>{
    try{
        const {connection} = await mongoose.connect(process.env.MONGO_URL,{useNewUrlParser: true, useUnifiedTopology:true});
        console.log("DB connected");
    }
    catch(error){
        console.log(error);
    }
    
}

export default connectMongo;