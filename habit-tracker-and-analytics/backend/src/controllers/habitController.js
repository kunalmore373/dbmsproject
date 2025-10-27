class HabitController {
    constructor(db) {
        this.db = db;
    }

    async getHabits(req, res) {
        try {
            const [habits] = await this.db.query('SELECT * FROM habits WHERE userId = ?', [req.user.id]);
            res.json(habits);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving habits', error });
        }
    }

    async addHabit(req, res) {
        const { title, frequency } = req.body;
        try {
            const [result] = await this.db.query('INSERT INTO habits (userId, title, frequency) VALUES (?, ?, ?)', [req.user.id, title, frequency]);
            res.status(201).json({ id: result.insertId, title, frequency });
        } catch (error) {
            res.status(500).json({ message: 'Error adding habit', error });
        }
    }

    async deleteHabit(req, res) {
        const { id } = req.params;
        try {
            await this.db.query('DELETE FROM habits WHERE id = ? AND userId = ?', [id, req.user.id]);
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ message: 'Error deleting habit', error });
        }
    }
}

export default HabitController;