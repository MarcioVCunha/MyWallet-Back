import joi from 'joi';

const schemaSignUp = joi.object({
    name: joi.string().min(3).required(),
    email: joi.string().pattern(/^[a-z0-9.]+@[a-z0-9]+\.([a-z]+)?$/).required(),
    password: joi.string().min(8).pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/).required()
})

export {
    schemaSignUp
}