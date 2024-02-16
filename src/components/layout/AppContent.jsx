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
          <h3>Portfolio: {assets ? assets.map(asset => {
            const coin = crypto.find(c => c.id === asset.id);
            return asset.amount * asset.price;
          }).reduce((acc, val) => acc += val, 0).toFixed(2) : 0}$</h3>
        </Layout.Content>
     );
}
 
export default AppContent;