const { check, validationResult } = require('express-validator');
const httpStatus = require('http-status');

const addListingValidator = [
    check('propName')
        .trim().not().isEmpty().withMessage('You need to add a place name.').bail()
        .isLength({min:3}).withMessage('Min 3 characters requires').bail(),
    check('rental')
        .trim().not().isEmpty().withMessage('You need to add a rental.').bail()
        .not().isBoolean().withMessage('you need to add a proper price for rental').bail()
        .isLength({min:3,max:100}).withMessage('min characters is 3 , max is 100').bail(),
        //once done checking above, next is callback function, it allow u displar err msg or go next:
        (req, res, next)=>{
            const errors = validationResult(req); // req is whatever we posting
            if(!errors.isEmpty()){
                return res.status(httpStatus.BAD_REQUEST).json({
                    errors: errors.array()
                })
            }
            next()
        }
    ]

module.exports = {
    addListingValidator
}