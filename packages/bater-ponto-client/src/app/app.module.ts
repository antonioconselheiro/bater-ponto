import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaterPontoApi } from './bater-ponto.api';
import { HttpValidatorModule } from './shared/http-validator/http-validator.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpValidatorModule
  ],
  providers: [
    BaterPontoApi
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
