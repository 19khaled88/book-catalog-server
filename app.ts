
import express, {Application} from 'express';
import cors from 'cors';
const app:Application = express()

app.use(express.json())

app.use(express.urlencoded({extended:true}))

app.use(cors()) 

app.get("/",(req,res)=>{
    res.status(200).json({
        success:true,
        message:"successful"
    })
})





export default app;

