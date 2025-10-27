import React, { useEffect, useState } from 'react';
import axios from 'axios';

const HabitList = () => {
    const [habits, setHabits] = useState([]);

    useEffect(() => {
        const fetchHabits = async () => {
            try {
                const response = await axios.get('/api/habits');
                setHabits(response.data);
            } catch (error) {
                console.error('Error fetching habits:', error);
            }
        };

        fetchHabits();
    }, []);

    return (
        <div>
            <h2>Your Habits</h2>
            <ul>
                {habits.map(habit => (
                    <li key={habit.id}>
                        <h3>{habit.title}</h3>
                        <p>Frequency: {habit.frequency}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default HabitList;