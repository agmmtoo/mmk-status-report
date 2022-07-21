import { connection } from '../index.js';

async function getAllUsers() {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM users`, (err, results) => {
            if (err) reject(err);
            resolve(results);
        });
    });
};

export async function list(req, res) {
    try {
        const users = await getAllUsers();
        return res.status(200).json({ users });
    } catch (error) {
        return res.status(400).json({ error });
    }
}