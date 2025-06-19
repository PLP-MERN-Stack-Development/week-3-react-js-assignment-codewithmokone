import Navbar from './components/Navbar'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import News from './pages/News'
import Footer from './components/Footer'

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path='news' element={<News />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
