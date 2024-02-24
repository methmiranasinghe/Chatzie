import express from"express";
import dotenv from "dotenv";
import connectToMongoDB from "./db/connectToMongoDB.js";
import authRoutes from "./routes/auth.routes.js"


const app = express();
const PORT = process.env.PORT || 5000;
dotenv.config()

app.use(express.json());// to parse the incoming requests with json payloads(from req.body)
app.use("/api/auth",authRoutes)


app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server running on port ${PORT}`)
});