const { check, validationResult } = require("express-validator");

exports.registerValidation = () => [
    check("name", "The field name should not be empty").notEmpty().escape(),
    check("email", "The field email should not be empty").notEmpty().escape(),
    check("email", "This is not a valid email").isEmail().escape(),
    check("password", "The password should be at least 6 car").isLength({min: 6}).escape()
]

exports.validator = (req, res, next) => {
    const errors = validationResult(req)
    errors.isEmpty() ? next() : res.status(400).send(errors.array()) 
}