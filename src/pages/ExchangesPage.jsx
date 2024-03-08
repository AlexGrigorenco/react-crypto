import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import { getExchangesData } from "../api";
import ExchangesCard from "../components/ExchangesCard";

const ExchangesPage = () => {
  const [exchanges, setExchanges] = useState([]);
  const [load, setLoad] = useState(false);

  async function getExchanges() {
    setLoad(true);
    const result = await getExchangesData();
    setExchanges(result);
    setLoad(false);
  }

  useEffect(() => {
    getExchanges();
  }, [])

  return (
    <div className="exchanges-page">
      {exchanges.length ? exchanges.map(exchange => <ExchangesCard key={exchange.id} exchange={exchange} />) : null}
      {load && <Loader />}
    </div>
  );
};

export default ExchangesPage;
