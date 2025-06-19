const Home = () => {
    return (
        <main className="w-7xl h-screen flex  items-center justify-center gap-20 bg-blue-200">
            {/* <a className="px-10 py-3 bg-white rounded font-medium" href="#">Add Task</a>
            <a className="px-4 py-3 bg-white rounded font-medium" href="#">Completed Task</a>
            <a className="px-13 py-3 bg-white rounded font-medium" href="#">News</a> */}
            <a href="#">
                 <div className="w-52 h-40 flex flex-col items-center justify-center gap-2.5 bg-white rounded">
                    <span className="w-20 h-14 flex items-center justify-center rounded bg-blue-200">Image</span>
                    <h4 className="font-medium">Personal</h4>
                    <p className="text-gray-400">17 Task</p>
                </div>
            </a>
            <a href="#">
                <div className="w-52 h-38 flex flex-col items-center justify-center gap-2.5 bg-white rounded">
                    <span className="w-20 h-14 flex items-center justify-center rounded bg-blue-200">Image</span>
                    <h4 className="font-medium">Work</h4>
                    <p className="text-gray-400">18 Task</p>
                </div>
            </a>
            
        </main>
    )
}

export default Home;