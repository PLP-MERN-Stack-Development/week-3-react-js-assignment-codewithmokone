import Navbar from './components/Navbar'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TaskHistory from './pages/TaskHistory'
import Footer from './components/Footer'

function App() {

  return (
    <div className=' bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300'>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path='taskhistory' element={<TaskHistory />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </div>
    
  )
}

export default App
