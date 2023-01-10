import { DataInputDto, DataOutputDto, HoraInputDto, HoraOutputDto } from '@bater-ponto/bater-ponto-shared-domain';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable()
export class BaterPontoApi {

  constructor(
    private readonly httpClient: HttpClient
  ) { }

  criarDiaTrabalho(data: DataInputDto): Promise<DataOutputDto> {
    return firstValueFrom(
      this.httpClient.post<DataOutputDto>(`${environment.server}pontos/datas`, data)
    );
  }

  listarDias(): Promise<DataOutputDto[]> {
    return firstValueFrom(
      this.httpClient.get<DataOutputDto[]>(`${environment.server}pontos/datas`)
    );
  }

  listarPontosHoje(idData: number): Promise<DataOutputDto> {
    return firstValueFrom(
      this.httpClient.get<DataOutputDto>(`${environment.server}pontos/datas/${idData}`)
    );
  }

  deletarDiaTrabalho(idData: number): Promise<void> {
    return firstValueFrom(
      this.httpClient.delete<void>(`${environment.server}pontos/datas/${idData}`)
    );
  }

  baterPonto(idData: number, hora: HoraInputDto): Promise<HoraOutputDto> {
    return firstValueFrom(
      this.httpClient.post<HoraOutputDto>(`${environment.server}pontos/datas/${idData}/horas`, hora)
    );
  }

  deletarPonto(idData: number, idHora: number): Promise<void> {
    return firstValueFrom(
      this.httpClient.delete<void>(`${environment.server}pontos/datas/${idData}/horas/${idHora}`)
    );
  }

}
