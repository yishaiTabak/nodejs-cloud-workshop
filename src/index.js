const express = require('express')
const cors = require('cors')
path = require('path')

const app = express()
const PORT = process.env.PORT

// app.use(express.json())
app.use(cors())

app.get("/", (req,res) =>{
    const indexPage = path.join(__dirname, "..", "public", "index.html")
    res.sendFile(indexPage)
})

app.listen(PORT, ()=>{
    console.log("server connected, port: ",PORT);
})