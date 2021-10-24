import { transactionSchema } from '../validation/transactions.js'
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br.js';
import connection from '../database/databse.js';

async function addTransaction(req, res) {
    const authorization = req.headers['authorization'];
    const token = authorization?.replace('Bearer ', '');

    if (!token) return res.sendStatus(401);

    const { value, description, type } = req.body;

    const validateTransaction = transactionSchema.validate({
        value,
        description
    })

    if (validateTransaction.error === undefined) {
        const day = dayjs().format('DD/MM');

        try {
            const userId = await connection.query(`
                SELECT "userId"
                FROM sessions
                WHERE token = $1;
        `, [token]);

            await connection.query(`
            INSERT INTO money (type, value, "userId", date, description)
            VALUES ($1, $2, $3, $4, $5);
        `, [type, Number(value).toFixed(2), userId.rows[0].userId, day, description]);
            res.sendStatus(201);
        } catch (error) {
            console.log(error);
        }
    } else {
        res.sendStatus(400);
    }
}

export { addTransaction }