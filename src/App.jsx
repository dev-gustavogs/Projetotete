import { Routes, Route, BrowserRouter } from 'react-router-dom'
import MainPage from './pages/MainPage'
import SecundaryPage from './pages/SecundaryPage'
import TerceiraPage from './pages/TerceiraPage'
import QuartaPage from './pages/QuartaPage'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/secundaria" element={<SecundaryPage />} />    
        <Route path="/terceira" element={<TerceiraPage />} />
        <Route path="/quarta" element={<QuartaPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App