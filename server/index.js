import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import { postSignup,postLogin } from "./controllers/user.js";
import{postTransaction,getTransactions} from "./controllers/transation.js"


const app = express();
app.use(express.json());
app.use(cors());

//connect to MOngoDB

const connectDB = async () => {
    const conn = await mongoose.connect(process.env.MONGODB_URL)

    if (conn) {
        console.log(`MOngoDB connected Successfully...✅`);
    }
};

connectDB();

app.get('/', (req, res) => {
    res.json({
        message: `welcome to expense API`
    })
})

app.post("/signup",postSignup )

app.post("/login",postLogin)

app.post("/transaction",postTransaction)

app.get("/transactions",getTransactions)

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
})

