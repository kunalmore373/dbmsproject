import React, { useState } from 'react';

const AddHabitForm = ({ onAddHabit }) => {
    const [title, setTitle] = useState('');
    const [frequency, setFrequency] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title && frequency) {
            onAddHabit({ title, frequency });
            setTitle('');
            setFrequency('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title">Habit Title:</label>
                <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="frequency">Frequency:</label>
                <input
                    type="text"
                    id="frequency"
                    value={frequency}
                    onChange={(e) => setFrequency(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Add Habit</button>
        </form>
    );
};

export default AddHabitForm;