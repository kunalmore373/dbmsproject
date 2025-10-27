import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Analytics = () => {
    const [analyticsData, setAnalyticsData] = useState([]);

    useEffect(() => {
        const fetchAnalytics = async () => {
            try {
                const response = await axios.get('/api/analytics');
                setAnalyticsData(response.data);
            } catch (error) {
                console.error('Error fetching analytics data:', error);
            }
        };

        fetchAnalytics();
    }, []);

    return (
        <div>
            <h2>Habit Completion Analytics</h2>
            <table>
                <thead>
                    <tr>
                        <th>Habit ID</th>
                        <th>User ID</th>
                        <th>Completion Date</th>
                    </tr>
                </thead>
                <tbody>
                    {analyticsData.map((entry) => (
                        <tr key={entry.id}>
                            <td>{entry.habitId}</td>
                            <td>{entry.userId}</td>
                            <td>{new Date(entry.completionDate).toLocaleDateString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Analytics;