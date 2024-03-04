import { Layout, Button, Flex } from "antd";
import CryptoSelect from "../CryptoSelect";
import { useState } from "react";
import CryptoDrawer from "../CryptoDrawer";
import { useCrypto } from "../../context/crypto-context";
import CryptoModal from "../CryptoModal";
import Icons from "../Icons";

const AppHeader = () => {
  const [modal, setModal] = useState(false);
  const [drawer, setDrawer] = useState(false);
  const [coin, setCoin] = useState(null);
  const { crypto, preload } = useCrypto();

  function getCoinFromSelect(value) {
    setCoin(value);
    setModal(true);
  }
  return (
    <Layout.Header id="app-header">
      <CryptoSelect func={getCoinFromSelect} />
      <Flex gap="10px">
      <Button onClick={() => setDrawer(true)} type="primary">
        Add Asset
      </Button>
      <div onClick={preload} className='load-button'><Icons iconName='load' /> </div>
      </Flex>
      <CryptoDrawer isOpen={drawer} closeDrawer={setDrawer} />
      <CryptoModal isOpen={modal} closeModal={setModal} data={crypto.find((c) => c.id === coin)} />
    </Layout.Header>
  );
};

export default AppHeader;
