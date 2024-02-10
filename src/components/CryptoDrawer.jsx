import { Button, Drawer, Flex } from "antd";
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
        closeDrawer(false)
        setCoin(null)        
      }

      function findCoin(coin){
        setCoin(crypto.find(c => c.id === coin))
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

        {coin && <Flex align="center" style={{width: "100%"}} justify="space-between">
          <Flex align="center">
            <img width="30" height="30" src={coin.icon} alt={coin.name} loading="lazy" />
            <h3 style={{marginLeft: '10px', fontSize: 'clamp(20px, 0.932rem + 1.59vw, 30px)'}}>{coin.name}</h3>
          </Flex>
          <div className="coin-reset" onClick={() => setCoin(null)}></div>
          </Flex>}

        {!coin ? <CryptoSelect func={findCoin} /> : <AddAssetForm coin={coin} />}
      </Drawer>
     );
}
 
export default CryptoDrawer;