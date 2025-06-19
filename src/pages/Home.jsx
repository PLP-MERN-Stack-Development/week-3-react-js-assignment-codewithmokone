// import { Link } from "react-router-dom";
import TaskManager from "../components/TaskManager";
// import PersonalTasks from "./PersonalTasks";

const Home = () => {
    return (
        <main className="w-7xl h-screen flex  items-center justify-center gap-20">
            <TaskManager />
        </main>
    )
}

export default Home;