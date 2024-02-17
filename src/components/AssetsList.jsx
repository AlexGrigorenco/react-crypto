
import AssetCard from "./AssetCard";
import Loader from "./Loader";
import {useCrypto} from "../context/crypto-context";
import { v4 as uuidv4 } from 'uuid';

const AssetsList = () => {
    const {assets, loading} = useCrypto();

    return ( 
       <>
       <h2 style={{margin: '10px', fontSize: 'clamp(20px, 0.932rem + 1.59vw, 34px)'}}>Assets</h2>
       {loading && <Loader/>}
       {assets && assets.map(asset => {
        return <AssetCard key={uuidv4()} asset={asset} />
       })}
       {!assets.length && <div style={{padding: '0 10px', lineHeight: '1.5'}}>Assets list is empty! <br /> add new asset...</div>}
       </>
     );
}
 
export default AssetsList;