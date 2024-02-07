import { Layout, Space, Select, Button, Typography } from "antd";
import CryptoSelect from "../CryptoSelect";


const AppHeader = () => {
  
  return (
    <Layout.Header id="app-header">
      <CryptoSelect/>
      <Button type="primary">Add Asset</Button>
    </Layout.Header>
  );
};

export default AppHeader;
