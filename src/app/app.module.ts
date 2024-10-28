import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductService } from './productService';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  // provide here is toke or DI token
  // useClass is provider or recipe use class means service
  // type token
  providers: [{ provide: ProductService, useClass: ProductService }],
  bootstrap: [AppComponent]
})
export class AppModule { }
