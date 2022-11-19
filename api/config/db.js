import mongoose from "mongoose";


// create a mongoDB connection 
const mongoDBcunnect = async () => {

    try {
        
       const connection = await mongoose.connect(process.env.MONGO_STRING); 
       console.log(`mongoDB connect successfully`.bgBlue.black);

    } catch(error){
        
        console.log(error);

    }

}

/// mongoDB connection export
export default mongoDBcunnect;