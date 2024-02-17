import { Layout, Statistic, Flex } from "antd";
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { useCrypto } from "../../context/crypto-context";

const AppContent = () => {
  const { assets, crypto } = useCrypto();

  const cryptoPrices = crypto.reduce((acc, coin) => {
    acc[coin.id] = coin.price;
    return acc;
  }, {});

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
        return asset.amount * cryptoPrices[asset.id];
      })
      .reduce((acc, val) => (acc += val), 0);
  };

  return (
    <Layout.Content id="app-content">
      <h3>
        <Flex align="center" >
        <div>Portfolio: </div>
        <Statistic
          title="Active"
          value={totalAssetsCurrentAmount()}
          precision={3}
          valueStyle={{
            color: totalAssetsAmount() < totalAssetsCurrentAmount() ? '#3f8600' : '#cf1322',
          }}
          prefix={totalAssetsAmount() < totalAssetsCurrentAmount() ? <ArrowUpOutlined /> : <ArrowDownOutlined/>}
          suffix="$"
        />
        </Flex>
      </h3>
    </Layout.Content>
  );
};

export default AppContent;
