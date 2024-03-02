import express,{Express} from 'express'
import cors from 'cors'
import "dotenv/config"
import cookieParser from 'cookie-parser'

const app : Express = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true,
}))
app.use(cookieParser())

const PORT : string | number = (process.env.PORT) || 8080 

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})
