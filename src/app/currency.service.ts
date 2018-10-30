export class CurrencyService {
    getCurrency(currency1, currency2) {
        const currencyPair = `${currency1}${currency2}`
        const API_KEY = '616hfXJcva1cipT1K8URIkdyINvQZTIc'
        return fetch(`https://forex.1forge.com/1.0.3/quotes?pairs=${currencyPair}&api_key=${API_KEY}`)
        .then(resp => resp.json())
    }
}
