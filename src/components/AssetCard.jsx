import { Card, Statistic, List, Typography, Tag } from "antd";
import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";
import { capitalise } from "../utils";


const AssetCard = ({asset}) => {
  return (
    <Card style={{ margin: 10 }}>
      <Statistic
        title={capitalise(asset.id)}
        value={asset.totalAmount}
        precision={2}
        valueStyle={{ color: asset.grow ? "#3f8600" : "#cf1322" }}
        prefix={asset.grow ? <ArrowUpOutlined /> : <ArrowDownOutlined />}
        suffix="$"
      />

      <List
        dataSource={[
            {title: 'TotalProfit', value: asset.totalProfit.toFixed(2) + ' $', textcolor: asset.grow ? 'success' : 'danger'},
            {title: 'Asset Amount', value: asset.amount},
            {title: 'Difference', value: asset.growPercent + ' %', textcolor: asset.grow ? 'green' : 'red', Tag: true},
        ]}
        renderItem={(item) => (
          <List.Item>
            <Typography.Text>
            {item.title}
            </Typography.Text>
            {item.Tag && <Tag color={item.textcolor }>
                {item.value}
            </Tag>}
            {!item.Tag && <Typography.Text type={item.textcolor }>
                {item.value}
            </Typography.Text>}
          </List.Item>
        )}
      />
      
    </Card>
  );
};

export default AssetCard;
