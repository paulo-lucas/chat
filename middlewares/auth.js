const jwt = require('jsonwebtoken');

module.exports.isValidToken = function (req, res, next) {
    const header = req.headers['authorization'];
    const token = header && header.split(' ')[1];

    if(!token){
        return res.status(401).json({message: 'Access denied!'})
    }

    const secret = process.env.SECRET

    jwt.verify(token, secret, (err, decoded) => {
        if (err)
          return res.status(400).json({ message: 'Invalid Token!' })
    
        req.userId = decoded.id
        return next()
    });
}