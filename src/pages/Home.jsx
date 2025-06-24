// import { Link } from "react-router-dom";
import TaskManager from "../components/TaskManager";
// import PersonalTasks from "./PersonalTasks";

const Home = () => {
    return (
        <main className="w-full flex items-center justify-center">
            <div className="w-7xl h-screen flex  items-center justify-center">
                <TaskManager />
            </div>
        </main>
    )
}

export default Home;