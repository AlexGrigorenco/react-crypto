import { useEffect } from "react";
import AssetCard from "./AssetCard";
import { fakeFetchAssets, fakeFetchCrypto } from "../api";

const AssetsList = () => {
    useEffect(() => {
        async function preload(){
            const {result} = await fakeFetchCrypto
            const assets = await fakeFetchAssets
            console.log(result)
            console.log(assets)
        }
        preload()
    }, [])

    return ( 
       <>
       <AssetCard>
        up
       </AssetCard>
       <AssetCard>
       down
      </AssetCard>
       </>
     );
}
 
export default AssetsList;