const Joi = require("@hapi/joi");

const authSchema = Joi.object({
    name: Joi.string().required(),
    password: Joi.string().min(6).required(),
    phone_number:Joi.required(),
});

module.exports = {
    authSchema
};