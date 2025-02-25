const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Por favor ingresa tu nombre'],
        maxLength: [45, 'Tu nombre no puede exceder los 43 caracteres']
    },
    email: {
        type: String,
        required: [true, 'Por favor ingresa tu correo'],
        unique: true,
        validate: [validator.isEmail, 'Por favor ingresar un correo válido']
    },
    password: {
        type: String,
        required: [true, 'Por favor ingresa tu contraseña'],
        minlength: [6, 'Tu contraseña debe tener 6 o más caracteres'],
        select: false
    },
    role: {
        type: String,
        default: 'User'
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date
})

//Encrypting password before register user
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next();
    }

    this.password = await bcrypt.hash(this.password, 10)
})

//compare user password
userSchema.methods.comparePassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password)
}

//Return jwt token
userSchema.methods.getJwtToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_TIME
    });
}

//Generate password reset token 

userSchema.methods.getResetPasswordToken=function(){
    //Generate token 
    const resetToken =crypto.randomBytes(20).toString('hex');

    //has end set to resetPasswordToken
    this.resetPasswordToken = crypto.createHash('sha256').update(resetToken).digest('hex')

    //set token expire time
    this.resetPasswordExpire = Date.now() + 30 * 60 * 1000

    return resetToken
}


module.exports = mongoose.model('user', userSchema)