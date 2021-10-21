import bcrypt from 'bcrypt';

import connection from '../database/databse.js'

async function logIn(req, res) {
    const { email, password } = req.body;

    const result = await connection.query(`SELECT * FROM users WHERE email = $1`, [email]);

    const user = result.rows[0];

    if (user && bcrypt.compareSync(password, user.password)) {
        res.sendStatus(201);
    } else {
        res.sendStatus(404);
    }
};

export {
    logIn
}