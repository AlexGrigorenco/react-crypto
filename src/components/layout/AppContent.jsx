import {Layout} from 'antd'
import { useCrypto } from '../../context/crypto-context';

const contentStyle = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#0958d9',
};

const AppContent = () => {
  const {assets, crypto} = useCrypto()
    return ( 
        <Layout.Content id='app-content'>
          <h3>Portfolio: {assets ? new Intl.NumberFormat("en-IN").format(assets.map(asset => {
            const coin = crypto.find(c => c.id === asset.id);
            return asset.amount * coin.price;
          }).reduce((acc, val) => acc += val, 0)) : 0}$</h3>
        </Layout.Content>
     );
}
 
export default AppContent;