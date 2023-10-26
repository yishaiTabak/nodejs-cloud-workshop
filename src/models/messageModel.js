const mongoose = require('mongoose')

const messageSchema = mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true
    },
    text:{
        type:String,
        required:true,
        trim:true
    }
})

const Message = mongoose.model("Message", messageSchema)

module.exports = Message