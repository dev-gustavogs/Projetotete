import { Routes, Route, BrowserRouter } from 'react-router-dom'
import MainPage from './pages/MainPage'
import SecundaryPage from './pages/SecundaryPage'
import TerceiraPage from './pages/TerceiraPage'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/secundaria" element={<SecundaryPage />} />    
        <Route path="/terceira" element={<TerceiraPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App