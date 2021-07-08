import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TitleComponent } from './core/components/title/title.component';
import { DescAndPricesComponent } from './core/components/desc-and-prices/desc-and-prices.component';
import { WhyWhoWhatComponent } from './core/components/why-who-what/why-who-what.component';
import { ProductPitchComponent } from './core/components/product-pitch/product-pitch.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    DescAndPricesComponent,
    WhyWhoWhatComponent,
    ProductPitchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
