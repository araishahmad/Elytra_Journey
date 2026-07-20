import React, { useState, useEffect } from 'react';
import DashboardNavbar from './DashboardNavbar';
import Sidebar from './Sidebar';
import StatsCard from './StatsCard';
import { postsList, usersList, todosList } from '../services/appServices'

const Dashboard = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const [stats, setStats] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    }

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    }

    useEffect(() => {
        const fetchStats = async () => {
            try {
                setLoading(true);
                setError(null);

                const [posts, users, todos] = await Promise.all([
                    postsList(),
                    usersList(),
                    todosList()
                ]);

                const activeTodos = todos.filter((todo) => !todo.completed);

                setStats({
                    totalUsers: users.length,
                    totalPosts: posts.length,
                    activeTodos: activeTodos.length,
                });
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        fetchStats();
    }, []);

    return (
        <div className="min-h-screen bg-gray-100">
            <DashboardNavbar onMenuClick={toggleSidebar} />

            <div className="flex">
                <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />

                <main className="flex-1 p-6">
                    <h2 className="text-2xl font-bold mb-6">Overview</h2>

                    {loading && (
                        <div className="flex justify-center items-center py-10">
                            <div className="w-10 h-10 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
                        </div>
                    )}

                    {!loading && error && (
                        <div className="bg-red-100 text-red-700 p-4 rounded-lg">
                            Something went wrong: {error}
                        </div>
                    )}

                    {!loading && !error && stats && (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <StatsCard title="Total Users" value={stats.totalUsers} />
                            <StatsCard title="Total Posts" value={stats.totalPosts} />
                            <StatsCard title="Active Todos" value={stats.activeTodos} />
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
}

export default Dashboard;
