const { User } = require('../models/user'); 
const { ApiError } = require('../middleware/apiError');
const httpStatus = require('http-status');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const findUserByEmail = async(email) => {
    //find user by email and return it
    return await User.findOne({email})  // email:email
}

const findUserById = async(_id) => {
    return await User.findById(_id)
}

const updateUserProfile = async(req) => {
    try{
        const user = await User.findOneAndUpdate(
            { _id:req.user._id},
            {
                "$set":{
                    firstname: req.body.firstname,
                    lastname: req.body.lastname,
                    phone: req.body.phone
                }
            },
            { new: true }  // get the new resourse why get the old one rite?
        )
        if(!user){
            throw new ApiError(httpStatus.NOT_FOUND, 'User not found.')
        }
        return user; // if found user jz return user back

    } catch(error){
        throw error
    }
}

const updateUserEmail = async(req) => {
    try{
        //1st check if new email already taken?
        if(await User.emailTaken(req.body.newemail)){
            throw new ApiError(httpStatus.NOT_FOUND, 'Sorry email already been taken, try other email.')
        }
        const user = await User.findOneAndUpdate(
            { _id:req.user._id, email: req.user.email }, // these from the Auth middleware
            {
                "$set":{
                   email: req.body.newemail,
                   verified:false  // cuz need to verify email again since email changed.
                }
            },
            { new: true }  // get the new resourse why get the old one rite?
        )
        if(!user){
            throw new ApiError(httpStatus.NOT_FOUND, 'User not found.')
        }
        return user;

    } catch(error){
        throw error
    }
}

const validateToken = (token) => {
    return jwt.verify(token, process.env.DB_SECRET);  // return boolean
}

module.exports = {
    findUserByEmail,
    findUserById,
    updateUserProfile,
    updateUserEmail,
    validateToken
}