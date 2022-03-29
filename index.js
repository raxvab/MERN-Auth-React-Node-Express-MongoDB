const express= require('express')
const mongoose= require('mongoose')
const cors= require('cors')
const cookieParser=require('cookie-parser')


mongoose.connect('mongodb://localhost:27017/bytescrum',{
    useNewUrlParser: true,
    useUnifiedTopology: true
},()=>{
    console.log('connected to the database')
    
})

const routes=require('./routes/routes')

app=express()

app.use(cookieParser())

app.use(cors({
    credentials: true,
    origin:['http://localhost:3000'] // posrt for react added here :)
}))

app.use(express.json())

app.use('/api',routes)

// app.get('/',(req,res)=>{
//     res.send('Hello')
// })
app.listen(8000)
