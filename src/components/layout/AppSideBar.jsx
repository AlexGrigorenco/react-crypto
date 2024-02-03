import {Layout} from 'antd'
import { useResize } from '../../hooks/useResize';

const AppSideBar = () => {

  function setSideBarWidth(){
    if(useResize().width < 768){
      return '80%'
    }
    return '25%'
  }

  
    return ( 
        <Layout.Sider 
        width={setSideBarWidth()}
        breakpoint="md"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
        id='app-sidebar'>
        Sider
      </Layout.Sider>
     );
}
 
export default AppSideBar;