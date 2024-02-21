import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import HomePage from "./components/pages/HomePage"
import { CryptoContextProvider } from "./context/crypto-context"
import './styles/App.scss'
import MenuNav from './components/MenuNav'
import ChartPage from './components/pages/ChartPage'

export default function App() {
  return (
    <CryptoContextProvider>
      <Router>
      <MenuNav />
      <Routes>
        <Route path='/react-crypto' element={<HomePage />} />
        <Route path='/chart' element={<ChartPage/>} />
      </Routes>
      </Router>
    </CryptoContextProvider>
  )
}
