const express = require('express'); 
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

router.post('/signup', async(req, res) => {
    const {email, password, firstName, lastName, sex, country} = req.body;

    if(!email || !password || !firstName || !lastName || !sex || !country){
        return res.status(422).json({message: "Empty fields!"});
    }

    const emailExist = await User.findOne({email: email});

    if(emailExist){
        return res.status(422).json({message: "There is already a user with that email, use another!"});
    }

    //adicionando caracter a mais na senha pra dificultar a descoberta
    const salt = await bcrypt.genSalt(12)
    const passwordHash = await bcrypt.hash(password, salt)

    const user = new User({
        email: email,
        password: passwordHash,
        firstName: firstName,
        lastName: lastName,
        sex: sex,
        country: country
    });

    user.save(function(err, result){
        if(err){
            return res.status(500).json({
                message: err  
            })
        }
        res.status(201).json({
            message: " Your user has been created successfully."
        });
    });


})

router.post('/signin', async(req, res) => {
    const {email, password} = req.body;

    if(!email || !password){
        return res.status(422).json({message: "Empty fields!"});
    }

    const user = await User.findOne({email: email});

    if(!user){
        return res.status(404).json({message: "Account not found!"});
    }

    const checkPassword = await bcrypt.compare(password, user.password);

    if(!checkPassword){
        return res.status(422).json({message: "Invalid password!"});
    }

    try{
        const secret = process.env.SECRET;

        const token = jwt.sign({
            id: user._id,
        }, secret, { expiresIn: 86400});

        res.status(200).json({
            message: "Login in sucess!",
            token: token,
            name: user.firstName
        })
    }catch(err){
        console.log(err)
    }
});

module.exports = router;
