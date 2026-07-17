import React from 'react';

// props: { isOpen: boolean, onClose: function }
const Sidebar = ({ isOpen, onClose }) => {
    const openClasses = "fixed top-0 left-0 h-full w-64 bg-gray-800 text-white p-4 z-50";
    const closedClasses = "hidden";
    const desktopClasses = "md:block md:static md:h-auto md:w-64 bg-gray-800 text-white p-4";

    const sidebarClasses = isOpen
        ? `${openClasses} ${desktopClasses}`
        : `${closedClasses} ${desktopClasses}`;

    return (
        <div>
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
                    onClick={onClose}
                ></div>
            )}

            <div className={sidebarClasses}>
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-lg font-bold">Menu</h2>
                    <button className="md:hidden text-2xl" onClick={onClose}>
                        ✕
                    </button>
                </div>

                <ul className="space-y-4">
                    <li>Dashboard</li>
                    <li>Products</li>
                    <li>Settings</li>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;
