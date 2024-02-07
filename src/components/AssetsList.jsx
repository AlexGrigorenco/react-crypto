import { useContext } from "react";
import AssetCard from "./AssetCard";
import Loader from "./Loader";
import CryptoContext from "../context/crypto-context";

const AssetsList = () => {
    const {assets, crypto, loading} = useContext(CryptoContext)

    return ( 
       <>
       {loading && <Loader/>}
       {assets.map(asset => {
        return <AssetCard key={asset.id} asset={asset} />
       })}
       </>
     );
}
 
export default AssetsList;