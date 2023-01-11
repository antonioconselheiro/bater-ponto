import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { BaterPontoComponent } from './bater-ponto/bater-ponto.component';
import { CriarDiaTrabalhoComponent } from './criar-dia-trabalho/criar-dia-trabalho.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    CriarDiaTrabalhoComponent,
    BaterPontoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutingModule.routes, { useHash: true })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
  static routes: Route[] = [
    {
      path: 'criar-dia-trabalho',
      component: CriarDiaTrabalhoComponent
    },

    {
      path: 'bater-ponto/:idData',
      component: BaterPontoComponent
    },

    {
      path: '',
      redirectTo: 'criar-dia-trabalho',
      pathMatch: 'full'
    }
  ]
}