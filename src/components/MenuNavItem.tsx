import Icons from "./Icons.tsx";
import { IconNameList } from "./Icons.tsx";

interface Props {
    name: string,
    iconName: IconNameList,
    func?: () => void,
    className?: string,
}

const MenuNavItem = ({name, iconName, func, className}: Props) => {
    return ( <div onClick={func} className={className ? "nav-item" + " " + className : "nav-item"}>
        <Icons iconName={iconName} />
        {name ? <span>{name}</span> : null}
    </div> );
}
 
export default MenuNavItem;