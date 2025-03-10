const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
// const bodyParser = require("body-parser")
const app = express()
const Routes = require("./routes/route.js")

const PORT = 5000

dotenv.config();

app.use(express.json({ limit: '10mb' }))
app.use(cors())

const URL = "mongodb+srv://ritikdubey935:YU6SxHPj3R3tjnh0@test.o9x6g.mongodb.net/?retryWrites=true&w=majority&appName=test"

mongoose
    .connect(URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(console.log("Connected to MongoDB"))
    .catch((err) => console.log("NOT CONNECTED TO NETWORK", err))

app.use('/', Routes);

app.listen(PORT, () => {
    console.log(`Server started at port no. ${PORT}`)
})