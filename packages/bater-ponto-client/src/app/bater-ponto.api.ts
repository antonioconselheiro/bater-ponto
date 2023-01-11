import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { DataInputDto, DataOutputDto, HoraInputDto, HoraOutputDto } from '@bater-ponto/bater-ponto-domain';
import { environment } from '../environments/environment';

@Injectable()
export class BaterPontoApi {

  constructor(
    private readonly httpClient: HttpClient
  ) { }

  listarDias(): Promise<DataOutputDto[]> {
    return firstValueFrom(this.httpClient.get<DataOutputDto[]>(
      `${environment.server}pontos/datas`
    ));
  }

  getData(idData: number): Promise<DataOutputDto> {
    return firstValueFrom(this.httpClient.get<DataOutputDto>(
      `${environment.server}pontos/datas/${idData}`
    ));
  }

  criarDia(dataInput: DataInputDto): Promise<DataOutputDto> {
    return firstValueFrom(this.httpClient.post<DataOutputDto>(
      `${environment.server}pontos/datas`, dataInput
    ));
  }

  deletarDia(idData: number): Promise<void> {
    return firstValueFrom(this.httpClient.delete<void>(
      `${environment.server}pontos/datas/${idData}`
    ));
  }

  baterPonto(idData: number, hora: HoraInputDto): Promise<HoraOutputDto> {
    return firstValueFrom(this.httpClient.post<HoraOutputDto>(
      `${environment.server}pontos/datas/${idData}/horas`, hora
    ));
  }

  deletarPonto(idData: number, idHora: number): Promise<void> {
    return firstValueFrom(this.httpClient.delete<void>(
      `${environment.server}pontos/datas/${idData}/horas/${idHora}`
    ));
  }

}
