import { Layout, Button } from "antd";
import CryptoSelect from "../CryptoSelect";
import { useState } from "react";
import CryptoDrawer from "../CryptoDrawer";
import { useCrypto } from "../../context/crypto-context";
import CryptoModal from "../CryptoModal";

const AppHeader = () => {
  const [modal, setModal] = useState(false);
  const [drawer, setDrawer] = useState(true);
  const [coin, setCoin] = useState(null);
  const { crypto } = useCrypto();

  function getCoinFromSelect(value) {
    setCoin(value);
    setModal(true);
  }
  return (
    <Layout.Header id="app-header">
      <CryptoSelect func={getCoinFromSelect} />
      <Button onClick={() => setDrawer(true)} type="primary">
        Add Asset
      </Button>
      <CryptoDrawer isOpen={drawer} closeDrawer={setDrawer} />
      <CryptoModal isOpen={modal} closeModal={setModal} data={crypto.find((c) => c.id === coin)} />
    </Layout.Header>
  );
};

export default AppHeader;
