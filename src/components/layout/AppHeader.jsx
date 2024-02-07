import { Layout, Space, Select, Button, Typography } from "antd";
import { useCrypto } from "../../context/crypto-context";

const handleSelect = (value) => {
  console.log(`selected ${value}`);
};

const AppHeader = () => {
  const {crypto} = useCrypto()
  return (
    <Layout.Header id="app-header">
      <Select
        className="select"
        placeholder="select coin"
        onSelect={handleSelect}
        optionLabelProp="label"
        options={crypto.map(coin => ({
            label: coin.name,
            value: coin.id,
            icon: coin.icon,
        }))}
        optionRender={(option) => (
          <Space style={{display: 'flex', alignItems: 'center',}}>
            <img width={26} height={26} loading="lasy" src={option.data.icon} alt={option.data.label} />
            <Typography.Text>{option.data.label}</Typography.Text>
          </Space>
        )}
      />
      <Button type="primary">Add Asset</Button>
    </Layout.Header>
  );
};

export default AppHeader;
