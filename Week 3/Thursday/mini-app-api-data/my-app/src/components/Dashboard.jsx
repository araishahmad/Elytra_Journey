import React from 'react';
import { useState, useEffect } from 'react';
import '../App.css';

const Dashboard = () => {
    const [todo, setTodo] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos?_limit=15')
            .then(response => {
                if (!response.ok)
                    throw new Error(`Request failed due to ${response.status}`)
                return response.json()
            })
            .then(json => {
                setTodo(json);
                setLoading(false);
            })

            .catch(err => {
                setError(err.message);
                setLoading(false);
            })
    }, []);

    if (loading)
        return (
            <div className="loading">
                <div className="spinner"></div>
                <p>Loading...</p>
            </div>
        );

    if (error)
        return <p className="error">Something went wrong: {error}</p>;

    return (
        <div className="cards">
            {todo.map((data) => (
                <div className="display-data" key={data.id}>
                    <h4 className="user-title">{data.title}</h4>

                    <ul className="user-list">
                        <li>{data.userId}</li>
                        <li>{data.completed ? "Completed" : "Not completed"}</li>
                    </ul>
                </div>
            ))}
        </div>
    );
}

export default Dashboard;