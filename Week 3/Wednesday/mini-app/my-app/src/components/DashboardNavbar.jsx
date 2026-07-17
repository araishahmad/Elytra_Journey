import React from 'react';

// props: { onMenuClick: function }
const DashboardNavbar = ({ onMenuClick }) => {
    return (
        <nav className="bg-white shadow-md px-4 py-3 flex items-center justify-between">
            <button className="md:hidden text-2xl" onClick={onMenuClick}>
                ☰
            </button>

            <h1 className="text-xl font-bold text-gray-800">
                My Dashboard
            </h1>

            <div className="w-8 h-8 rounded-full bg-gray-300"></div>
        </nav>
    );
}

export default DashboardNavbar;