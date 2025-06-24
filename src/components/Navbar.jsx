import { NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
    return (
        <header className="w-full h-20 bg-gray-50 transition-colors duration-300 flex items-center justify-center border-b-2">
            <div className="w-7xl p-10 flex justify-between dark:text-white ">
                <h1 className="font-bold text-2xl">My App</h1>
                <nav className="flex gap-2.5 font-medium">
                    <NavLink to="/">Add Task</NavLink>
                    <NavLink to="taskhistory">Task History</NavLink>
                </nav>
                <ThemeToggle />
            </div>
            
        </header>
    )
}

export default Navbar;