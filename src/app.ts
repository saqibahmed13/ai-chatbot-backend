import express, { response } from "express";
import { config } from "dotenv";
import morgan from "morgan";
import appRouter from "./routes/index.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import { request } from "http";
config();
const app = express();

//middlewares
const corsOptions = {
    origin: "https://react-chat-1999.netlify.app",
    credentials: true,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    allowedHeaders: ["Content-Type", "Authorization"]
};

// Middlewares
app.use(cors(corsOptions));

app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET));

//remove it in production
app.use(morgan("dev"));
let x=11;
app.use("/api/v1", appRouter);

// app.get("/",(request,response,next)=>{
//     if(x>10){
//         response.json("hello world")
//     }
//     else{
//         response.json("jaa ba soja")
//     }
   
// })

export default app;
