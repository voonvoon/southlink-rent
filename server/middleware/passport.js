const { User } = require('../models/user');
require('dotenv').config();

const { Strategy:JwtStrategy, ExtractJwt } = require('passport-jwt');

const jwtOptions = {
    secretOrKey: process.env.DB_SECRET,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
}

const jwtVerify = async(payload,done)=>{
    try{
        const user = await User.findById(payload.sub);
        if(!user){
            return done(null,false) // no err, no user
        }
        done(null, user) // no error , send user back
    } catch(error){
        done(error, false)
    }
}

const jwtStrategy = new JwtStrategy(jwtOptions, jwtVerify);

module.exports = {
    jwtStrategy
}