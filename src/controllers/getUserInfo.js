import connection from "../database/databse.js";

async function getUserInfo(req, res) {
    const token = req.headers.authorization.replace('Bearer ', '');

    try {
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

        res.status(200).send(result.rows[0]);
    } catch (error) {
        console.log(error.message)
    }
}

export { getUserInfo }