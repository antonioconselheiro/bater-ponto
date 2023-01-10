import { Component, OnInit } from '@angular/core';
import { BaterPontoApi } from '../bater-ponto.api';
import { DataInputDto, DataOutputDto, HoraInputDto } from '@bater-ponto/bater-ponto-shared-domain';
import * as moment from 'moment';
import { Router } from '@angular/router';

@Component({
  selector: 'bater-ponto-dias-de-trabalho',
  templateUrl: './dias-de-trabalho.component.html',
  styleUrls: ['./dias-de-trabalho.component.scss'],
})
export class DiasDeTrabalhoComponent implements OnInit {

  dias: DataOutputDto[] = [];

  constructor(
    private baterPontoApi: BaterPontoApi,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.listagemDeDiasDeTrabalho();
  }
  
  private listagemDeDiasDeTrabalho(): void {
    this.baterPontoApi
      .listarDias()
      .then(dias => this.dias = dias)
      .catch(e => console.error(e));
  }

  createData(): void {
    this.asyncCreateData()
      .catch(e => console.error(e));
  }
  
  private async asyncCreateData(): Promise<void> {
    const data = new DataInputDto(moment().format('YYYY-MM-DD'));
    const dataOutput = await this.baterPontoApi.criarDiaTrabalho(data);
    const hora = new HoraInputDto(moment().format('HH:mm:ss'));
    await this.baterPontoApi.baterPonto(dataOutput.id, hora);
    await this.router.navigate([ 'meus-pontos', dataOutput.id ]);

    return Promise.resolve();
  }

  deletarDiaTrabalho(idData: number): void {
    this.baterPontoApi
      .deletarDiaTrabalho(idData)
      .then(() => this.listagemDeDiasDeTrabalho())
      .catch(e => console.error(e));
  }

  trackByFn(index: number): number {
    return index;
  }
}
