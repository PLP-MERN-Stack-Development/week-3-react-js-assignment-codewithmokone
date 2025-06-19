import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <header className="w-full h-20 bg-gray-50 flex items-center justify-center border-b-2">
            <div className="w-7xl p-10 flex justify-between ">
                <h1 className="font-bold text-2xl">My App</h1>
                <nav className="flex gap-2.5 font-medium">
                    <NavLink to="/">Task</NavLink>
                    <NavLink to="News">News</NavLink>
                </nav>
            </div>
            
        </header>
    )
}

export default Navbar;