import MenuNavIcon from "./MenuNavIcons";
const MenuNavItem = ({name, iconName, func, className}) => {
    return ( <div onClick={func} className={className ? "nav-item" + " " + className : "nav-item"}>
        <MenuNavIcon iconName={iconName} />
        {name ? <span>{name}</span> : null}
    </div> );
}
 
export default MenuNavItem;