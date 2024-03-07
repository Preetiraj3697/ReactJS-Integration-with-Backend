// Api-integration password
require("dotenv").config();
const express = require('express');
const connectDB = require("./db/connect")
const cors = require('cors');
const entryRoutes = require('./routes/entryRoutes');

const app = express();

app.use(cors());
app.use(express.json());


app.get("/",(req,res)=>{
    res.send("Home Page");
})
// Use routes
app.use('/api/entries', entryRoutes);

const PORT = process.env.PORT || 5000;
const start = async () => {
    try{
        await connectDB(process.env.MONGODB_URL); 
        app.listen(PORT, ()=>{
            console.log(`${PORT} YES I am connected`);
        })
    }catch(error){
        console.log(error)
    }
}
start();
