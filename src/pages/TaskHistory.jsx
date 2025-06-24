import { useEffect } from "react";
import Card from "../components/Card";
import { useState } from "react";
import Button from '../components/Button'

const TaskHistory = () => {
    const [data, setData] = useState([]);
    const [searchVal, setSearchVal] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12;

    const handleSearchClick = () => {
        if (searchVal === ''){
            setSearchResults([]);
        }else{
            const filterBySearch = data.filter((item) =>
                item.title.toLowerCase().includes(searchVal.toLowerCase())
            );
            setSearchResults(filterBySearch);
            setCurrentPage(1);
        }
    }
    
    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await fetch('https://dummyjson.com/todos')
                
                const json = await response.json();
                console.log();
                
                if (response.ok) {
                    setData(json.todos);
                }
            }catch (error) {
                console.log("Failed to fetch data: ", error);
            }
        }
        fetchData();
    }, [])

    const resultToRender = searchResults.length > 0 ? searchResults : data;

    const startIndexd = (currentPage - 1) * itemsPerPage;

    const paginatedData = resultToRender.slice(startIndexd, startIndexd + itemsPerPage);

    const totalPages = Math.ceil(resultToRender.length / itemsPerPage);

    return (
        <main className="w-full flex items-center justify-center bg-gray-200 dark:bg-gray-900">
            <div className="w-7xl h-full sm:h-screen flex flex-col items-center gap-12 mt-12">
                <div>
                    <input className="w-48 sm:w-64 md:w-96 px-2 py-2 bg-white" type="text" onChange={e => setSearchVal(e.target.value)} />
                    <Button variant="primary" onClick={handleSearchClick}>Search</Button>
                </div>
                <div className="h-max grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
                    {paginatedData.map(item => (
                        <Card key={item.id} data={item} />
                    ))}   
                </div>
                <div className="flex flex-wrap justify-center gap-2 mt-4">
                    <Button
                        variant="secondary"
                        disabled={currentPage === 1}
                        onClick={() => setCurrentPage(prev => prev - 1)}
                    >
                        Prev
                    </Button>
                    {[...Array(totalPages)].map((_, index) => (
                         <Button
                            key={index}
                            variant={currentPage === index + 1 ? 'primary' : 'secondary'}
                            disabled={currentPage === totalPages}
                            onClick={() => setCurrentPage(index + 1)}
                        >
                            {index + 1}
                        </Button>
                    ))}
                    <Button
                        variant="secondary"
                        disabled={currentPage === totalPages}
                        onClick={() => setCurrentPage(prev => prev + 1)}
                    >
                        Next
                    </Button>
                </div>
            </div>
        </main>
    )
}

export default TaskHistory;