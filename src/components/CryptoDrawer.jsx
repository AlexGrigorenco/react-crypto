import { Button, Drawer } from "antd";
import { useResize } from "../hooks/useResize";
import CryptoSelect from "./CryptoSelect";
import { useState } from "react";
import AddAssetForm from "./AddAssetForm";
import { useCrypto } from "../context/crypto-context";

const CryptoDrawer = ({isOpen, closeDrawer}) => {
    const { xm, sm, md } = useResize();
    const [coin, setCoin] = useState(null);
    const {crypto} = useCrypto()

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

      function handleClose(){
        setCoin(null)
        closeDrawer(false)
      }

    return ( 
        <Drawer
        className="main-drawer"
        title="Set Asset"
        placement={'right'}
        closable={false}
        onClose={() => handleClose()}
        open={isOpen}
        width={setDrawerWidth()}
        
      >
        <Button style={{position: "absolute", top: '10px', right: '10px',}} onClick={() => handleClose()} type="primary">close</Button>

        {coin && <Button style={{display: 'block',}} onClick={() => setCoin(null)} type="primary">change coin</Button>}

        {!coin ? <CryptoSelect func={setCoin} /> : <AddAssetForm coin={crypto.find(c => c.id === coin)} />}
      </Drawer>
     );
}
 
export default CryptoDrawer;