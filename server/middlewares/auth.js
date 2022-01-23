const { tokenVerifier } = require('../helpers/jwt')

const authentication = (req, res, next) =>{
    console.log("Authentication Middleware")
    const {access_token} = req.headers
    if(access_token){
        try {
            let verify = tokenVerifier(access_token)
            req.userData = verify
            next()
        } catch (e) {
            res.status(401).json({
                message: "User not authenticated"
            })
        }
        
    }else{
        res.status(404).json({
            message:"Token not found"
        })
    }
    next()
}

module.exports = { 
    authentication
}