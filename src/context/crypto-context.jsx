import { createContext, useContext, useEffect, useState } from "react";
import { fakeFetchAssets, fakeFetchCrypto } from "../api";
import {calculatePercentageDifference} from "../utils.js"

const CryptoContext = createContext({
    assets:[],
    crypto: [],
    loading: false,
})

export function CryptoContextProvider({children}){

    const [loading, setLoading] = useState(false)
    const [crypto, setCrypto] = useState([])
    const [assets, setAssets] = useState([])
    
    useEffect(() => {
        async function preload(){
            setLoading(true)
            const {result} = await fakeFetchCrypto()
            const assets = await fakeFetchAssets()
            
            setCrypto(result)
            setAssets(assets.map((asset) => {
                const coin = result.find(c => c.id === asset.id)
                return {
                    grow: asset.price < coin.price,
                    growPercent: calculatePercentageDifference(asset.price, coin.price),
                    totalAmount: asset.amount * coin.price,
                    totalProfit: asset.amount * coin.price - asset.amount * asset.price,
                    ...asset,
                }
            }))
            setLoading(false)
        }
        preload()
        
    }, [])

    return <CryptoContext.Provider value={{
        assets,
        crypto,
        loading
    }}>
        {children}
    </CryptoContext.Provider>
}

export function useCrypto(){
    return useContext(CryptoContext);
}