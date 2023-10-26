const express = require('express')
const cors = require('cors')
path = require('path')

const app = express()
const messageRouter = require('./routers/messageRouter')

const PORT = process.env.PORT
require('./db/mongoose')

app.use(express.json())
app.use(cors())
app.use("/messages", messageRouter)

app.listen(PORT, ()=>{
    console.log("server connected, port: ",PORT);
})