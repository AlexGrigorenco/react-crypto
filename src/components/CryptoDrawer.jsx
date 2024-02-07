import { Button, Drawer } from "antd";
import { useResize } from "../hooks/useResize";

const CryptoDrawer = ({isOpen, closeDrawer}) => {
    const { xm, sm, md } = useResize();

    function setDrawerWidth() {
        if (xm) {
          return "80%";
        }
        if (sm) {
          return "60%";
        }
        if (md) {
          return "40%";
        }
        return "25%";
      }

    return ( 
        <Drawer
        title="Set Asset"
        placement={'right'}
        closable={false}
        onClose={() => closeDrawer(false)}
        open={isOpen}
        width={setDrawerWidth()}
      >
        <Button style={{position: "absolute", top: '10px', right: '10px',}} onClick={() => closeDrawer(false)} type="primary">close</Button>
      </Drawer>
     );
}
 
export default CryptoDrawer;