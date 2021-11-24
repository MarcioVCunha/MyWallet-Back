import bcrypt from 'bcrypt';
import { v4 as uuid } from 'uuid';

import connection from '../database/databse.js'

async function logIn(req, res) {
    const { email, password } = req.body;

    try {
        const result = await connection.query(`
            SELECT * FROM users 
            WHERE email = $1;
        `, [email]);

        const user = result.rows[0];

        if (user && bcrypt.compareSync(password, user.password)) {
            const token = uuid();

            await connection.query(`
                DELETE FROM sessions
                WHERE "userId" = $1;
            `, [user.id]);

            await connection.query(`
                INSERT INTO sessions ("userId", token)
                VALUES ($1, $2);
            `, [user.id, token]);
            res.send(token);
        } else {
            res.sendStatus(404);
        }
    } catch (error) {
        res.sendStatus(500);
        console.log(error);
    }
};

export {
    logIn
}