import { Layout, Button, Flex } from "antd";
import CryptoSelect from "../CryptoSelect.tsx";
import { useState } from "react";
import CryptoDrawer from "../CryptoDrawer.tsx";
import { useCrypto } from "../../context/crypto-context.tsx";
import CryptoModal from "../CryptoModal.tsx";
import Icons from "../Icons.tsx";
import { IconNameList } from "../Icons.tsx";
import { Coin } from "../../types.ts";

const AppHeader = () => {
  const [modal, setModal] = useState<boolean>(false);
  const [drawer, setDrawer] = useState<boolean>(false);
  const [coin, setCoin] = useState<string | null>(null);
  const { crypto, preload } = useCrypto();

  function getCoinFromSelect(value: string): void {
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
      <div onClick={preload} className='load-button'><Icons iconName={IconNameList.Load} /> </div>
      </Flex>
      <CryptoDrawer isOpen={drawer} closeDrawer={setDrawer} />
      <CryptoModal isOpen={modal} closeModal={setModal} data={crypto.find((c: Coin) => c.id === coin)} />
    </Layout.Header>
  );
};

export default AppHeader;
