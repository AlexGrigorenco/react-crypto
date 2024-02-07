import { Layout, Button, Modal } from "antd";
import CryptoSelect from "../CryptoSelect";
import { useState } from "react";

const AppHeader = () => {
  const [modal, setModal] = useState(false);
  const [coin, setCoin] = useState(null);

  function getCoinFromSelect(value){
    setCoin(value)
    setModal(true)
  }
  return (
    <Layout.Header id="app-header">
      <CryptoSelect func={getCoinFromSelect} />
      <Button type="primary">Add Asset</Button>
      <Modal
        title="Basic Modal"
        open={modal}
        onOk={() => setModal(false)}
        onCancel={() => setModal(false)}
        footer={null}
      >
        {coin}
      </Modal>
    </Layout.Header>
  );
};

export default AppHeader;
