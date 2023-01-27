const express = require('express');
const app = express();
require('dotenv').config();

const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const xss = require('xss-clean');
const mongoSanitize = require('express-mongo-sanitize');

const routes = require('./routes');  // by default is routes/index.js but no need write.

const passport = require('passport');
const { jwtStrategy } = require('./middleware/passport');
const { handleError, convertToApiError } = require('./middleware/apiError');

//voon220
//3cf6uMLOXh2BD4jw

const mongoUri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}?retryWrites=true&w=majority`
const connected = mongoose.connect(mongoUri);

// PARSING
app.use(bodyParser.json())

//sanitize
app.use(xss());
app.use(mongoSanitize());

// Passport
app.use(passport.initialize());
passport.use('jwt',jwtStrategy);

// routes
app.use('/api',routes)  // everytime use /api , use routes 


// error handling(put this after routes)
app.use(convertToApiError)
app.use((err,req,res,next)=>{
    handleError(err,res)
})

app.use(express.static('client/build'));
if(process.env.NODE_ENV === 'production'){
    const path = require('path');

    app.get('/*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'../client','build','index.html'))
    })
}


const port = process.env.PORT || 3001;
app.listen(port, ()=>{
    console.log(`Server running on port ${port}`)
});