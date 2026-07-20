import React from 'react';

// props: { title: string, value: string or number }
const StatsCard = ({ title, value }) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
            <h3 className="text-gray-500 text-sm mb-2">{title}</h3>
            <p className="text-3xl font-bold text-gray-800">{value}</p>
        </div>
    );
}

export default StatsCard;