import { Link } from 'react-router-dom'
import {Flex} from 'antd'
import MenuNavItem from './MenuNavItem';

const MenuNav = () => {
  
  return <div className="menu-nav-wrapper">
    <Link to='/react-crypto'><MenuNavItem iconName='home' name='Home'/></Link>
    <Flex align='center' gap={10}>
    <Link to='/exchanges' ><MenuNavItem iconName='exchanges' name='Exchanges'/></Link>
    <Link to='/chart' ><MenuNavItem iconName='chart' name='Chart'/></Link> 
    </Flex>    
  </div>;
};

export default MenuNav;
