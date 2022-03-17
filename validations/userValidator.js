const { check, validationResult } = require( 'express-validator');

const generateUserValidators = () => [
    check('type').isIn('DOG','CAT'),
    check('name').notEmpty().isLength({max:50}).withMessage("Invalid name"),
    check('lastname').notEmpty().isLength({max:50}).withMessage("Invalid lastname"),
    check('phone').notEmpty().isLength({min:10, max:10}).IsNumeric().withMessage("Invalid phone"),
    check('lastname').notEmpty().isLength({max:150}).withMessage("Invalid adress"),
]

const generateIdValidators = () => [
    check('id').notEmpty().IsNumeric().withMessage("Invalid Id"),
]

const UpdateUserValidators = () => [
    check('id').notEmpty().IsNumeric().withMessage("Invalid id"),
    check('name').notEmpty().isLength({max:50}).withMessage("Invalid name"),
    check('lastname').notEmpty().isLength({max:50}).withMessage("Invalid lastname"),
    check('phone').notEmpty().isLength({min:10, max:10}).IsNumeric().withMessage("Invalid phone"),
    check('lastname').notEmpty().isLength({max:150}).withMessage("Invalid adress"),
]

const reporter = (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()){
        return res.status(404).json({
            "success" : false,
            "code" : 404,
            "message" : errors,
            "data" : []
        });
    }
    next();
}

module.exports = {
    add: [
        generateUserValidators(),
        reporter
    ],
    id:
    [
        generateIdValidators(),
        reporter
    ],
    update :[
        updateUserValidators(),
        reporter
    ]
};