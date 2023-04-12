import express from "express"
import authRoutes from "./routes/auth.js"
import userRoutes from "./routes/users.js"

const app = express ()

app.use(express.json())
app.use("/api/auth", authRoutes)
app.use("/api/users", userRoutes)


app.listen(3000,()=>{
    console.log("Connected!")
})