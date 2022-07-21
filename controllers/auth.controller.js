export async function auth(req, res, next) {
    if (req.get('X-Who-Am-I') === 'agmyintmyatoo') next();
    else res.status(401).json({ message: 'GTFO!' });
}