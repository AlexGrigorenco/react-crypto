import Icons from "./Icons";
const MenuNavItem = ({name, iconName, func, className}) => {
    return ( <div onClick={func} className={className ? "nav-item" + " " + className : "nav-item"}>
        <Icons iconName={iconName} />
        {name ? <span>{name}</span> : null}
    </div> );
}
 
export default MenuNavItem;