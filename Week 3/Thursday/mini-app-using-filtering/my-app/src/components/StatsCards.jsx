import React from 'react';
import '../App.css';

const StatsCards = ({ todos }) => {
    const total = todos.length;
    const completed = todos.filter(t => t.completed).length;
    const notCompleted = total - completed;

    return (
        <div className="stats">
            <div className="stat-card"><h3>{total}</h3><p>Total</p></div>
            <div className="stat-card"><h3>{completed}</h3><p>Completed</p></div>
            <div className="stat-card"><h3>{notCompleted}</h3><p>Not completed</p></div>
        </div>
    );
};

export default StatsCards;