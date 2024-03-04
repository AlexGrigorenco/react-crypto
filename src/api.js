import axios from "axios";
import { APIkey, baseURL } from "./constans";

export function getCryptoDAta() {
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

export function fetchAssets(){
    return new Promise((resolve) => {
        if(localStorage.getItem('cryptoAssets')){
            resolve(JSON.parse(localStorage.getItem('cryptoAssets')))
        } else{
            resolve(null)
        }
    })
}

export function saveAssets(assets){
  localStorage.setItem("cryptoAssets", JSON.stringify(assets));
}
true ? 1 : 2

