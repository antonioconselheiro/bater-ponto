import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataOutputDto, HoraInputDto } from '@bater-ponto/bater-ponto-shared-domain';
import { BaterPontoApi } from '../bater-ponto.api';
import * as moment from 'moment';

@Component({
  selector: 'bater-ponto-meus-pontos',
  templateUrl: './meus-pontos.component.html',
  styleUrls: ['./meus-pontos.component.scss'],
})
export class MeusPontosComponent implements OnInit {

  diaTrabalho: DataOutputDto | null = null;

  constructor(
    private baterPontoApi: BaterPontoApi,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.listagemDePontos();
  }

  private listagemDePontos(): void {
    const idData = this.activatedRoute.snapshot.params['idData'];
    this.baterPontoApi
      .listarPontosHoje(idData)
      .then(diaTrabalho => this.diaTrabalho = diaTrabalho)
      .catch(e => console.error(e));
  }

  baterPonto(idData: number): void {
    const hora = new HoraInputDto(moment().format('HH:mm:ss'));
    this.baterPontoApi
      .baterPonto(idData, hora)
      .then(() => this.listagemDePontos())
      .catch(e => console.error(e));
  }

  deletarPonto(idData: number, idHora: number): void {
    this.baterPontoApi
      .deletarPonto(idData, idHora)
      .then(() => this.listagemDePontos())
      .catch(e => console.error(e));
  }

  trackByFn(index: number): number {
    return index;
  }
}
