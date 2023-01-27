const mongoose = require('mongoose');
const httpStatus = require('http-status');

//since error is build within express, we can extends it here, like blended with our own class

class ApiError extends Error {
    // want status code & msg from error
    constructor(statusCode,message) {
        super();
        this.statusCode = statusCode;
        this.message = message;
    }
}

const handleError = (err,res) => {
    const {statusCode,message} = err;
    res.status(statusCode).json({
        status: 'error',
        statusCode,
        message
    })
}

// what if error from mongoose, we also need to format it in a way easy to get
const convertToApiError = (err,req,res,next) => {
    let error = err;

    if(!(error instanceof ApiError)) {
        const statusCode = error.statusCode || error instanceof mongoose.Error ?
        httpStatus.BAD_REQUEST : httpStatus.INTERNAL_SERVER_ERROR;
        const message = error.message || httpStatus[statusCode];
        error = new ApiError(statusCode,message)
    }
    next(error);
}

module.exports = {
    ApiError,
    handleError,
    convertToApiError
}