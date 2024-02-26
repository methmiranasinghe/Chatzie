import express from"express";
import dotenv from "dotenv";
import connectToMongoDB from "./db/connectToMongoDB.js";
import authRoutes from "./routes/auth.routes.js"
import messageRoutes from "./routes/message.routes.js"
import cookieParser from "cookie-parser";
const app = express();
const PORT = process.env.PORT || 5000;
dotenv.config()

app.use(express.json());// to parse the incoming requests with json payloads(from req.body)
app.use(cookieParser());

app.use("/api/auth",authRoutes)
app.use("/api/messages", messageRoutes);

app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server running on port ${PORT}`)
});