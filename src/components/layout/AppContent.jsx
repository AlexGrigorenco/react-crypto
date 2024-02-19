import { Layout, Statistic, Flex } from "antd";
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { useCrypto } from "../../context/crypto-context";

const AppContent = () => {
  const { assets, crypto, coinsPricesMap } = useCrypto();

  const totalAssetsAmount = () => {
    return assets
      .map((asset) => {
        return asset.amount * asset.price;
      })
      .reduce((acc, val) => (acc += val), 0);
  };

  const totalAssetsCurrentAmount = () => {
    return assets
      .map((asset) => {
        return asset.amount * coinsPricesMap[asset.id];
      })
      .reduce((acc, val) => (acc += val), 0);
  };

  return (
    <Layout.Content id="app-content">
      <h3>
        <Flex align="center" gap={10}>
        <div>Portfolio:</div>
        {assets.length ? <Statistic
          title="Active"
          value={totalAssetsCurrentAmount()}
          precision={3}
          valueStyle={{
            color: totalAssetsAmount() < totalAssetsCurrentAmount() ? '#3f8600' : '#cf1322',
          }}
          prefix={totalAssetsAmount() < totalAssetsCurrentAmount() ? <ArrowUpOutlined /> : <ArrowDownOutlined/>}
          suffix="$"
        /> : '0$'}
        </Flex>
      </h3>
    </Layout.Content>
  );
};

export default AppContent;
