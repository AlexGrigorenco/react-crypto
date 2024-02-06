import { Card, Statistic, List, Typography } from "antd";
import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";

const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
  ];

const AssetCard = ({ children }) => {
  return (
    <Card style={{ margin: 10 }}>
      <Statistic
        title="Active"
        value={11.28}
        precision={2}
        valueStyle={{ color: children === "up" ? "#3f8600" : "#cf1322" }}
        prefix={children === "up" ? <ArrowUpOutlined /> : <ArrowDownOutlined />}
        suffix="%"
      />

      <List
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <Typography.Text mark>[ITEM]</Typography.Text> {item}
          </List.Item>
        )}
      />
    </Card>
  );
};

export default AssetCard;
