const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const userSchema = mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true,
        validator(value) {
            if(!validator.isEmail(value)){
                throw new Error('Invalid email!')
            }
        }
    },
    password: {
        type:String,
        required:true,
        unique:true,
    },
    role:{
        type:String,
        enum:['user','admin'],
        default: 'user'
    },
    firstname:{
        type:String,
        maxLength: 100,
        trim:true
    },
    lastname:{
        type:String,
        maxLength: 100,
        trim:true
    },
    phone:{
        type:String,
        maxLength: 15
    },
    date: {
        type: Date,
        default: Date.now
    },
    verified:{
        type:Boolean,
        default: false
    }
})

userSchema.pre('save', async function(next){
    let user = this; // user instead of this

    if(user.isModified('password')) {
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(user.password, salt);
        user.password = hash;
    }

    next()

})

userSchema.statics.emailTaken = async function(email){
    const user = await this.findOne({email});
    return !!user  // no user will rt false , if hv user will rt true.
}

userSchema.methods.generateAuthToken = function(){
    let user = this; // access to the user
    const userObj = { sub: user._id.toHexString(), email: user.email };
    const token = jwt.sign(userObj, process.env.DB_SECRET, { expiresIn: '1d' })
    return token

}

// allow us to compare pw
userSchema.methods.comparePassword =async function(candidatePassword){
    // candidate pw = unhashed pw
    const user = this;
    const match = await bcrypt.compare(candidatePassword, user.password);
    return match // match is a boolean
}

userSchema.methods.generateRegisterToken = function(){
    let user = this; // access to the user
    const userObj = { sub: user._id.toHexString() };
    const token = jwt.sign(userObj, process.env.DB_SECRET, { expiresIn: '10h' })
    return token

}

const User = mongoose.model('User', userSchema);

module.exports = { User };