const express = require('express');
const router = express.Router();
const Message = require('../models/message');
const User = require('../models/user');

const { isValidToken } = require('../middlewares/auth')

router.post('/', isValidToken, async function (req, res, next){
    const { content } = req.body
    const user = await User.findOne({ id: req.userId })
    const message = new Message({
        content,
        user
    });

    message.save(function(err, result){
        if(err){
            return res.status(500).json({
                myErroTitle: 'Error save!',
                myError: err
            })
        }
        res.status(201).json({
            myMsgSucess: "Sucess save message!",
            objMessageSave: result
        });
    });
});

router.get('/', isValidToken, function(req, res, next){
    Message.find()
        .exec(function(err, result){
            if(err){
                return res.status(500).json({
                    myErroTitle: 'Error find!',
                    myError: err
                })
            }
            res.status(200).json({
                myMsgSucess: "Sucess find message!",
                objMessagesFind: result
            });
        });
})

router.delete('/', isValidToken, function(req, res, next){
    Message.findByIdAndRemove(req.query.id, (err, data) => {
        if(err){ return next(err)}
        res.status(200).json({
            myMsgSucess: "Sucess remove message!",
            msg: data
        })
    })
})

router.put('/', isValidToken, function(req, res, next){
    Message.findByIdAndUpdate({_id: req.query.id}, {$set: { content: req.body.content}}, { new: true }, (err, data) => {
        if(err){ return next(err)}
      
        res.status(200).json({
            myMsgSucess: "Sucess update message!",
            msg: data
        })
    })
})

module.exports = router;