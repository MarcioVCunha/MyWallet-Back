import connection from "../database/databse.js"

async function getUserTransaction(req, res) {
    const authorization = req.headers['authorization'];
    const token = authorization?.replace('Bearer ', '');

    if (!token) return res.sendStatus(401);

    try {
        const userTransaction = await connection.query(`
            SELECT 
                money.type, 
                money.value,
                money.date,
                money.description
            FROM money JOIN users 
            ON money."userId" = users.id 
            JOIN sessions 
            ON sessions."userId" = money."userId" 
            WHERE token = $1;
    `, [token]);

    res.send(userTransaction.rows);
    } catch (error) {
        console.log(error.message);
    }
}

export {
    getUserTransaction
}