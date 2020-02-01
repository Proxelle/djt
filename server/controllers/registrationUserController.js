const UserSchema = require('../models/registrationUserModel')

module.exports = registartionUser = (req, res) => {    
    console.log(req.body)

    let userSchema = new UserSchema(req.body);
     
    userSchema.save()
}