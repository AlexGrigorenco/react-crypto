import axios from "axios";
import { APIkey, baseURL } from "./constans.ts";

export function getCryptoDAta(): Promise<any> {
    const limit = 1000;
    const url = `${baseURL}?limit=${limit}`;
    const options = {
      headers: {
        accept: 'application/json',
        'X-API-KEY': APIkey,
      }
    };
  
    return axios.get(url, options)
      .then(response => response.data)
      .catch(error => {
        console.error(error);
        alert('something was wrong! pleas reload page!')
        return null;
      });
  }

export function fetchAssets(): Promise<any>{
    return new Promise((resolve) => {
        if(localStorage.getItem('cryptoAssets')){
            resolve(JSON.parse(localStorage.getItem('cryptoAssets')))
        } else{
            resolve(null)
        }
    })
}

export function saveAssets(assets: Array<any>){
  localStorage.setItem("cryptoAssets", JSON.stringify(assets));
}


export function getCryptoChart(coin, period) {
  const url = `${baseURL}/${coin}/charts?period=${period}`;
  const options = {
    headers: {
      accept: 'application/json',
      'X-API-KEY': APIkey,
    }
  };

  return axios.get(url, options)
    .then(response => response.data)
    .catch(error => {
      console.error(error);
      alert('something was wrong! pleas reload page!')
      return null;
    });
}

export function getExchangesData() {
  const url = `https://openapiv1.coinstats.app/tickers/exchanges`;
  const options = {
    headers: {
      accept: 'application/json',
      'X-API-KEY': APIkey,
    }
  };

  return axios.get(url, options)
    .then(response => response.data)
    .catch(error => {
      console.error(error);
      alert('something was wrong! pleas reload page!')
      return null;
    });
}

