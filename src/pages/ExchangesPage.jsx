import { useEffect, useState } from "react";
import { Input } from 'antd';
import Loader from "../components/Loader";
import { getExchangesData } from "../api";
import ExchangesCard from "../components/ExchangesCard";

const ExchangesPage = () => {
  const [exchanges, setExchanges] = useState([]);
  const [sort, setSort] = useState([]);
  const [load, setLoad] = useState(false);

  async function getExchanges() {
    setLoad(true);
    const result = await getExchangesData();
    setExchanges(result);
    filterExchanges(result, '');
    setLoad(false);
  }

  useEffect(() => {
    getExchanges();
  }, [])

  function filterExchanges(arr, value){
    setSort(arr.filter(ex => ex.name.toLocaleLowerCase().includes(value.toLocaleLowerCase())));
  }

  return (
    <div className="exchanges-page">
        <div className="exchanges-header">
        <Input placeholder="Search..." style={{maxWidth: '250px'}}  onChange={(e) => filterExchanges(exchanges, e.target.value)} />
        </div>
      <div className="cards-wrapper">
      {sort.length ? sort.map(exchange => <ExchangesCard key={exchange.id} exchange={exchange} />) : null}
      </div>
      {load && <Loader />}
    </div>
  );
};

export default ExchangesPage;
