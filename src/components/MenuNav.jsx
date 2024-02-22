import { Link } from 'react-router-dom'
import MenuNavItem from './MenuNavItem';

const MenuNav = () => {
  return <div className="menu-nav-wrapper">
    <Link to='/react-crypto'><MenuNavItem iconName='home' name='Home'/></Link>
    <Link to='/chart' ><MenuNavItem iconName='chart' name='Chart'/></Link>
  </div>;
};

export default MenuNav;
