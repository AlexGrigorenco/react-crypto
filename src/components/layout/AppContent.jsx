import {Layout} from 'antd'

const contentStyle = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#0958d9',
};

const AppContent = () => {
    return ( 
        <Layout.Content id='app-content'>Content</Layout.Content>
     );
}
 
export default AppContent;