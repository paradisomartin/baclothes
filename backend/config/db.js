import mongoose from 'mongoose'
import colors from 'colors'

const connectDB = async function(){
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true
        })

            console.log(`MongoDB Connected: ${conn.connection.host}`.yellow.underline.bold)
    } catch(error) {
        console.error(`Error:  ${error.message}`.red.bold)
    }
}

export default connectDB