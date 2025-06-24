import { NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
    const [isOpen,setIsOpen] = useState(false);

    return (
        <header className="w-full h-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300 flex items-center justify-center border-b-2">
            <div className="w-7xl p-10 flex items-center justify-between dark:text-white ">
                <h1 className="font-bold text-2xl">My App</h1>

                {/* Desktop Nav */}
                <nav className="hidden sm:w-3xs sm:flex gap-3 items-center justify-center font-medium">
                    <NavLink to="/"  className={({ isActive }) =>
                            `px-3 py-1 rounded transition-colors ${
                            isActive ? 'text-blue-600 font-semibold' : 'text-gray-700 dark:text-gray-200 hover:text-blue-500'
                            }`
                        }>Add Task</NavLink>
                    <NavLink to="taskhistory"  className={({ isActive }) =>
                            `px-3 py-1 rounded transition-colors ${
                            isActive ? 'text-blue-600 font-semibold' : 'text-gray-700 dark:text-gray-200 hover:text-blue-500'
                            }`
                        }>Task History</NavLink>
                </nav>
                <ThemeToggle className="hidden sm:flex"/>

                {/* Mobile menu button */}
                <button
                    className="sm:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <FiX/> : <FiMenu />}
                </button>
            </div>
            
            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="w-full h-50 flex flex-col items-center justify-center gap-6 absolute top-20 left-0 bg-gray-50 dark:bg-gray-900 shadow-md sm:hidden z-10">
                    <NavLink
                        to="/"
                        onClick={() => setIsOpen(false)}
                        className={({ isActive }) =>
                            `px-3 py-1 rounded transition-colors ${
                            isActive ? 'text-blue-600 font-semibold' : 'text-gray-700 dark:text-gray-200 hover:text-blue-500'
                            }`
                        }
                    >
                        Add Task
                    </NavLink>
                    <NavLink
                        to="/taskhistory"
                        onClick={() => setIsOpen(false)}
                         className={({ isActive }) =>
                            `px-3 py-1 rounded transition-colors ${
                            isActive ? 'text-blue-600 font-semibold' : 'text-gray-700 dark:text-gray-200 hover:text-blue-500'
                            }`
                        }
                    >
                        Task History
                    </NavLink>
                    <ThemeToggle />
                </div>
            )}
        </header>
    )
}

export default Navbar;