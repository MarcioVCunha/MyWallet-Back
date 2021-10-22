import connection from "../database/databse.js";

async function logout(req, res) {
    const { token } = req.body;
    try {
        await connection.query(`
        DELETE FROM sessions 
        WHERE token = $1;
    ` [token])
        res.sendStatus(201);
    } catch (error) {
        console.log(error.message);
    }
}

export { logout }