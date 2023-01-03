const database = require('../models')

class userController{
    static async ConsultUser(req,res){
        return res.status(200).json('teste')
    }
}

module.exports = userController