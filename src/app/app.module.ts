import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FaceSnapComponent } from './face-snap/face-snap.component';
import { HeaderComponent } from './header/header.component';
import { registerLocaleData } from '@angular/common';
import * as fr from '@angular/common/locales/fr';

@NgModule({
  declarations: [
    HeaderComponent,
    AppComponent,
    FaceSnapComponent,
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue:'fr-FR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(){
    registerLocaleData(fr.default);
  }
}
