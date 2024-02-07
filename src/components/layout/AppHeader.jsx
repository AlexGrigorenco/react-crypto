import { Layout, Button, Modal } from "antd";
import CryptoSelect from "../CryptoSelect";
import { useState } from "react";
import CryptoDrawer from "../CryptoDrawer";

const AppHeader = () => {
  const [modal, setModal] = useState(false);
  const [drawer, setDrawer] = useState(false);
  const [coin, setCoin] = useState(null);

  function getCoinFromSelect(value){
    setCoin(value)
    setModal(true)
  }
  return (
    <Layout.Header id="app-header">
      <CryptoSelect func={getCoinFromSelect} />
      <Button onClick={() => setDrawer(true)} type="primary">Add Asset</Button>
      <CryptoDrawer isOpen={drawer} closeDrawer={setDrawer} />
      <Modal
        title="Basic Modal"
        open={modal}
        onCancel={() => setModal(false)}
        footer={null}
      >
        {coin}
      </Modal>
    </Layout.Header>
  );
};

export default AppHeader;
