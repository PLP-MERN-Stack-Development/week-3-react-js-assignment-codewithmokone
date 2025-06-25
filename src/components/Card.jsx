const Card = ({ data }) => {
    return (
        <>
            <div key={data.id} className="w-98 h-24transform transition-transform duration-300 hover:scale-105 bg-white dark:bg-gray-800 dark:text-white rounded-xl p-4 shadow-md">
                <h4 className="font-medium">Title: {data.todo}</h4>
                <p>Completed: {data.completed ? "Yes" : "No"}</p>
            </div>
        </>
    )
}

export default Card;