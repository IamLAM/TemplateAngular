import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


//services

import {InfoService} from "./services/info.service";
import {ProductosService} from "./services/productos.service";
import {HttpModule} from "@angular/http";

//Routes
import {app_routing} from './app.routes';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { ItemComponent } from './components/item/item.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    AboutComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    app_routing,
    HttpModule
  ],
  providers: [InfoService,ProductosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
