import { createContext, useContext, useEffect, useState } from "react";
import { fetchAssets, fakeFetchCrypto } from "../api";
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

  useEffect(() => {
    async function preload() {
      setLoading(true);
      const { result } = await fakeFetchCrypto();
      const assetsData = await fetchAssets();

      setCrypto(result);

      getAssets(assetsData, result);
      setLoading(false);
    }
    preload();
  }, []);

  function getAssets(assets, result) {
    assets
      ? setAssets(
          assets.map((asset) => {
            const coin = result.find((c) => c.id === asset.id);
            return {
              grow: asset.price < coin.price,
              growPercent: calculatePercentageDifference(
                asset.price,
                coin.price
              ),
              totalAmount: asset.amount * coin.price,
              totalProfit:
                asset.amount * coin.price - asset.amount * asset.price,
              ...asset,
            };
          })
        )
      : setAssets(assets);
  }

  function removeAsset(id) {
    const updatedAssets = assets.filter((asset) => asset.id !== id);
    setAssets(updatedAssets);

    localStorage.setItem("cryptoAssets", JSON.stringify(updatedAssets));
  }

  function addAsset(asset) {
    const coin = crypto.find((c) => c.id === asset.id);
    setAssets((prevAssets) => [
        ...prevAssets,
        {
          grow: asset.price < coin.price,
          growPercent: calculatePercentageDifference(asset.price, coin.price),
          totalAmount: asset.amount * coin.price,
          totalProfit: asset.amount * coin.price - asset.amount * asset.price,
          ...asset,
        },
      ]);
      localStorage.setItem("cryptoAssets", JSON.stringify(assets));
  }

  return (
    <CryptoContext.Provider
      value={{
        assets,
        crypto,
        loading,
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
