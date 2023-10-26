const Message = require("../models/messageModel");

class MessageController {
    static async getAllMessages(_,res){
        try{
            const messages = await Message.find({})
            res.send(messages)
        }catch(err){
            res.status(500).send({
            status: 500,
            mesasge: err.message,
            })
          }
    }
    static async postMessage(req,res){
        const messageData = req.body
        try{
            const message = new Message(messageData)
            await message.save()
            res.send(message)
        }catch(err){
            res.status(500).send({
            status: 500,
            mesasge: err.message,
            })
          }
    }
}

module.exports = MessageController