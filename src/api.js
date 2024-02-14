import { cryptoData } from "./data";


export function fakeFetchCrypto(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(cryptoData)
        }, 300)
    })
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