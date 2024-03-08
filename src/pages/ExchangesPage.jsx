import { useEffect, useState } from "react";
import { Input } from 'antd';
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

  function searchExchange(value){
    console.log(exchanges.sort(ex => ex.name.toLocaleLowerCase() === value.toLocaleLowerCase()))
    return exchanges.sort(ex => ex.name.toLocaleLowerCase() === value.toLocaleLowerCase())
  }

  return (
    <div className="exchanges-page">
        <div className="exchanges-header">
        <Input placeholder="Search..." style={{maxWidth: '250px'}}  onChange={(e) => searchExchange(e.target.value)} />
        </div>
      <div className="cards-wrapper">
      {exchanges.length ? searchExchange('').map(exchange => <ExchangesCard key={exchange.id} exchange={exchange} />) : null}
      </div>
      {load && <Loader />}
    </div>
  );
};

export default ExchangesPage;
