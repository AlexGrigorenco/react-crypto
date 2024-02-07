import { Layout, Button, Modal, Drawer } from "antd";
import CryptoSelect from "../CryptoSelect";
import { useState } from "react";
import { useResize } from "../../hooks/useResize";

const AppHeader = () => {
  const [modal, setModal] = useState(false);
  const [drawer, setDrawer] = useState(false);
  const [coin, setCoin] = useState(null);
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


  function getCoinFromSelect(value){
    setCoin(value)
    setModal(true)
  }
  return (
    <Layout.Header id="app-header">
      <CryptoSelect func={getCoinFromSelect} />
      <Button onClick={() => setDrawer(true)} type="primary">Add Asset</Button>
      <Drawer
        title="Set Asset"
        placement={'right'}
        closable={false}
        onClose={() => setDrawer(false)}
        open={drawer}
        width={setDrawerWidth()}
      >
        <Button style={{position: "absolute", top: '10px', right: '10px',}} onClick={() => setDrawer(false)} type="primary">close</Button>
      </Drawer>
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
