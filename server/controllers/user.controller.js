const httpStatus = require('http-status');
const { ApiError } = require('../middleware/apiError');

const { userService, authService, emailService } = require('../services');

const userController = {
    async profile(req,res,next){
        try {
            const user = await userService.findUserById(req.user._id);// cuz used auth middleware, we get inside the req.user._id
            if(!user){
                throw new ApiError(httpStatus.NOT_FOUND, 'Sorry, user not found')
            }

            res.json(res.locals.permission.filter(user._doc))
        } catch(error){
            next(error)
        }
    },
    async updataProfile(req,res,next) {
        try {
            const user = await userService.updateUserProfile(req);  // pass whole req maybe we gonna use it
            res.json(res.locals.permission.filter(user._doc))
        } catch(error){
            next(error)
        }
    },
    async updateEmail(req, res, next) {
        try{
            const user = await userService.updateUserEmail(req);
            //since get new email, need to regenerate token:
            const token = await authService.genAuthToken(user);

            //console.log('send email to verify');
             // send verification email
            await emailService.registerEmail(user.email,user);

            res.cookie('x-access-token', token)  // set new cookie to browser
            .send({
                user:res.locals.permission.filter(user._doc),
                token
            })

        } catch(error) {
            next(error)
        }
    },
    async verifyAccount(req, res, next){
        try{
            const token = userService.validateToken(req.query.validation);
            const user = await userService.findUserById(token.sub);  //id of user withing sub when decode token.

            if(!user) throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
            if(user.verified) throw new ApiError(httpStatus.NOT_FOUND, 'user already been verified.');

            user.verified = true;
            user.save();
            res.status(httpStatus.CREATED).send({
                email: user.email,
                verified: true
            })

        } catch(error){
            next(error)
        }
    } 
}

module.exports = userController;