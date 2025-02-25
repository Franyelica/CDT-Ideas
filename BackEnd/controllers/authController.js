const User = require('../models/user');
const ErrorHandler = require('../utils/errorHandler');
const catchAsyncErrors = require('../middlewares/catchAsyncErrors');
const sendToken = require('../utils/jwtToken');
const sendEmail = require('../utils/sendEmail');
const crypto = require('crypto');
const { send } = require('process');



//Register a user ------- /api/v1/register

exports.registerUser = catchAsyncErrors(async (req, res, next) => {

    const { name, email, password } = req.body;
    const user = await User.create({
        name,
        email,
        password,
    })

    sendToken(user, 200, res)

})

exports.loginUser = catchAsyncErrors(async (req, res, next) => {
    const { email, password } = req.body;

    //check if email and password is entered by user
    if (!email || !password) {
        return next(new ErrorHandler('Por favor ingresar correo y contraseña', 400))
    }

    //find user in database
    const user = await User.findOne({ email }).select('+password')

    if (!user) {
        return next(new ErrorHandler('Correo o contraseña invalidos', 401));
    }

    //check if password is correct or not
    const isPaswordMatched = await user.comparePassword(password);

    if (!isPaswordMatched) {
        return next(new ErrorHandler('Correo o contraseña invalidos', 401));
    }

    sendToken(user, 200, res)
})

//Forgot password --------- /api/v1/password/forgot

exports.forgotPassword = catchAsyncErrors(async (req, res, next) => {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
        return next(new ErrorHandler('No hay usuarios registrados con este correo.', 404));
    }

    //Get reset token
    const resetToken = user.getResetPasswordToken();

    await user.save({ validateBeforeSave: false })

    //create reset password url

    const resetUrl = `${req.protocol}://${req.get('host')}/password/reset/${resetToken}`;

    const message = `Tu token para restablecer tu contraseña es:\n\n${resetUrl}\n\nSi no solicitaste este correo, omitelo.`

    try {

        await sendEmail({
            email: user.email,
            subject: 'CDT-Restablecer contraseña',
            message
        })

        res.status(200).json({
            success: true,
            message: `Email enviado a: ${user.email}`
        })

    } catch (error) {
        user.resetPasswordToken = undefined;
        user.resetPasswordExpire = undefined;

        await user.save({ validateBeforeSave: false })

        return next(new ErrorHandler(error.message, 500))
    }
})

//Reset password --------- /api/v1/password/reset/:token

exports.resetPassword = catchAsyncErrors(async (req, res, next) => {
    //Hash url token
    const resetPasswordToken = crypto.createHash('sha256').update(req.params.token).digest('hex')

    const user = await User.findOne({
        resetPasswordToken,
        resetPasswordExpire: { $gt: Date.now() }
    })

    if (!user) {
        return next(new ErrorHandler('Token para restablecer contraseña no es válido o ha expirado.', 400))
    }

    if (req.body.password !== req.body.confirmPassword) {
        return next(new ErrorHandler('La contraseña no coincide', 400))
    }

    //Setup new password
    user.password = req.body.password

    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save();

    sendToken(user, 200, res)
})

//Get currentlu logged in user details ----- /api/v1/me
exports.getUserProfile = catchAsyncErrors(async (req, res, next) => {
    const user = await User.findById(req.user.id);

    res.status(200).json({
        success: true,
        user
    })
})

//Update / change password ------- /api/v1/password/update
exports.updatePassword = catchAsyncErrors(async (req, res, next) => {

    const user = await User.findById(req.user.id).select('+password');

    //Check previous user password
    const isMatched = await user.comparePassword(req.body.oldPassword)
    if (!isMatched) {
        return next(new ErrorHandler('La contraseña actual no coincide', 400));
    }

    user.password = req.body.password;
    await user.save();

    sendToken(user, 200, res)

})

//Update user profile ----------- /api/v1/me/update

exports.updateProfile = catchAsyncErrors(async (req, res, next) => {
    const newUserData = {
        name: req.body.name,
        email: req.body.email
    }

    //update avatar-img: Todo

    const user = await User.findByIdAndUpdate(req.user.id, newUserData, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    })

    res.status(200).json({
        success: true
    })
})

//Logout user -------- /api/v1/logout

exports.logout = catchAsyncErrors(async (req, res, next) => {
    res.cookie('token', null, {
        expires: new Date(Date.now()),
        httpOnly: true
    })
    res.status(200).json({
        success: true,
        message: 'Se ha cerrado la sesión.'
    })
})


//Admin routes//

//Get all user --------- /api/v1/admin/users

exports.allUsers = catchAsyncErrors(async (req, res, next) => {
    const users = await User.find();

    res.status(200).json({
        success: true,
        users
    })
})

//Get user details ------- /api/v1/admin/user:id

exports.getUserDetails = catchAsyncErrors(async(req, res, next) => {
    const user = await User.findById(req.params.id);

    if (!user) {
        return next(new ErrorHandler(`El usuario con el id: ${req.params.id} no ha sido encontrado.`))
    }

    res.status(200).json({
        success: true,
        user
    })
})

//Update user profile ----------- /api/v1/admin/user/:id

exports.updateUser = catchAsyncErrors(async (req, res, next) => {
    const newUserData = {
        name: req.body.name,
        email: req.body.email,
        role: req.body.role
    }

    const user = await User.findByIdAndUpdate(req.params.id, newUserData, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    })

    res.status(200).json({
        success: true
    })
})

//Delete user ------- /api/v1/admin/user:id

exports.DeleteUser = catchAsyncErrors(async(req, res, next) => {
    const user = await User.findById(req.params.id);

    if (!user) {
        return next(new ErrorHandler(`El usuario con el id: ${req.params.id} no ha sido encontrado.`))
    }

    //Remove avatar from cloudinary -- check

    await user.remove();

    res.status(200).json({
        success: true
    })
})

