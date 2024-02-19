import { createContext, useContext, useEffect, useState } from "react";
import { fetchAssets, getCryptoDAta } from "../api";
import { calculatePercentageDifference } from "../utils.js";

const CryptoContext = createContext({
  assets: [],
  crypto: [],
  loading: false,
});

export function CryptoContextProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [crypto, setCrypto] = useState([]);
  const [assets, setAssets] = useState([]);
  const [coinsPricesMap, setCoinsPricesMap] = useState({})

  async function preload() {
    setLoading(true);
    const { result } = await getCryptoDAta();
    const assetsData = await fetchAssets();

    const pricesMap = result.reduce((acc, coin) => {
      acc[coin.id] = coin.price;
      return acc;
    }, {});

    setCrypto(result);
    setCoinsPricesMap(pricesMap)

    getAssets(assetsData, pricesMap);
    setLoading(false);
  }

  useEffect(() => {
    preload();
  }, []);

  function getAssets(assets, coinsPricesMap) {
    assets ? setAssets(
          assets.map((asset) => {
            return {
              grow: asset.price < coinsPricesMap[asset.id],
              growPercent: calculatePercentageDifference(
                asset.price,
                coinsPricesMap[asset.id]
              ),
              totalAmount: asset.amount * coinsPricesMap[asset.id],
              totalProfit:
                asset.amount * coinsPricesMap[asset.id] - asset.amount * asset.price,
              amount: asset.amount,
              date: asset.date,
              icon: asset.icon,
              id: asset.id,
              price: asset.price,
              time: asset.time,
              assetId: asset.assetId,
            };
          })
        )
      : setAssets([]);
  }

  function removeAsset(assetId) {
    const updatedAssets = assets.filter((asset) => asset.assetId !== assetId);
    setAssets(updatedAssets);
    localStorage.setItem("cryptoAssets", JSON.stringify(updatedAssets));
  }

  function addAsset(asset) {
    const updatedAssets = [
      {
        grow: asset.price < coinsPricesMap[asset.id],
        growPercent: calculatePercentageDifference(asset.price, coinsPricesMap[asset.id]),
        totalAmount: asset.amount * coinsPricesMap[asset.id],
        totalProfit: asset.amount * coinsPricesMap[asset.id] - asset.amount * asset.price,
        amount: asset.amount,
        date: asset.date,
        icon: asset.icon,
        id: asset.id,
        price: asset.price,
        time: asset.time,
        assetId: Date.now(),
      },
      ...assets,
    ]
    setAssets(updatedAssets);
    localStorage.setItem("cryptoAssets", JSON.stringify(updatedAssets));
  }

  return (
    <CryptoContext.Provider
      value={{
        assets,
        crypto,
        loading,
        coinsPricesMap,
        removeAsset,
        addAsset,
        
      }}
    >
      {children}
    </CryptoContext.Provider>
  );
}

export function useCrypto() {
  return useContext(CryptoContext);
}
