import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CurrencyComponent } from './currency.component';
import { CurrencyService } from './currency.service';

@NgModule({
  declarations: [
    AppComponent, 
    CurrencyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CurrencyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
