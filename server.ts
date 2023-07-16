import {Server} from 'http'
import dotenv from 'dotenv'
import mongoose, { mongo } from 'mongoose'
import config from './config/index';
import app from './app';

dotenv.config()
let server:Server;


//syncrhonous process 
async function main(){
    try {
        await mongoose.connect(config.database_url as string) 
        server = app.listen(config.port,()=>{
            console.log(`Server running on port ${config.port}`)
        })

        console.log('Server connected')
        
    } catch (error) {
        console.log("server connection failed")
    }
}

main()