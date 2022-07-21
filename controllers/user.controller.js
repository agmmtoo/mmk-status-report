import { getAllUsers } from '../db-client.js';

export async function list(req, res) {
    try {
        const users = await getAllUsers();
        return res.status(200).json({ users });
    } catch (error) {
        return res.status(400).json({ error });
    }
}