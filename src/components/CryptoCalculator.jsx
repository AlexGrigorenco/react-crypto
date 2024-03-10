import { Input } from 'antd';
import Icons from './Icons';
import { useEffect, useState } from 'react';

const CryptoCalculator = ({price, symbol}) => {

    const [coin, setCoin] = useState(null);
    const [usd, setUsd] = useState(null);

    function cryptoInputHandler(value){
        setCoin(+value)
        setUsd(+value * +price)
    }

    useEffect(() => {
        setCoin(null)
        setUsd(null)
    }, [symbol])

    function usdInputHandler(value){
        setUsd(+value)
        setCoin( +value / +price)
    }

    return ( <div className="crypto-calculator">
        <Input placeholder={symbol} value={coin ? coin : null} type="number" step="0.01" onChange={(e) => cryptoInputHandler(e.target.value)} />
        <div style={{paddingRight: '20px'}}><Icons iconName="calculator" /></div>
        <Input placeholder="USD" value={usd ? usd : null} type="number" step="0.01" onChange={(e) => usdInputHandler(e.target.value)} />
    </div> );
}
 
export default CryptoCalculator;