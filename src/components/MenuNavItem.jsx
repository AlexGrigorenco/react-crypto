import MenuNavIcon from "./MenuNavIcons";
const MenuNavItem = ({name, iconName}) => {
    return ( <div className="nav-item">
        <MenuNavIcon iconName={iconName} />
        <span>{name}</span>
    </div> );
}
 
export default MenuNavItem;