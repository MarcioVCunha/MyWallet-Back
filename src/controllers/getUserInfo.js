import connection from "../database/databse.js";

async function getUserInfo(req, res) {
    const authorization = req.headers['authorization'];
    const token = authorization?.replace('Bearer ', '');

    if (!token) return res.sendStatus(401);

    const result = await connection.query(`
        SELECT 
            users.id, 
            users.name, 
            sessions.token 
        FROM sessions 
        JOIN users 
        ON sessions."userId" = users.id 
        WHERE sessions.token = $1; 
    `, [token])

    res.send(result.rows[0]);
}

export { getUserInfo }