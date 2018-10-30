import { Component } from '@angular/core'
import { CurrencyService } from './currency.service'

@Component({
    selector: 'currency', 
    templateUrl: './currency.component.html'
})
export class CurrencyComponent {
    exchangeRatePromise
    info

    constructor(service: CurrencyService) {
        this.exchangeRatePromise = service.getCurrency("USD", "EUR")
        console.log("CONSTRUCTOR")
    }

    ngOnInit() {
        console.log("NG ON INIT")
        this.exchangeRatePromise
        .then(data => {
            this.info = data[0].bid
        })
    }

    // ask = this.exchangeRatePromise.then(data => data[0].bid)
}