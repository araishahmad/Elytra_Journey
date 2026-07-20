import React from 'react';
import { useState, useEffect, useMemo } from 'react';
import '../App.css';
import StatsCards from './StatsCards';

const SearchBar = ({ value, onChange }) => (
    <input
        type="text"
        className="search-input"
        placeholder="Search by title..."
        value={value}
        onChange={e => onChange(e.target.value)}
    />
);

const CategoryDropdown = ({ value, onChange, userIds }) => (
    <select className="category-dropdown" value={value} onChange={e => onChange(e.target.value)}>
        <option value="all">All users</option>
        {userIds.map(id => (
            <option key={id} value={id}>User {id}</option>
        ))}
    </select>
);

const Dashboard = () => {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [category, setCategory] = useState('all');

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => {
                if (!response.ok)
                    throw new Error(`Request failed due to ${response.status}`);
                return response.json();
            })
            .then(json => {
                setTodos(json);
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    const filteredTodos = useMemo(() => {
        return todos
            .filter(t => t.title.toLowerCase().includes(searchTerm.toLowerCase()))
            .filter(t => category === 'all' || t.userId === Number(category));
    }, [todos, searchTerm, category]);

    const userIds = useMemo(() => [...new Set(todos.map(t => t.userId))], [todos]);

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
        <div>
            <div className="controls">
                <SearchBar value={searchTerm} onChange={setSearchTerm} />
                <CategoryDropdown value={category} onChange={setCategory} userIds={userIds} />
            </div>

            <StatsCards todos={filteredTodos} />

            <div className="cards">
                {filteredTodos.map((data) => (
                    <div className="display-data" key={data.id}>
                        <h4 className="user-title">{data.title}</h4>
                        <ul className="user-list">
                            <li>User {data.userId}</li>
                            <li>{data.completed ? "Completed" : "Not completed"}</li>
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Dashboard;