import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { DiasDeTrabalhoComponent } from "./dias-de-trabalho/dias-de-trabalho.component";
import { MeusPontosComponent } from "./meus-pontos/meus-pontos.component";
import { CommonModule } from "@angular/common";

const routes: Route[] = [
  {
    path: 'dias-de-trabalho',
    component: DiasDeTrabalhoComponent
  },

  {
    path: 'meus-pontos/:idData',
    component: MeusPontosComponent
  },

  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dias-de-trabalho'
  }
];

@NgModule({
  declarations: [
    MeusPontosComponent,
    DiasDeTrabalhoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}