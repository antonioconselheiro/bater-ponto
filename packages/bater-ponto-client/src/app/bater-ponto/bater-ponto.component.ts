import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataOutputDto, HoraInputDto, HoraOutputDto } from '@bater-ponto/bater-ponto-domain';
import * as moment from 'moment';
import { BaterPontoApi } from '../bater-ponto.api';

@Component({
  selector: 'bater-ponto-bater-ponto',
  templateUrl: './bater-ponto.component.html',
  styleUrls: ['./bater-ponto.component.scss'],
})
export class BaterPontoComponent implements OnInit {

  data: DataOutputDto | null = null;

  constructor(
    private readonly baterPontoApi: BaterPontoApi,
    private readonly activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.carregarData();
  }

  carregarData(): void {
    const idData = this.activatedRoute.snapshot.params['idData'];
    this.baterPontoApi
      .getData(idData)
      .then(data => this.data = data)
      .catch(e => console.error(e));
  }

  deletarHora(ponto: HoraOutputDto): void {
    this.baterPontoApi
      .deletarPonto(ponto.id)
      .then(() => this.carregarData())
      .catch(e => console.error(e));
  }

  baterPonto(data: DataOutputDto): void {
    const horaInput = new HoraInputDto(moment().format('hh:mm:ss'));
    this.baterPontoApi
      .baterPonto(data.id, horaInput)
      .then(() => this.carregarData())
      .catch(e => console.error(e));
  }

  trackByFn(index: number): number {
    return index;
  }
}
