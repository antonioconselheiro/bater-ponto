import { Component, OnInit } from '@angular/core';
import { DataInputDto, DataOutputDto, HoraInputDto } from '@bater-ponto/bater-ponto-domain';
import { BaterPontoApi } from '../bater-ponto.api';
import * as moment from 'moment';
import { Router } from '@angular/router';

@Component({
  selector: 'bater-ponto-criar-dia-trabalho',
  templateUrl: './criar-dia-trabalho.component.html',
  styleUrls: ['./criar-dia-trabalho.component.scss'],
})
export class CriarDiaTrabalhoComponent implements OnInit {

  dias: DataOutputDto[] = [];

  constructor(
    private readonly baterPontoApi: BaterPontoApi,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
    this.listarDias();
  }

  private listarDias(): void {
    this.baterPontoApi
      .listarDias()
      .then(dias => {
        this.dias = dias;
      })
      .catch(e => console.error(e));
  }

  baterPonto(): void {
    this.asyncBaterPonto().catch(e => console.error(e));
  }
  
  async asyncBaterPonto(): Promise<void> {
    const dataInput = new DataInputDto(moment().format('YYYY-MM-DD'));
    const dataOutput = await this.baterPontoApi.criarDia(dataInput);
    const horaInput = new HoraInputDto(moment().format('hh:mm:ss'));
    await this.baterPontoApi.baterPonto(dataOutput.id, horaInput);
    await this.router.navigate([ '/bater-ponto', dataOutput.id ]);

    return Promise.resolve();
  }

  deletarDia(dia: DataOutputDto): void {
    this.baterPontoApi
      .deletarDia(dia.id)
      .then(() => this.listarDias())
      .catch(e => console.error(e));
  }

  trackByFn(index: number): number {
    return index;
  }
}
