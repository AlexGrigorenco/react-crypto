import Layout from "./components/layout/Layout"
import { CryptoContextProvider } from "./context/crypto-context"
import './styles/App.scss'

export default function App() {
  return (
    <CryptoContextProvider>
      <Layout />
    </CryptoContextProvider>
  )
}
