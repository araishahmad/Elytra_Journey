import React, { useState } from 'react';
import DashboardNavbar from './DashboardNavbar';
import Sidebar from './Sidebar';
import StatsCard from './StatsCard';

const Dashboard = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    }

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    }

    return (
        <div className="min-h-screen bg-gray-100">
            <DashboardNavbar onMenuClick={toggleSidebar} />

            <div className="flex">
                <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />

                <main className="flex-1 p-6">
                    <h2 className="text-2xl font-bold mb-6">Overview</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <StatsCard title="Total Users" value="1,204" />
                        <StatsCard title="Total Sales" value="$8,540" />
                        <StatsCard title="Active Orders" value="37" />
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Dashboard;