import connection from '../database/databse.js';
import bcrypt from 'bcrypt';
import { schemaSignUp } from '../validation/sing-up.js'

async function createAccount(req, res) {
    const { name, email, password, passwordConfirmation } = req.body;
    if (password !== passwordConfirmation) {
        res.sendStatus(400);
    } else {
        const validateSignUp = schemaSignUp.validate({
            name,
            email,
            password
        })
        if (validateSignUp.error === undefined) {
            try {
                const isEmailAvaiable = await connection.query('SELECT id FROM users WHERE email = $1;', [email]);
                if (isEmailAvaiable.rowCount === 0) {
                    const encryptedPassword = bcrypt.hashSync(password, 10);
                    await connection.query('INSERT INTO users (name, email, password) VALUES ($1, $2, $3)', [name, email, encryptedPassword]);
                    res.sendStatus(201);
                } else {
                    res.sendStatus(400);
                }
            } catch (error) {
                console.log(error.message);
            }
        } else {
            res.sendStatus(400)
        }
    }
}

export {
    createAccount
}