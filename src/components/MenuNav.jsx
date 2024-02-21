import {Routes, Route, Link} from 'react-router-dom'

const MenuNav = () => {
  return <div className="menu-nav-wrapper">
 <Link to='/react-crypto' >Home</Link>
 <Link to='/chart' >Chart</Link>
  </div>;
};

export default MenuNav;
