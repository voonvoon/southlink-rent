const httpStatus = require('http-status');
//Middleware
const { ApiError } = require('../middleware/apiError');

//models
const { User } = require('../models/user');  // import model to use here
//Service
const userService = require('./user.service');

const createUser = async(email,password) => {
    try{
        //check if email exist
        if(await User.emailTaken(email)){
            throw new ApiError(httpStatus.BAD_REQUEST,'Sorry email already been taken!')  // so if throw err then the rest of code won't happen
        }
//add user to db(hash pw)
        const user = new User({
            email,
            password
        });
        await user.save();
        return user;

    } catch(error){
        throw error
    }
}

const genAuthToken = (user) => {
    const token = user.generateAuthToken();
    return token; // return token to auth controller
}

const signInWithEmailAndPassword = async(email, password) => {
    try{
        //find email in db
        const user = await userService.findUserByEmail(email);
        if(!user){
            throw new ApiError(httpStatus.BAD_REQUEST,'Sorry user does not exist.')
            //throw new Error('Sorry user does not exist.')
        }
        //compare pw
        if(!(await user.comparePassword(password))) {
            throw new ApiError(httpStatus.BAD_REQUEST,'Sorry wrong password!')
            //throw new Error('Sorry wrong password.')
        }
        //if found email & match pw -> return user back
        return user;

    } catch(error) {
        throw error
    }
}

module.exports = {
    createUser,
    genAuthToken,
    signInWithEmailAndPassword
}