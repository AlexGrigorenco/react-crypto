import {Layout} from 'antd'
import "./layout.scss"
import AppHeader from './AppHeader'
import AppSideBar from './AppSideBar'
import AppContent from './AppContent'

export default function App() {
  return (
    <Layout className='layout'>
    <AppHeader/>
    <Layout>
      <AppSideBar/>
      <AppContent/>      
    </Layout>
  </Layout>
  )
}
