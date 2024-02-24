import { Link } from 'react-router-dom'
import {Flex} from 'antd'
import MenuNavItem from './MenuNavItem';
import { useCrypto } from '../context/crypto-context';

const MenuNav = () => {
  const {preload} = useCrypto();
  return <div className="menu-nav-wrapper">
    <Link to='/react-crypto'><MenuNavItem iconName='home' name='Home'/></Link>
    <Flex align='center' gap={10}>
    <Link to='/chart' ><MenuNavItem iconName='chart' name='Chart'/></Link>
    <MenuNavItem iconName='load' func={preload} className='load' />
    </Flex>    
  </div>;
};

export default MenuNav;
