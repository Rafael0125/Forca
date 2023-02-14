import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JogoComponent } from './jogo/jogo.component';
import { PlataformaComponent } from './jogo/plataforma/plataforma.component';
import { PalavraComponent } from './jogo/palavra/palavra.component';

@NgModule({
  declarations: [
    AppComponent,
    JogoComponent,
    PlataformaComponent,
    PalavraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
