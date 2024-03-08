import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import HomePage from "./pages/HomePage"
import { CryptoContextProvider } from "./context/crypto-context"
import './styles/App.scss'
import MenuNav from './components/MenuNav'
import ChartPage from './pages/ChartPage'
import ExchangesPage from './pages/ExchangesPage'

export default function App() {
  return (
    <CryptoContextProvider>
      <Router>
      <MenuNav />
      <Routes>
        <Route path='/react-crypto' element={<HomePage />} />
        <Route path='/chart' element={<ChartPage/>} />
        <Route path='/exchanges' element={<ExchangesPage/>} />
      </Routes>
      </Router>
    </CryptoContextProvider>
  )
}
