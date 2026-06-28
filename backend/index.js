import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';

import chatbotRoutes from './routes/chatbot.route.js';
import dns from 'dns';

//change dns
dns.setServers(["1.1.1.1","8.8.8.8"]);

const app = express();
dotenv.config()

const port = process.env.PORT || 3000;

//middlewear
app.use(express.json());
app.use(cors());

//database connection code
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("Connected to MongoDB")
}).catch((error)=>{
    console.log("Error connecting to MongoDb",error)
})


//defining routes
app.use("/Bot/v1/", chatbotRoutes) 

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});