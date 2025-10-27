const express = require('express');
const HabitController = require('../controllers/habitController');

const router = express.Router();
const habitController = new HabitController();

const setRoutes = (app) => {
    router.get('/habits', habitController.getHabits.bind(habitController));
    router.post('/habits', habitController.addHabit.bind(habitController));
    router.delete('/habits/:id', habitController.deleteHabit.bind(habitController));

    app.use('/api', router);
};

module.exports = setRoutes;