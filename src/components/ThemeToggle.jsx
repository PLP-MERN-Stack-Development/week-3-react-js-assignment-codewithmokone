import { useTheme } from "../Context/ThemeContext";

const ThemeToggle = () => {
    const {theme, toggleTheme} = useTheme();

    
    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-full border dark:border-white border-gray-800 dark:text-white transition-transform duration-300 hover:scale-110"
            >
                {theme === 'light' ? '🌙' : '☀️'}
        </button>
    )

}

export default ThemeToggle;