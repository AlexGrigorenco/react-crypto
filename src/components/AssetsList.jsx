import { useContext } from "react";
import AssetCard from "./AssetCard";
import Loader from "./Loader";
import {useCrypto} from "../context/crypto-context";

const AssetsList = () => {
    const {assets, loading} = useCrypto()

    return ( 
       <>
       <h2 style={{margin: '10px', fontSize: 'clamp(20px, 0.932rem + 1.59vw, 34px)'}}>Assets</h2>
       {loading && <Loader/>}
       {assets.map(asset => {
        return <AssetCard key={asset.id} asset={asset} />
       })}
       </>
     );
}
 
export default AssetsList;