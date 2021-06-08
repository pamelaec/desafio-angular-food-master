import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavegacaoModule } from './navegacao/navegacao.module';
import { ContaRoutingModule } from './conta/conta.module.route';

@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NavegacaoModule,
    ContaRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
